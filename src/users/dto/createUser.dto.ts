import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength,  } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}