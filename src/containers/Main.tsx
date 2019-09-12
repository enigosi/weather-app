import React, { useState } from "react";
import { getWeatherForcast } from "../services/weather";
import WeatherTile from "../components/WeatherTile";
import { WeatherForecast } from "../types";
import styled from "styled-components";
import Layout from "../components/Layout";

const GENERIC_ERR_MESSAGE =
  "Oops! Something went wrong! Check if you input is correct and try again.";

const Main = () => {
  const [cityName, updateCityName] = useState("");
  const [currentWeather, updateCurrentWeather] = useState<WeatherForecast>();
  const [dailyWeather, updateDailyWeather] = useState<WeatherForecast[]>();

  const handleCitySubmit = async () => {
    try {
      const { daily, current } = await getWeatherForcast(cityName);
      updateCurrentWeather(current);
      updateDailyWeather(daily);
    } catch (e) {
      alert(GENERIC_ERR_MESSAGE);
    }
  };

  return (
    <Layout>
      <Label>Check weather for your city:</Label>
      <InputWrapper>
        <Input value={cityName} onChange={e => updateCityName(e.target.value)} />
        <Button disabled={!cityName} onClick={handleCitySubmit}>
          Send
        </Button>
      </InputWrapper>

      {currentWeather && (
        <CurrentWeatherWrapper>
          <WeatherTile isLarge weather={currentWeather} />
        </CurrentWeatherWrapper>
      )}

      {dailyWeather && (
        <>
          <Label>Forcast for following days:</Label>
          <ForcastWrapper>
            {dailyWeather.map(weather => (
              <WeatherTile weather={weather} key={weather.dt_txt.toString()} />
            ))}
          </ForcastWrapper>
        </>
      )}
    </Layout>
  );
};

const Label = styled.div`
  margin-bottom: 16px;
  font-weight: bold;
`;

const CurrentWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #ddd;
  margin-bottom: 16px;
`;
const Input = styled.input`
  border: none;
  flex-grow: 2;
  padding: 16px;
`;
const Button = styled.button`
  min-width: 100px;
`;

const ForcastWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export default Main;
