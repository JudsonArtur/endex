import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abastract.service';
import { Repository } from 'typeorm';
import { Comment } from './models/comment.entity';

@Injectable()
export class CommentService extends AbstractService {
  
    constructor(@InjectRepository(Comment) private readonly commentRepository : Repository<Comment>){
        super(commentRepository);
    }

    async comments(post_id:number) :Promise<Comment[]>{
        console.log(post_id);
      return  this.commentRepository.query(`
      SELECT * FROM comments JOIN users ON comments.user_id = users.id JOIN posts ON comments.post_id = posts.id WHERE comments.post_id = '${post_id}'
      `
      );
    }
}
