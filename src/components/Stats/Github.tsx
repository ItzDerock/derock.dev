import { useQuery } from "react-query"
import type { Repository } from "@saber2pr/types-github-api"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function useGithubAPI(repo: string) {
  return useQuery(["github", repo], async () => {
    const url = `https://api.github.com/repos/${repo}`;
    const { data } = await axios.get<Repository>(url);

    return data;
  });
}

export default function GithubStars({ repo }: { repo: string }) {
  const { data, error, isLoading } = useGithubAPI(repo);

  if(isLoading) return <span className="text-secondary transition-colors animate-pulse">...</span>;
  if(error || !data) return <span className="text-primary transition-colors">Err!</span>;

  return (
    <span className="text-white transition-colors"> 
      <FontAwesomeIcon icon={faStar} size="xs" />
      {data.stargazers_count} 
    </span>
  )
}