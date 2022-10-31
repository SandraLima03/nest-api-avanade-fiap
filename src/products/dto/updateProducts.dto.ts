import { PartialType } from "@nestjs/mapped-types";
import { CreateProductsDTO } from "./createProducts.dto";


export class UpdateProductsDTO extends PartialType(CreateProductsDTO) {}