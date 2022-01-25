import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './models/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UploadController } from './../common/upload.controller';
@Module({
  imports:[
  TypeOrmModule.forFeature(
      [Posts]
    )
  ],
  controllers: [PostController,UploadController],
  providers: [PostService]
})
export class PostModule {}
