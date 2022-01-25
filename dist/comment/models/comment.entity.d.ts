import { Posts } from 'src/post/models/post.entity';
import { User } from 'src/user/models/user.entity';
export declare class Comment {
    id: number;
    text: string;
    user: User;
    post: Posts;
}
