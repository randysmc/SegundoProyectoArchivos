import { Router } from "express";

const router = Router()

import * as productsController from "../controllers/products.controller.js";
import { verifyToken, isAdmin, isEmployed } from "../api/src/middlewares/authJwt.js";



router.get('/', productsController.getProducts);

router.get('/:productId', productsController.getProductById);

router.post('/', [verifyToken, isAdmin],  productsController.createProduct);


router.put('/:productId', [verifyToken, isEmployed], productsController.updateProductById);

router.delete('/:productId', [verifyToken, isEmployed], productsController.deleteProductById);



export default router; 

   