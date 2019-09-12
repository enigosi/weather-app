import React from "react";
import { WeatherForecast } from "../types";
import styled from "styled-components";
import Icon from "./Icon";

const WeatherTile = ({ weather, isLarge }: { weather: WeatherForecast; isLarge?: boolean }) => (
  <Wrapper>
    <ConditionWrapper>
      <Icon iconId={weather.weather[0].icon} isLarge={isLarge} />
      <ConditionLabel>{weather.weather[0].main}</ConditionLabel>
    </ConditionWrapper>
    <TempWrapper>
      <TempCurrent isLarge={isLarge}>{Math.round(weather.main.temp)}°</TempCurrent>
      <TempMin isLarge={isLarge}>{Math.round(weather.main.temp_min)}°</TempMin>
      <TempMax isLarge={isLarge}>{Math.round(weather.main.temp_max)}°</TempMax>
    </TempWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 16px;
`;

const ConditionWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 32px;
`;

const ConditionLabel = styled.div`
  margin-top: 8px;
`;

const TempWrapper = styled.div`
  position: relative;
  padding-right: 16px;
`;

const TempCurrent = styled.div`
  font-size: ${({ isLarge }: { isLarge?: boolean }) => (isLarge ? 96 : 48)}px;
`;

const TempMin = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  font-size: ${({ isLarge }: { isLarge?: boolean }) => (isLarge ? 16 : 12)}px;
`;

const TempMax = styled(TempMin)`
  bottom: 0;
  top: auto;
`;

export default WeatherTile;
