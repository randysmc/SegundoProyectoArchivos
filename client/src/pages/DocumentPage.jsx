import { useEffect } from "react";
//import { useAuth } from "../context/AuthContext"
import { useDocuments } from "../context/DocumentsContext"


function DocumentPage() {

  const { getDocuments, documents } = useDocuments();
  
  useEffect(() =>{
    getDocuments()
  }, []);

  if(documents.length === 0) return(<h1>No Documents</h1>);
  
  return (
    <div>{documents.map((document) =>(
      <div key={document._id}>
        <h1>{document.title}</h1>
        <p>{document.description}</p>
      </div>
    ))}</div>
  )
}

export default DocumentPage