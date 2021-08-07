import { getCustomRepository } from "typeorm"
import { ProductRepository } from "../repositories/ProductRepository"

interface IProductRequest {
    name: string,
    brand: string,
    type: string,
    price: string,
    sold: boolean,
}

class CreateProductService {
    async execute({ name, brand, type, price, sold } : IProductRequest) {

        if(!name) {
            throw Error("Invalid Name")
        }
        
        if(!brand) {
            throw Error("Invalid Brand")
        }
        
        if(!type) {
            throw Error("Invalid Type")
        }
        
        if(!price) {
            throw Error("Invalid Price")
        }

        const productRepository = getCustomRepository(ProductRepository);

        // const productAlreadyExists = await productRepository.findOne({
        //     name
        // });

        const product = productRepository.create({
            name,
            brand, 
            type, 
            price
        });


        await productRepository.save(product);

        return product;
    }
}

export { CreateProductService }