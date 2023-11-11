import axios from "./axios";

export const getArchivesRequest = async () => axios.get("/archives");

export const getArchiveRequest = async (id) => axios.get(`/archives/${id}`);


export const createArchiveRequest = async (archive) =>
  axios.post("/archives", archive);

export const updateArchiveRequest = async (id, archive) =>
  axios.put(`/archives/${id}`, archive);

export const deleteArchiveRequest = async (id) =>
  axios.delete(`/archive/${id}`);
