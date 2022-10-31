import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    async createProducts(req): Promise<string> {
        return 'Produto criado com sucesso!';
    }

    async findAll() {
        return 'Lista de produtos';
    }

    async update(id: string, req) {
        return `Usuário ${id} atualizado com sucesso!`;
    }
}
