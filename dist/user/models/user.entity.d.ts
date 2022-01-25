import { Role } from 'src/role/models/role.entity';
export declare class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    entry_date: string;
    image: string;
    role: Role;
}
