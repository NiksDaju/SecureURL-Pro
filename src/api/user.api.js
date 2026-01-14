import api from "./axios";

export const getUserProfile = () => api.get("/user/profile");

export const updateProfile = (payload) =>
  api.put("/user/profile", payload);   // { name, password? }

export const getScanHistory = () => api.get("/scan/history");
