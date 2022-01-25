import { 
    Controller, Get, Post, Body, Param, UseInterceptors,
    ClassSerializerInterceptor, UseGuards, Put, Delete,
    Query, Req, BadRequestException
    } 
     from '@nestjs/common';
import { UserCreateDto } from './models/user-create.dto';
import { User } from './models/user.entity';
import * as bcrypt from 'bcryptjs';
import { UserService } from './user.service';
import { AuthGuard } from './../auth/auth.guard';
import { UserUpdateDto } from './models/user-update.dto';
import { AuthService } from 'src/auth/auth.service';
import { request, Request } from 'express';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
    constructor(private userService:UserService,
        private authService: AuthService){

    }
    @Get()
    async all(@Query('page') page = 1, relations = []){
        return this.userService.paginate(page,['role']);
    }
   
    @Post()
    async create(
        @Body() body: UserCreateDto
    ):Promise<User>{
        const password = await bcrypt.hash('1234',12);
        const {role_id,...data} = body;
      return this.userService.create({
          ...data,
          password, role:{
              id:body.role_id
          }
      });
  } 
  @Get(':id')
  async get(@Param('id') id : number){
      return this.userService.findOne({id});
  }
  @Put(':id')
  async update(@Param('id') id : number, @Body() body : UserUpdateDto){
    const {role_id,...data} = body;
      await this.userService.update(id,{...data,role:{
          id:role_id
      }});
      return this.userService.findOne({id});
  }
  @Delete(':id')
  async delete(@Param('id') id :number ){
      return this.userService.delete(id);
  }
  
  @Put('info')
  async updateInfo(@Req() request :Request, @Body() body : UserUpdateDto){
     const id = await this.authService.userId(request);
     await this.userService.update(id,body);
     return this.userService.findOne({id});
  }
  @Put('password')
  async updatePassword(
    @Req() request: Request,
    @Body('password') password:string,
    @Body('password_confirm') password_confirm :string
    ){
        if(password !== password_confirm){
            throw new BadRequestException("Palavra Passe de confirmação invalida")
        }
        const id = await this.authService.userId(request);
        const hashed = await bcrypt.hash(password,'12');
        await this.userService.update(id,{
            password:hashed
        });
        return this.userService.findOne({id});

  }
}
