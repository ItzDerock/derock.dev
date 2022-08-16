import { useQuery } from "react-query"
import type { Repository } from "@saber2pr/types-github-api"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";
import { Error, Loading } from "./common/States";

function useGithubAPI(repo: string) {
  return useQuery(["github", repo], async () => {
    const url = `https://api.github.com/repos/${repo}`;
    const { data } = await axios.get<Repository>(url);

    return data;
  });
}

export default function GithubStats({ repo }: { repo: string }) {
  const { data, error, isLoading } = useGithubAPI(repo);

  if(isLoading) return <Loading />;
  if(error || !data) return <Error />;

  return (
    <span className="text-white transition-colors"> 
      <FontAwesomeIcon icon={faStar} size="xs" className="mr-2" />
      {data.stargazers_count.toLocaleString()} 
      <span className="text-secondary text-2xs">
        {" "}stars
      </span>

      <span className="text-dots"> | </span>

      <FontAwesomeIcon icon={faCodeFork} size="xs" className="mr-2" />
      {data.forks_count.toLocaleString()}
      <span className="text-secondary text-2xs">
        {" "}forks
      </span>
    </span>
  )
}