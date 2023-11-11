import { useArchives } from "../context/ArchivesContext";
import {Link} from 'react-router-dom'


function ArchiveCard({ archive }) {
    

  return (
    <div className="bg-green-900 max-w-sm round">
        <header className="flex justify-between">
            <h1 className="text-2xl">{archive.title}</h1>
            <div className="flex gap-3 items-center">
                <button className="bg-red-800 hover:bg-red-500 text-white px-4 py-2 rounded-md"
                >
                    Eliminar
                </button>
                <Link className="bg-blue-500 text-white px-4 py-2 rounded-md"/>
            </div>
        </header>
        <p className="text-ellipsis ">{archive.file}</p>
    </div>
  )
}

export default ArchiveCard