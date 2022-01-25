import { AbstractService } from 'src/common/abastract.service';
import { Repository } from 'typeorm';
import { Comment } from './models/comment.entity';
export declare class CommentService extends AbstractService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    comments(post_id: number): Promise<Comment[]>;
}
