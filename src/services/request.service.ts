import axios, { AxiosInstance } from "axios";

const URL: string = "http://localhost:8080";

const RequestService: AxiosInstance = axios.create({
    baseURL: URL
});

export default RequestService;