import { BadRequestException, 
    Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Post, Req, Res,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import { UserService } from './../user/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './models/register.dto';
import { JwtService } from '@nestjs/jwt';
import * as cookieParser from 'cookie-parser';
import { Request,response,Response } from 'express';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class AuthController {
    constructor(private userService : UserService,
        private jwtService: JwtService,
        private authService: AuthService
    ){}

    @Post('register')
    async register(@Body() body : RegisterDto){
          const hashed = await bcrypt.hash(body.password,12);
          if(body.password !== body.password_confirm){
              throw new BadRequestException(" A senha não confirma!");              
          }
        return this.userService.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            phone: body.phone,
            password:hashed,
            entry_date : body.entry_date,
            role_id:{id:'1'}
        });
    }
    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password:string,
        @Res({passthrough:true}) response:Response
    ){
        const user = await this.userService.findOne({email});
        if(!user){
            throw new NotFoundException('Usuario não encontrado.');
        }
        if(!await bcrypt.compare(password,user.password)){
            throw new BadRequestException('Email ou senha está errada.');
        }
        const jwt = await this.jwtService.signAsync({id: user.id});
        response.cookie('jwt',jwt,{
            httpOnly:true
        });
        return user;
    }
    @UseGuards(AuthGuard)
    @Get('user')
    async user (@Req() request: Request){
        const cookie = request.cookies['jwt'];
        const id = await this.authService.userId(request);
        return this.userService.findOne({id});
    }
    
    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(@Res({passthrough:true}) response:Response){
        response.clearCookie('jwt');
        return {
            message:'Sucesso'
        }
    }



}
