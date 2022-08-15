import { useEffect, useState } from "react";

export function useTime(updateIntervalMS: number = 1000) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    } , updateIntervalMS);

    return () => {
      clearInterval(interval);
    }
  } , [updateIntervalMS]);

  return time;
}