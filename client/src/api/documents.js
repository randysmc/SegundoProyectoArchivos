import axios from "./axios";

export const getDocumentsRequest = async () => axios.get("/documents");

export const getDocumentRequest = async (id) => axios.get(`/documents/${id}`);

export const createDocumentRequest = async (document) =>
  axios.post("/documents", document);

export const updateDocumentRequest = async (document) =>
  axios.put(`/documents/${document._id}`, document);

export const deleteDocumentRequest = async (id) => axios.delete(`/documents/${id}`);
