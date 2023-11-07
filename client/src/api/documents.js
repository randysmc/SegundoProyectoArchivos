import axios from "./axios";

export const getDocumentsRequest = () => axios.get("/documents");

export const getDocumentRequest = (id) => axios.get(`/documents/${id}`);

export const createDocumentRequest = (document) =>
  axios.post("/documents", document);

export const updateDocumentRequest = (document) =>
  axios.put(`/documents/${document._id}`, document);

export const deleteDocumentRequest = (id) => axios.delete(`/documents/${id}`);
