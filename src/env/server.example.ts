import { isServer } from "solid-js/web"

if(!isServer) {
  throw new Error("SERVER ONLY ENV LOADED ON CLIENT!!!");
}

export default {
  GITHUB_API_TOKEN: "github_pat here"
}