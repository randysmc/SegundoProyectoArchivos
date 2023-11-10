import { createContext, useContext, useState } from "react";



const FileContext = createContext();

//componentes que necesitan acceder a los datos del contexto
export const useFiles = () => {
    const context = useContext(FileContext);

    if(!context){
        throw new Error('useFiles must be used within a FileProvider')
    }
    return context;
};

//useState devuelve un array con dos elementos
//el primero es el estado actual
//el segundo permite actualizar el estado
export function FileProvider({children}){
    const [files, setFiles] = useState([]);


    return(
        <FileContext.Provider
            value={{
                files,
            }}     
        >
            {children}
        </FileContext.Provider>
    );

    

}