import { useDocuments } from "../context/DocumentsContext";
import {Link} from 'react-router-dom'

function DocumentCard({ document }) {
  const { deleteDocument } = useDocuments();
  //console.log(document)
  return (
    <div className="bg-red-950 max-w-sm rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl">{document.title}</h1>
        <div className="flex gap-x-3 items-center">
          <button
            onClick={() => {
              deleteDocument(document._id)
            }}
          >
            Eliminar
          </button>
          <Link to={`/documents/${document._id}`}>Editar</Link>
        </div>
      </header>
      <p className="text-ellipsis">{document.description}</p>

      <p>{new Date(document.date).toLocaleDateString()}</p>
    </div>
  );
}

export default DocumentCard;
