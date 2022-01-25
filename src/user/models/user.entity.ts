import { Exclude } from 'class-transformer';
import { Role } from 'src/role/models/role.entity';
import {Column,Entity,PrimaryGeneratedColumn,ManyToOne,JoinColumn} from 'typeorm'

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    first_name:string;

    @Column()
    last_name :string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    @Exclude()
    password :string;

    @Column() 
    entry_date : string;
    
    @Column() 
    image : string;

    @ManyToOne(()=>Role)
    @JoinColumn({name:'role_id'})
    role:Role
}