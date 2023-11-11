import { useFiles } from "../context/FilesContext";
import { Link } from "react-router-dom";



function FileCard({file}) {
  
  return (
    <div className="bg-zinc-700 max-w-sm rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl">{file.name}</h1>
        <div className="flex gap-x-3 items-end">
        <Link className="bg-blue-500 text-white px-4 py-2 rounded-md">Ver archivos</Link>
        </div>
      </header>

  </div>
  )
}

export default FileCard