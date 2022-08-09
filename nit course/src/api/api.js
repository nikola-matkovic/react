import axios from "axios";

const quoteApi = axios.create({
  baseURL: "https://api.quotable.io",
});

const catApi = axios.create({
  baseURL: "https://api.thecatapi.com/",
});

export { quoteApi, catApi };
