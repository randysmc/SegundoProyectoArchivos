import { Router } from "express";
//import { } from "../controllers/auth.controller.js"
import * as authsController from "../controllers/auth.controller.js"


const router = Router();

router.post('/signup', authsController.signUp);


router.post('/signin', authsController.signIn);

export default router;