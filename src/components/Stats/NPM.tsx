import { createResource, Show } from "solid-js";
import { request } from "~/utils/request";

type NPMJSResponse = {
  downloads: number;
  start: string;
  end: string;
  package: string;
}

const fetchNpmjs = async (pkg: string) => {
  return request<NPMJSResponse>(
    `https://api.npmjs.org/downloads/point/last-week/${pkg}`,
  );
}

const formatter = new Intl.NumberFormat("en-US");

export default function NPMStats(props: { pkg: string }) {
  const [npmjs] = createResource(props.pkg, fetchNpmjs);

  return (
    <Show when={npmjs()}>
      {formatter.format(npmjs()!.downloads)}
    </Show>
  );
}