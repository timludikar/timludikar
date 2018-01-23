import React from "react";
import styled from "styled-components";

import ZigZag from "../ZigZag";

const Title = styled.h1`
  text-transform: uppercase;
  margin: 2% 0;
`;

const Bold = styled.b`
  color: lightblue;
`;

const Header = styled.header`
  font-family: "Oswald", sans-serif;
  height: auto;
`;

const TopHeader = () => (
  <Header>
    <Title>
      <Bold>Tim</Bold> Ludikar
      <ZigZag />
    </Title>
  </Header>
);

export default TopHeader;
