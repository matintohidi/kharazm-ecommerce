import * as path from "node:path";
import * as process from "node:process";
import { generateApi } from "swagger-typescript-api";

const output = path.resolve(process.cwd(), "./src/lib");

await generateApi({
  output,
  fileName: "services.ts",
  url: "http://127.0.0.1:8000/swagger/?format=openapi",
  httpClientType: "fetch",
  sortTypes: true,
  sortRoutes: true,
  moduleNameFirstTag: true,
});
