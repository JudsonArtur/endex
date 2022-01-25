import { IsNotEmpty, IsEmail, IsEmpty } from "class-validator";

export class UserCreateDto{
    @IsNotEmpty()
    first_name:string;

    @IsNotEmpty()
    last_name :string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    phone: string;
    
    password ?:string;

    @IsNotEmpty()
    entry_date : string;

    image?:string;
    
    @IsNotEmpty()
    role_id : number;
}