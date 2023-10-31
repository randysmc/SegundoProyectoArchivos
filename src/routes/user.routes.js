import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controller.js";


import { checkRolesExisted } from "../middlewares/verifySignup.js";
import {authRequire, isAdmin} from '../middlewares/validateToken.js'


router.get("/", userController.getUsers);

router.post("/", userController.createUser);


export default router;
