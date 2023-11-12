import { createContext, useContext, useState } from "react";
import {
  copyArchiveRequest,
  createArchiveRequest,
  deleteArchiveRequest,
  getArchiveRequest,
  getArchivesRequest,
  updateArchiveRequest,
} from "../api/archives";

const ArchiveContext = createContext();

export const useArchives = () => {
  const context = useContext(ArchiveContext);

  if (!context) {
    throw new Error("useArchives must be used within a ArchiveProvider");
  }
  return context;
};

export function ArchiveProvider({ children }) {
  const [archives, setArchives] = useState([]);

  const getArchives = async () => {
    try {
      const res = await getArchivesRequest();
      setArchives(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getArchive = async (id) => {
    try {
      const res = await getArchiveRequest(id);
      return res.data;
      //console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  const createArchive = async (archive) => {
    try {
      const res = await createArchiveRequest(archive);
      setArchives(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArchive = async (id) => {
    try {
      const res = await deleteArchiveRequest(id);
      if (res.status === 204)
        setArchives(archives.filter((archive) => archive._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateArchive = async (id, archive) => {
    try {
      await updateArchiveRequest(id, archive);
    } catch (error) {
      console.log(error);
    }
  };

 /** const copyArchive = async(id, archive) =>{
    try {
      const res = await copyArchiveRequest(id, archive);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  } */

  return (
    <ArchiveContext.Provider
      value={{
        archives,
        getArchives,
        createArchive,
        getArchive,
        deleteArchive,
        updateArchive,
        
      }}
    >
      {children}
    </ArchiveContext.Provider>
  );
}
