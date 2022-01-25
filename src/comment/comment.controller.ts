import { Controller, Get, Param,Post,Body,Put,Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentCreatePdo } from './models/comment-create.dto';
import { Comment } from './models/comment.entity';
import { CommentUpdatePdo } from './models/comment-update.dto';

@Controller('comments')

export class CommentController {

    constructor(private commentService : CommentService){}

        @Get(':post_id')
        async all(@Param('post_id') post_id:number){
            return this.commentService.comments(post_id);
        }
        @Post()
        async create(@Body() body: CommentCreatePdo):Promise<Comment>{
            const {post_id,user_id,...data} = body;
            return this.commentService.create(
              {...data,user:{id:body.user_id},post:{id:body.post_id}});
      }
     
      @Put(':id')
        async update(@Param('id') id : number, @Body() body : CommentUpdatePdo){
            const {user_id,post_id,...data} = body;
            await this.commentService.update(id,{...data,
                user:{id:user_id},post:{id:post_id}});
        return this.commentService.findOne({id});
      }
      @Delete(':id')
        async delete(@Param('id') id :number ){
          return this.commentService.delete(id);
      }
    
}
