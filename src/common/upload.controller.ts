import { Controller, Get, Param, Post, UploadedFile, UseInterceptors,Res, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Response } from 'express';
import path from 'path/posix';
import { fileFilter } from '../helps/fileFilter';

@Controller()
export class UploadController {

    @Post('uploads')
    @UseInterceptors(FileInterceptor('image',{
        storage:diskStorage({
            destination: './uploads',
            filename(_,file,callback){
                const randomName = Array(32).fill(null).map(()=>(Math.round(Math.random() * 16)).toString(16)).join('');
                 return callback(null,`${randomName}${extname(file.originalname)}`);
            }
        }),
         fileFilter:fileFilter,
    })
    )
    UploadFile(@UploadedFile() file){
        try{
            return{url:`http://localhost:3003/api/${file.path}`.replace('\\','/')}
        }catch(e){
           throw new BadRequestException("Formato de ficheiro errado.");
           
        }
    }
    @Get('uploads/:path')
    async getImage(@Param('path') path, @Res() res:Response){
        res.sendFile(path,{root:'uploads'});
        console.log('get');
    }
}
