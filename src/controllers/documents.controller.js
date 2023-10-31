import Document from "../models/documents.model.js"

export const getDocuments = async (req, res) =>{
    const documents = await Document.find();
    res.json(documents);

}

export const createDocument = async (req, res) =>{
    //1:26:00 video
}

export const getDocumentById = async (req, res) =>{
    res.json('Todos los documentos')
}



export const updateDocument = async (req, res) =>{
    res.json('Todos los documentos')
}

export const deleteDocument = async (req, res) =>{
    res.json('Todos los documentos')
}

