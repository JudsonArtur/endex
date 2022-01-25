import { User } from './../../user/models/user.entity';
import { Category } from './../../category/models/category.entity';
import { Role } from 'src/role/models/role.entity';
export declare class Posts {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    views: number;
    video: string;
    image: string;
    audio: string;
    created: string;
    status: number;
    start_date: string;
    end_date: string;
    like: number;
    dislike: number;
    user: User;
    category: Category;
    role: Role;
}
