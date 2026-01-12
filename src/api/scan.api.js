import api from "./axios";

export const scanURL = (url) => api.post("/scan", { url });