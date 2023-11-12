import { useArchives } from "../context/ArchivesContext";
import { Link } from "react-router-dom";
import { useFiles } from "../context/FilesContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

function ArchiveCard({ archive }) {
  const { deleteArchive,  } = useArchives();

  return (
    <div className="bg-gray-800 max-w-sm rounded p-4">
      <header className="flex flex-col items-center">
        <h1 className="text-3xl text-white font-bold my-2">{archive.title}</h1>
        <div className="flex flex-col items-center gap-4">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              deleteArchive(archive._id)
            }
            }
          >
            Eliminar
          </button>
         <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" 
         to={`/archives/${archive._id}`}
         >
         Editar
         </Link>

         <Link className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md" 
         to={`/archive/${archive._id}`}
         >
         Ver Contenido
         </Link>
         <button
            className="bg-slate-500 hover:bg-slate-600-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              deleteArchive(archive._id)
            }
            }
          >Crear Copia</button>
        </div>
      </header>
      <div className="mt-4">
        {archive.file.map((fileItem) => (
          <h2 key={fileItem._id} className="text-ellipsis text-2xl text-white">
            Carpeta:
            {fileItem.name}
          </h2>
        ))}
        <div className="flex justify-end mt-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md">
            Acceder
          </button>
        </div>
      </div>
      <p className="text-white mt-4"> fecha: {dayjs(archive.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
}

export default ArchiveCard;
