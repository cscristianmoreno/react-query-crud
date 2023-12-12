import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import RequestService from "../services/request.service";

export class RequestInterceptor {

    constructor() {
        this.interceptorInitialized();
    }

    public interceptorInitialized(): void {
        RequestService.interceptors.request.use((req: InternalAxiosRequestConfig<unknown>): InternalAxiosRequestConfig<unknown> | Promise<InternalAxiosRequestConfig<unknown>> => {
            req.headers["Content-Type"] = "application/json";
            return req;
        });

        RequestService.interceptors.response.use(
            (res: AxiosResponse<unknown>): AxiosResponse<unknown>  => {
                return res;
            },
            (error: AxiosError): void => {
                throw Error(error.message);
            }
        );
    }
}