import { Router } from "express";

const router = Router();

import * as documentsController from "../controllers/documents.controller.js";
import { authRequire, isAdmin } from "../api/src/middlewares/validateToken.js";
import { validateSchema } from "../api/src/middlewares/validator.middleware.js";
import {createDocumentSchema} from "../api/src/schemas/document.schema.js"

router.get("/", [authRequire, /*isAdmin*/], documentsController.getDocuments);

router.get("/:id", documentsController.getDocumentById);

router.post("/",
  [authRequire, /*isAdmin*/],
  validateSchema(createDocumentSchema),
  documentsController.createDocument
);

router.put(
  "/:id",
  [authRequire, /*isAdmin*/],
  documentsController.updateDocument
);

router.delete(
  "/:id",
  [authRequire, /*isAdmin*/],
  documentsController.deleteDocument
);

export default router;
