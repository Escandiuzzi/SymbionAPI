import { response, Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";

const createProductController = new CreateProductController();

const router = Router();

///Product
router.post("/product", createProductController.handle);

export { router }