 import {
     IsNotEmpty
 }
  from  'class-validator'
  export class RegisterDto{
      
   
    @IsNotEmpty()
    first_name:string;

    @IsNotEmpty()
    last_name :string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    password :string;

    @IsNotEmpty()
    entry_date : string;

    @IsNotEmpty()
    password_confirm : string;
    

  }