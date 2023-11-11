import { useEffect } from "react";
import { useFiles } from "../context/FilesContext";
import FileCard from "../components/FileCard";

function FilePage() {
  const { getFiles, files } = useFiles();

  useEffect(() => {
    getFiles();
  }, []);

  if (files.length === 0) return <h1> No Files </h1>;

  return (
    <div className="grid sm¨grid-cols-1 md:grid-cols-1 gap-3 px-4">
      {
        files.map(file => (
<FileCard file={file} key={file._id}/>
        ))
      }
    </div>
  )
}

export default FilePage;
