import {Router} from 'express'

const router = Router();

import *as archivesController from '../controllers/archives.controller.js';
import { authRequire } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createArchiveSchema } from '../schemas/archives.schema.js';

router.get('/', archivesController.getArchives);

router.get('/:id', archivesController.getArchive)

router.post('/',  archivesController.createArchive);

router.put('/:id', archivesController.updateArchive);

router.delete('/:id', archivesController.deleteArchive)

router.post('/:id', archivesController.copyArchive);


export default router;
/**validateSchema(createArchiveSchema) */
