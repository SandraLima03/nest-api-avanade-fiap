import { IsNotEmpty, IsNumberString, IsString  } from "class-validator";

export class CreateProductsDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumberString()
    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @IsString()
    description: string;


    @IsNotEmpty()
    @IsNumberString()
    categoryId: number;

}