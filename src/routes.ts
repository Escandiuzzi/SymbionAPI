import { response, Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { ListProductsController } from "./controllers/ListProductsController";


const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();

const router = Router();

///Product
router.post("/product", createProductController.handle);
router.get("/products", listProductsController.handle)

export { router }