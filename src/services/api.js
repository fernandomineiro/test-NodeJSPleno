import axios from "axios";



const api = axios.create({
  baseURL: "http://images.contelege.com.br/poi.json",
});

export default api;