import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controller.js";

import { isAdmin, verifyToken, isEmployed } from "../middlewares/authJwt.js";
import { chekRolesExisted } from "../middlewares/verifySignup.js";
//import { verifyToken, isAdmin, isEmployed } from "../middlewares/authJwt.js";

router.get("/", userController.getUsers);

/**
 * router.post('/', [verifyToken,
    isAdmin,
    chekRolesExisted], userController.createUser)
 * 
 */


    export default router;
