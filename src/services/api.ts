import axios from "axios";
import { ForecastResponse } from "../types";

// normally it would go .env file
const API_URL = "http://api.openweathermap.org/data/2.5/";
const OPEN_WEATHER_MAP_ID = "3cea82ccc1906b947b7710e80277d6e6";
const TEMPERATURE_UNIT = "metric";

const client = axios.create({ baseURL: API_URL });

export const getWeatherForecastData = (cityNmae: string) =>
  client.get<ForecastResponse>("forecast", {
    params: { APPID: OPEN_WEATHER_MAP_ID, q: cityNmae, units: TEMPERATURE_UNIT }
  });
