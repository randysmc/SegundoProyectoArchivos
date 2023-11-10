import axios from "axios";

export const getFileRequest = async() => axios.get('/files');