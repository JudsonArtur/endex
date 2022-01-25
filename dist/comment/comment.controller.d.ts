import { CommentService } from './comment.service';
import { CommentCreatePdo } from './models/comment-create.dto';
import { Comment } from './models/comment.entity';
import { CommentUpdatePdo } from './models/comment-update.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    all(post_id: number): Promise<Comment[]>;
    create(body: CommentCreatePdo): Promise<Comment>;
    update(id: number, body: CommentUpdatePdo): Promise<any>;
    delete(id: number): Promise<any>;
}
