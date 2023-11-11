import { createContext, useContext, useState } from "react";
import { createArchiveRequest, getArchivesRequest } from "../api/archives";

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

  const createArchive = async (archive) => {
    try {
      const res = await createArchiveRequest(archive);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getArchives = async () => {
    try {
      const res = await getArchivesRequest();
      setArchives(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ArchiveContext.Provider
      value={{
        archives,
        getArchives,
        createArchive,
      }}
    >
      {children}
    </ArchiveContext.Provider>
  );
}
