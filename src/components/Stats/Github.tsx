import { Repository } from "@saber2pr/types-github-api";
import { createResource, Show } from "solid-js";
import { request } from "~/utils/request";

const fetchGithub = async (repo: string) => {
  return request<Repository>(
    `https://api.github.com/repos/${repo}`,
  );
}

const formatter = new Intl.NumberFormat("en-US");

export default function GithubStars(props: { repo: string }) {
  const [data] = createResource(props.repo, fetchGithub);

  return (
    <Show when={data()} fallback={<span class="animate-pulse">...</span>}>
      {formatter.format(data()!.stargazers_count)}
    </Show>
  )
}