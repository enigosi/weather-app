import { iconsMap } from "./consts/iconsMap";

export interface Weather {
  description: string;
  icon: keyof typeof iconsMap;
  id: number;
  main: string;
}

export interface WeatherForecast {
  weather: [Weather];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  dt_txt: Date;
}

export interface ForecastResponse {
  list: WeatherForecast[];
}
