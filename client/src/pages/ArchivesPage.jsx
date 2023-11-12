import { useEffect } from "react";
import { useArchives } from "../context/ArchivesContext";
import ArchiveCard from '../components/ArchiveCard'


function ArchivesPage() {
  const { getArchives, archives } = useArchives();

  useEffect(() => {
    getArchives();
  }, []);

  if(archives.length === 0) return <h1> No Archives </h1>
  //console.log(archives)

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
        {archives.map((archive) =>(
            <ArchiveCard archive={archive} key={archive._id}/>
        ))}
    </div>
  )
}

export default ArchivesPage

/**
 * <h1>nombre</h1>
<h1>{archive.title}</h1>
<h1>Carpeta</h1>
<h2>{archive.user.username}</h2>
<h3>{archive.file.name}</h3>
 */