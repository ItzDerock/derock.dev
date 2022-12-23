import { z } from "zod";
import { config } from "dotenv";
import { isServer } from "solid-js/web";

// raise an error if this somehow gets imported into a browser bundle
if (typeof window !== "undefined" || !isServer) {
  throw new Error("This file should only be imported into a server bundle");
}

// load .env file
config();

// define schema
export const serverSchema = z.object({
  GITHUB_PAT: z.string()
});

// parse
const _serverEnv = serverSchema.safeParse(process.env);

// validate
if (!_serverEnv.success) {
  throw new Error("Invalid server environment variables");
}

// export env
export default _serverEnv.data;