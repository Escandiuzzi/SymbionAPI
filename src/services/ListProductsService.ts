import { getCustomRepository } from "typeorm"
import { ProductRepository } from "../repositories/ProductRepository"

class ListProductsService {
    async execute() {

        const productRepository = getCustomRepository(ProductRepository);

        const products = productRepository.find(); 

        return products;

    }
}

export { ListProductsService }