import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { RoleService } from './role/role.service';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { UploadController } from './common/upload.controller';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'ende_data',
      autoLoadEntities :true,
      synchronize:true,
    }),
    AuthModule,
    CommonModule,
    RoleModule,
    PermissionModule,
    PostModule,
    CategoryModule,
    CommentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
