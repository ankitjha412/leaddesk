import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const getLeads = (params) => API.get("/leads", { params });
export const getSummary = () => API.get("/leads/summary");
export const addLead = (data) => API.post("/leads", data, {
    headers: { "Content-Type": "multipart/form-data" },
});
export const updateLead = (id, data) => API.put(`/leads/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
});
export const deleteLead = (id) => API.delete(`/leads/${id}`);
