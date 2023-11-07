import { createContext, useContext, useState } from "react";
import { createDocumentRequest, getDocumentsRequest } from "../api/documents";

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
      setDocuments(res.data)
    } catch (error) {
      console.log(error)
      
    }
  };

  const createDocument = async (document) => {
    console.log("document la concha de la lora");
    const res = await createDocumentRequest(document);
    console.log(res);
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        createDocument,
        getDocuments,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}
