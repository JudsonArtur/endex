import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { User } from './models/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from './../auth/auth.module';
import { UploadController } from '../common/upload.controller';
@Module({
   imports:[
  
 TypeOrmModule.forFeature(
      [User]
    ),
    CommonModule,
    AuthModule
   ],
  controllers: [
    UserController,
    UploadController
   
  ],
  providers: [UserService],
  
  exports:[
    UserService
  ]
})
export class UserModule {}
