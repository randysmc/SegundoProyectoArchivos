import { useEffect } from "react";
//import { useAuth } from "../context/AuthContext"
import { useDocuments } from "../context/DocumentsContext";
import DocumentCard from "../components/DocumentCard";

function DocumentPage() {
  const { getDocuments, documents } = useDocuments();

  useEffect(() => {
    getDocuments();
  }, []);

  if (documents.length === 0) return <h1>No Documents</h1>;

  return (
    <div>
      {documents.map((document) => (
        <DocumentCard document={document} key={document._id}/>
      ))}
    </div>
  );
}

export default DocumentPage;