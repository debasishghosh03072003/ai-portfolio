import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-portfolio-ar7f.onrender.com",
});

export const sendMessage = async (message: string) => {
  const res = await API.post("/chat", { message });
  return res.data.reply;
};