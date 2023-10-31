import { Router } from "express";

const router = Router();

import * as documentsController from '../controllers/documents.controller.js'
//import { verifyToken, isAdmin, isEmployed } from "../middlewares/authJwt";


router.get('/', documentsController.getDocuments);

router.get('/:documentId', documentsController.getDocumentById);

router.post('/', documentsController.createDocument);

router.put('/:documentId', documentsController.updateDocument);

router.delete('/:documentId', documentsController.deleteDocument);



export default router;
