import { getHours, isSameDay } from "date-fns/fp";
import { getWeatherForecastData } from "./api";
import { WeatherForecast } from "../types";

const NOON_HOURS = 12;

const getIsNoon = (forcast: WeatherForecast) => getHours(new Date(forcast.dt_txt)) === NOON_HOURS;
const getIsNotToday = (forcast: WeatherForecast) =>
  !isSameDay(new Date(forcast.dt_txt), new Date());

export const getWeatherForcast = async (cityName: string) => {
  const { data } = await getWeatherForecastData(cityName);
  // forcast endpoint returnes item with forcast for every 3h
  // I need only one a day so I'm filtering it to ones from noon (not ideal but quick solution)
  const daily = data.list.filter(getIsNoon).filter(getIsNotToday);

  return {
    current: data.list[0],
    daily
  };
};
