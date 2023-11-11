import axios from "./axios";

export const getFilesRequest = async() => axios.get('/files');