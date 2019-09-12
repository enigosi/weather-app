import React from "react";
import styled from "styled-components";

type Child = undefined | JSX.Element;

const Layout = ({ children }: { children: Child | Child[] }) => (
  <Wrapper>
    <Card>{children}</Card>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Card = styled.div`
  width: 640px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 32px;
  display: inline-flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Layout;
