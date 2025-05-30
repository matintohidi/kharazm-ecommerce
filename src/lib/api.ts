import { API_URL } from "@/configs/app.config";
import { Api as SwaggerApi } from "@/lib/services";

export const Api = new SwaggerApi({
  baseUrl: API_URL,
});
