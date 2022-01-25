import { 
    Entity,Column,PrimaryGeneratedColumn,
    ManyToMany,JoinTable,ManyToOne,
    JoinColumn
}  from 'typeorm'
import { Permission } from './../../permission/models/permission.entity';
import { User } from './../../user/models/user.entity';
import { Category } from './../../category/models/category.entity';
import { Role } from 'src/role/models/role.entity';

@Entity('posts')
export class Posts{
   @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
    @Column()
    subtitle:string;
    @Column()
    content:string;
    @Column()
    views:number;
    @Column()
    video: string;
    @Column()
    image:string;
    @Column()
    audio: string;
    @Column()
    created:string;
    @Column()
     status:number;
    @Column()
     start_date:string;
    @Column()
    end_date: string;    
    @Column()
    like : number;
    @Column()
    dislike : number;
    @ManyToOne(()=>User)
    @JoinColumn({name:'author'})
     user:User

     @ManyToOne(()=>Category)
    @JoinColumn({name:'category'})
     category:Category
     
     @ManyToOne(()=>Role)
    @JoinColumn({name:'role_id'})
     role:Role

}