/// <reference path="../.astro/types.d.ts" />
/// <reference path="../.astro/env.d.ts" />
/// <reference types="astro/client" />

declare module "@11ty/eleventy-fetch" {
  type FetchType = "json" | "buffer" | "text";

  type EleventyFetchOptionsBase<TType extends FetchType> = {
    type: TType;
    directory?: string;
    concurrency?: number;
    fetchOptions?: RequestInit;
    dryRun?: boolean;
    removeUrlQueryParams?: boolean;
    verbose?: boolean;
    hashLength?: number;
    duration?: string;
    formatUrlForDisplay?: (url: string) => string;
  };

  type EleventyFetch = <TReturn, TType extends FetchType = "json">(
    url: string,
    options: EleventyFetchOptionsBase<TType>,
  ) => Promise<
    TType extends "json"
      ? TReturn
      : TType extends "buffer"
        ? Buffer
        : TType extends "text"
          ? string
          : never
  >;

  const fetch: EleventyFetch;
  export default fetch;
}
