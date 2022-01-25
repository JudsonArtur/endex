import { Posts } from 'src/post/models/post.entity';
import { User } from 'src/user/models/user.entity';
import { Entity, PrimaryGeneratedColumn, Column,JoinColumn,ManyToOne} from 'typeorm';
@Entity('comments')
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    text:string;

    @ManyToOne(()=>User)
    @JoinColumn({name:'user_id'})
    user:User
    
    @ManyToOne(()=>Posts)
    @JoinColumn({name:'post_id'})
    post:Posts
}