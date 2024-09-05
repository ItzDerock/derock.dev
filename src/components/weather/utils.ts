// https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2

const CODE_MAP = {
  // Thunderstorm
  200: "thundery",
  201: "thundery",
  202: "stormy",
  210: "thundery",
  211: "thundery",
  212: "stormy",
  221: "thundery",
  230: "thundery",
  231: "thundery",
  232: "stormy",

  // Drizzle
  300: "drizzly",
  301: "drizzly",
  302: "drizzly",
  310: "drizzly",
  311: "drizzly",
  312: "drizzly",
  313: "showery",
  314: "showery",
  321: "drizzly",

  // Rain
  500: "rainy",
  501: "rainy",
  502: "rainy",
  503: "rainy",
  504: "rainy",
  511: "frosty",
  520: "showery",
  521: "showery",
  522: "showery",
  531: "showery",

  // Snow
  600: "snowy",
  601: "snowy",
  602: "snowy",
  611: "sleety",
  612: "sleety",
  613: "sleety",
  615: "slushy",
  616: "slushy",
  620: "snowy",
  621: "snowy",
  622: "snowy",

  // Atmosphere
  701: "misty",
  711: "smoky",
  721: "hazy",
  731: "dusty",
  741: "foggy",
  751: "sandy",
  761: "dusty",
  762: "ashy",
  771: "squally",
  781: "stormy",

  // Clear
  800: "clear",

  // Clouds
  801: "partly cloudy",
  802: "partly cloudy",
  803: "mostly cloudy",
  804: "overcast",
};

export function weatherCodeToAdjective(code: number) {
  return code in CODE_MAP ? CODE_MAP[code as keyof typeof CODE_MAP] : null;
}
