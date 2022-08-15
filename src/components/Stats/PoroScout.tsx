import axios from "axios";
import { useQuery } from "react-query"
import { OutsideLink } from "../Links/OutsideLink";

function useTopGGAPI() {
  return useQuery(["poroscout-guilds"], async () => {
    // delay for demo purposes
    // await new Promise(resolve => setTimeout(resolve, 1000));

    const { data } = await axios.get<StatcordResponse>(
      "https://api.statcord.com/v3/913190001007804426"
    );

    if(data.error) {
      throw new Error(`Failed to load poroscout guilds: ${data.message}`);
    }

    return data;
  });
}

export default function PoroScoutGuilds() {
  // https://top.gg/api/bots/913190001007804426
  const { data, error, isLoading } = useTopGGAPI();

  if(isLoading) return <span className="text-secondary transition-colors animate-pulse">...</span>;
  if(error || !data) return <span className="text-primary transition-colors">Err!</span>;

  return (
    <OutsideLink to="https://top.gg/bot/913190001007804426">
      {data.data[0]?.servers}
    </OutsideLink>
  )
}


export interface StatcordResponse {
  error: boolean
  data: StatcordData[]
  popular: StatcordPopular[]
  message?: string
}

export interface StatcordData {
  time: number
  servers: string
  users: string
  commands: string
  active: string
  custom1: string
  custom2: string
  memactive: string
  memload: string
  bandwidth: string
  cpuload: string
  count: number
  popular: Popular[]
  votes: number
}

export interface Popular {
  name: string
  count: string
}

export interface StatcordPopular {
  name: string
  count: string
}
