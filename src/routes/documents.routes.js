import { Router } from "express";

const router = Router();

import * as documentsController from "../controllers/documents.controller.js";
import { authRequire, isAdmin } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import {createDocumentSchema} from "../schemas/document.schema.js"

router.get("/", [authRequire, isAdmin], documentsController.getDocuments);

router.get("/:documentId", documentsController.getDocumentById);

router.post(
  "/",
  [authRequire, isAdmin],
  validateSchema(createDocumentSchema),
  documentsController.createDocument
);

router.put(
  "/:documentId",
  [authRequire, isAdmin],
  documentsController.updateDocument
);

router.delete(
  "/:documentId",
  [authRequire, isAdmin],
  documentsController.deleteDocument
);

export default router;
