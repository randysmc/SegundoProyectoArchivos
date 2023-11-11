import { useDocuments } from "../context/DocumentsContext";
import { useFiles } from "../context/FilesContext";
import {Link} from 'react-router-dom'
import dayjs from "dayjs";
import utc  from "dayjs/plugin/utc";

function DocumentCard({ document }) {
  const { deleteDocument } = useDocuments();
  //console.log(document)
  return (
    <div className="bg-gray-700 max-w-sm rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl">{document.title}</h1>
        <div className="flex gap-x-3 items-center">
          <button
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              deleteDocument(document._id)
            }}
          >
            Eliminar
          </button>
          <Link className="bg-blue-700 text-white px-4 py-2 rounded-md" to={`/documents/${document._id}`}>Editar</Link>
        </div>
      </header>
      <p className="text-ellipsis">{document.description}</p>

      <p>
        {dayjs(document.date).utc().format('DD/MM/YYYY') }
      </p>
    </div>
  );
}


function Document2Card({ file }) {
  const { deleteDocument } = useDocuments();
  //console.log(document)
  return (
    <div className="bg-gray-700 max-w-sm rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl">{file.name}</h1>
      </header>
      <p className="text-ellipsis">{file.path}</p>

      <p>
        {dayjs(document.date).utc().format('DD/MM/YYYY') }
      </p>
    </div>
  );
}

export {DocumentCard, Document2Card};
