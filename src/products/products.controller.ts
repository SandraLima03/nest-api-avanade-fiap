import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CreateProductsDTO } from './dto/createProducts.dto';
import { UpdateProductsDTO } from './dto/updateProducts.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    
    
    @Post()
    async createProducts(@Body() req): Promise<string> {
        return this.productsService.createProducts(req);
    }

    @Get()
    async findAll() {
        return this.productsService.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() req: UpdateProductsDTO) {
        return this.productsService.update(id, req);
    }

}
