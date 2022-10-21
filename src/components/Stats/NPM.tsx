import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useQuery } from "react-query";
import { Error, Loading } from "./common/States";

function useNPMAPI(packageName: string) {
  return useQuery(["github", packageName], async () => {
    const url = `https://api.npmjs.org/downloads/point/last-week/${encodeURIComponent(packageName)}`
    const { data } = await axios.get<NPMResponse>(url);

    return data;
  }, {
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    cacheTime: 1000 * 60 * 60 * 12, // 12 hours
  });
}

export default function NPMDownloads({ packageName }: { packageName: string }) {
  const { data, error, isLoading } = useNPMAPI(packageName);

  // if(isLoading) return <Loading />;
  // if(error || !data) return <Error />;

  return (
    <span className="text-white transition-colors">
      <FontAwesomeIcon icon={faDownload} className="mr-2" />
      {
        isLoading ? <Loading />
          : (error || !data) ? <Error />
          : data.downloads.toLocaleString()
      } {" "}
      <span className="text-secondary text-2xs">
        downloads / week
      </span>
    </span>
  )
}

type NPMResponse = {
  downloads: number
  start: string
  end: string
  package: string
}