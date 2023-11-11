import { useEffect } from "react";
import { useArchives } from "../context/ArchivesContext";
import { Link } from "react-router-dom";

function ArchivePage() {
  const { getArchives, archives } = useArchives();

  useEffect(() => {
    getArchives();
  }, []);

  if(archives.length === 0) return <h1> No Archives </h1>

  return <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
    {
        archives.map(archive => (
            <div className="bg-green-950" key={archive._id}>
                <header className="flex justify-between">
                    <h1 className="text-2xl">{archive.title}</h1>
                    <div className="flex gap-x-3 items-center">
                        <button className="bg-red-800 text-white px-4 py-2 rounded-md">
                            Eliminar
                        </button>
                        <Link className="bg-blue-600 text-white px-4 py-2 rounded-md">
                            Editar
                        </Link>
                    </div>
                </header>
                <div className="bg-green-800">
                <p className="text-ellipsis">{archive.file}</p>
                </div>
            </div>
        ))
    }
  </div>;
}

export default ArchivePage;


/**
 * <h1>nombre</h1>
<h1>{archive.title}</h1>
<h1>Carpeta</h1>
<h2>{archive.user.username}</h2>
<h3>{archive.file.name}</h3>
 */