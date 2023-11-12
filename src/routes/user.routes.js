import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controller.js";


import { checkRolesExisted } from "../api/src/middlewares/verifySignup.js";
import {authRequire, isAdmin} from '../api/src/middlewares/validateToken.js'


router.get("/", userController.getUsers);

router.post("/", userController.createUser);

router.put( '/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.get('/:id', userController.getUser);


export default router;
