import { useArchives } from "../context/ArchivesContext";
import { Link } from "react-router-dom";
import {useFiles} from '../context/FilesContext'

function ArchiveCard({ archive }) {

  const {deleteArchive} = useArchives()
  
  console.log(files)

  return (
    <div className="bg-green-900 max-w-sm round">
      <header className="flex justify-between">
        <h1 className="text-2xl">{archive.title}</h1>
        <div className="flex gap-3 items-center">
          <button className="bg-red-800 hover:bg-red-500 text-white px-4 py-2 rounded-md">
            Eliminar
          </button>
          <Link className="bg-blue-500 text-white px-4 py-2 rounded-md" />
        </div>
      </header>
      <div>
        {archive.file.map((fileItem) => (
          <h2 key={fileItem._id} className="text-ellipsis text-2xl">Carpeta: 
            {fileItem.name}
          </h2>
        ))}
        <div className="flex gap-x-0 items-end">
          <button className="bg-teal-700 hover:bg-teal-500 text-white px-4 py-2 rounded-md" >Acceder</button>
        </div>
      </div>
    </div>
  );
}

export default ArchiveCard;
