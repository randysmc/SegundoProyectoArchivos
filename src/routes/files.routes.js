import { Router } from "express";

const router = Router();

import * as filesController from '../controllers/files.controller.js'
import { validateSchema } from "../api/src/middlewares/validator.middleware.js";
import { createFileSchema } from '../api/src/schemas/files.schema.js'

router.get('/', filesController.getFiles);

router.get('/:id', filesController.getFile);

router.post('/', validateSchema(createFileSchema), filesController.createFile);

router.delete('/:id', filesController.deleteFile);

router.put('/:id', filesController.updateFile);



export default router;