import { useEffect, useState } from "react";
import { useArchives } from "../context/ArchivesContext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { copyArchiveRequest } from "../api/archives";

function InfoArchivePage() {
  const { getArchive, archives } = useArchives();
  const { setValue } = useForm();
  const [archive, setArchive] = useState({});
  const params = useParams();

  useEffect(() => {
    async function loadArchive() {
      if (params.id) {
        const value = await getArchive(params.id);
        setArchive((prevArchive) => {
          // Evita realizar la petición si el valor no ha cambiado
          return JSON.stringify(prevArchive) !== JSON.stringify(value)
            ? value
            : prevArchive;
        });
      }
    }

    loadArchive();
  }, [params.id, getArchive]);


  const handleCopyArchive = async () => {
    try {
      const res = await copyArchiveRequest(params.id, archive);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (archive === null) return <h1>Loading</h1>;

  return (
    <div className="bg-gray-900 p-4 rounded-md">
      <header className="text-3xl font-bold mb-6 text-white">
        Detalles del Archivo
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-100 mb-1">
            Título
          </label>
          <h1 className="text-2xl font-bold mb-4">{archive.title}</h1>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100 mb-1">
            Descripción
          </label>
          <p className="text-white bg-gray-950 rounded-md p-3">
            {archive.description}
          </p>
        </div>
        <div className="col-span-2">
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            to={"/archives"}
          >
            Volver
          </Link>
          <button
            onClick={handleCopyArchive}
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md ml-2"
          >
            Hacer una copia del archivo
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoArchivePage;

//manager, vendedor, ingreso,
//usuario de base de datos
//dar todos los permisos

/**
 * 
 * 
function InfoArchivePage() {
  const { getArchive, archives } = useArchives();
  const { setValue } = useForm();
  const [archive, setArchive] = useState({});
  const params = useParams();

  useEffect(() => {
    async function loadArchive() {
      if (params.id) {
        const value = await getArchive(params.id);
        setArchive(value);
      }
    }
    loadArchive();
  }, [params.id, getArchive, archive]);

  //if (archives.length === 0) return <h1>No Documents</h1>;
  if (archive === null) return <h1>Loading</h1>;
  return (


<div className="bg-gray-900 p-4 rounded-md">
  <header className="text-3xl font-bold mb-6 text-white">Detalles del Archivo</header>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-100 mb-1">
        Título
      </label>
      <h1 className="text-2xl font-bold mb-4">{archive.title}</h1>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-100 mb-1">
        Descripción
      </label>
      <p className="text-white bg-gray-950 rounded-md p-3">{archive.description}</p>
    </div>
    <div className="col-span-2">
      <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      to={'/archives'}>
        Volver
      </Link>
    </div>

  </div>
  </div>
  
  
    );
  }
 */
