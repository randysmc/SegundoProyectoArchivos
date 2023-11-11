import { useEffect } from "react";
//import { useAuth } from "../context/AuthContext"
import { useDocuments } from "../context/DocumentsContext";
import {DocumentCard, Document2Card} from "../components/DocumentCard";
import {useFiles} from '../context/FilesContext'

function DocumentPage() {
  const { getDocuments, documents } = useDocuments();
  const { getFiles, files} = useFiles();

  useEffect(() => {
    getDocuments();
  }, []);

  useEffect(()=>{
    getFiles()
  },[])

  if (documents.length === 0) return <h1>No Documents</h1>;

  
  return (
<div>
<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
      {documents.map((document) => (
        <DocumentCard document={document} key={document._id}/>
      ))}
    </div>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
      {files.map((file) => (
        <Document2Card file={file} key={file._id}/>
      ))}
    </div>
</div>


  );
}

export default DocumentPage;
