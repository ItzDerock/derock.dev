declare module "@solidjs/start-vercel" {
  import { Adapter } from "@solidjs/start/vite/plugin";
  export default function vercel(): Adapter;
}
