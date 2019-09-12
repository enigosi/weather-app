import React from "react";
import styled from "styled-components";
import { iconsMap } from "../consts/iconsMap";

const DEFAULT_ICON_CODE = "01d";

const Icon = ({ iconId, isLarge }: { iconId: keyof typeof iconsMap; isLarge?: boolean }) => (
  <IconWrapper isLarge={isLarge}>{iconsMap[iconId] || iconsMap[DEFAULT_ICON_CODE]}</IconWrapper>
);

const IconWrapper = styled.div`
  font-size: ${({ isLarge }: { isLarge?: boolean }) => (isLarge ? 192 : 48)}px;

  font-family: "Weather Icons Font";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default Icon;
