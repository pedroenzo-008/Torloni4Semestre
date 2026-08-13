import axios from "axios";

const apiPort = "3000";
const apiUri = "172.16.36.23";

const localApi = `http://${apiUri}:${apiPort}`;

const externalApi = null;

const api = axios.create({
  baseURL: localApi,
});

export default api;