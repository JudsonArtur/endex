import { IsNotEmpty, IsEmail, IsEmpty } from "class-validator";

export class PostCreateDto{
  
    @IsNotEmpty()
    title:string;
    @IsNotEmpty()
    subtitle:string;

    content?:string;    
    views?:number;    
    video?: string;
    image?:string;
    audio?: string;
    
    @IsNotEmpty()
    created:string;
    
    @IsNotEmpty()
     status:number;
    
    start_date?:string;
    end_date?: string;    
    like? : number;
    dislike? : number;

    @IsNotEmpty()
    role_id : number;
     
    @IsNotEmpty()
    category : number;
    @IsNotEmpty()
    author : number;
}

