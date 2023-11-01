import { Router } from "express";
//import { } from "../controllers/auth.controller.js"
import {register, login, logout, profile} from '../controllers/auth.controller.js'
import {authRequire, isAdmin} from '../middlewares/validateToken.js'
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/register',validateSchema(registerSchema), register);


router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile', [authRequire, isAdmin], profile);

/* 1:09 headers y cookie */

export default router;