import { Router } from "express";

const router = Router()

import * as productsController from "../controllers/products.controller.js";
import { verifyToken } from "../middlewares/authJwt.js";



router.get('/', productsController.getProducts);

router.get('/:productId', productsController.getProductById);

router.post('/', verifyToken,  productsController.createProduct);


router.put('/:productId', productsController.updateProductById);

router.delete('/:productId', productsController.deleteProductById);



export default router; 

//1:39    