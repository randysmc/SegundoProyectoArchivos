import { createContext, useContext, useState } from "react";
import {
  createDocumentRequest,
  getDocumentsRequest,
  deleteDocumentRequest,
  getDocumentRequest,
  updateDocumentRequest,
} from "../api/documents";

const DocumentContext = createContext();

//hook
export const useDocuments = () => {
  const context = useContext(DocumentContext);

  if (!context) {
    throw new Error("useDocumentas must be used within a DocumentProvider");
  }
  return context;
};

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState([]);

  const getDocuments = async () => {
    try {
      const res = await getDocumentsRequest();
      setDocuments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createDocument = async (document) => {
    //console.log("document la concha de la lora");
    const res = await createDocumentRequest(document);
    console.log(res);
  };

  const deleteDocument = async (id) => {
    try {
      const res = await deleteDocumentRequest(id);
      if (res.status === 204)
        setDocuments(documents.filter((document) => document._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getDocument = async (id) => {
    try {
      const res = await getDocumentRequest(id);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  };

  const updateDocument = async (id, document) => {
    try {
      await updateDocumentRequest(id, document);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DocumentContext.Provider
      value={{
        documents,
        createDocument,
        getDocuments,
        deleteDocument,
        getDocument,
        updateDocument
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}
