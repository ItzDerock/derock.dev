/**
 * Represents the response from the Weather API
 * Comments from the official documentation, with the help of claude 3.5
 */
export interface WeatherApiResponse {
  /** Latitude of the location, decimal (−90; 90) */
  lat: number;
  /** Longitude of the location, decimal (-180; 180) */
  lon: number;
  /** Timezone name for the requested location */
  timezone: string;
  /** Shift in seconds from UTC */
  timezone_offset: number;
  /** Current weather data API response */
  current: {
    /** Current time, Unix, UTC */
    dt: number;
    /** Sunrise time, Unix, UTC. Not returned for polar areas in midnight sun and polar night periods */
    sunrise?: number;
    /** Sunset time, Unix, UTC. Not returned for polar areas in midnight sun and polar night periods */
    sunset?: number;
    /** Temperature. Units - default: kelvin, metric: Celsius, imperial: Fahrenheit */
    temp: number;
    /**
     * Temperature accounting for human perception of weather.
     * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit
     */
    feels_like: number;
    /** Atmospheric pressure on the sea level, hPa */
    pressure: number;
    /** Humidity, % */
    humidity: number;
    /**
     * Atmospheric temperature below which water droplets begin to condense and dew can form.
     * Units – default: kelvin, metric: Celsius, imperial: Fahrenheit
     */
    dew_point: number;
    /** Cloudiness, % */
    clouds: number;
    /** Current UV index */
    uvi: number;
    /** Average visibility, metres. The maximum value of the visibility is 10 km */
    visibility: number;
    /**
     * Wind speed.
     * Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
     */
    wind_speed: number;
    /**
     * Wind gust.
     * Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
     */
    wind_gust?: number;
    /** Wind direction, degrees (meteorological) */
    wind_deg: number;
    /** Precipitation data */
    rain?: {
      /** Precipitation volume for last hour, mm */
      "1h"?: number;
    };
    /** Snow data */
    snow?: {
      /** Snow volume for last hour, mm */
      "1h"?: number;
    };
    /** Weather condition details */
    weather: Array<{
      /** Weather condition id */
      id: number;
      /** Group of weather parameters (Rain, Snow, etc.) */
      main: string;
      /** Weather condition within the group */
      description: string;
      /** Weather icon id */
      icon: string;
    }>;
  };
}
