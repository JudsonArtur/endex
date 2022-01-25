import { IsNotEmpty } from 'class-validator';

export class CommentCreatePdo{
    
    @IsNotEmpty()
    text:string;
    @IsNotEmpty()
    post_id:string;
    @IsNotEmpty()
    user_id:string;
}