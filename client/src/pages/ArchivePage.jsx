import { useEffect } from "react";
import { useArchives } from "../context/ArchivesContext";
import { Link } from "react-router-dom";
import ArchiveCard from '../components/ArchiveCard'

function ArchivePage() {
  const { getArchives, archives } = useArchives();

  useEffect(() => {
    getArchives();
  }, []);

  if(archives.length === 0) return <h1> No Archives </h1>
  //console.log(archives)

  return (
    <div>
        {archives.map((archive) =>(
            <ArchiveCard archive={archive} key={archive._id}/>
        ))}
    </div>
  )
}

export default ArchivePage;


/**
 * <h1>nombre</h1>
<h1>{archive.title}</h1>
<h1>Carpeta</h1>
<h2>{archive.user.username}</h2>
<h3>{archive.file.name}</h3>
 */