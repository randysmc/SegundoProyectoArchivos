import { Router } from "express";

const router = Router();

import * as documentsController from '../controllers/documents.controller.js'
import { authRequire, isAdmin } from "../middlewares/validateToken.js";



router.get('/', [authRequire, isAdmin], documentsController.getDocuments);

router.get('/:documentId', documentsController.getDocumentById);

router.post('/', [authRequire, isAdmin], documentsController.createDocument);

router.put('/:documentId',[authRequire, isAdmin],documentsController.updateDocument);

router.delete('/:documentId',[authRequire, isAdmin], documentsController.deleteDocument);



export default router;
