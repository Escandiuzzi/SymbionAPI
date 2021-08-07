import { Request, Response } from "express"
import { CreateProductService } from "../services/CreateProductService"

class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, brand, type, price, sold }  = request.body;

        const createProductService = new CreateProductService();

        const user = await createProductService.execute({ name, brand, type, price, sold });

        return response.json(user);
    }
}

export { CreateProductController }