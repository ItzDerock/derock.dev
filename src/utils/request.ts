import { isServer } from "solid-js/web";
import { useRequest } from "solid-start/server";

export function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  const event = useRequest();
  
  if (isServer) {
    return event.fetch(url, options).then(res => res.json());
  } else {
    return fetch(url, options).then(res => res.json());
  }
}