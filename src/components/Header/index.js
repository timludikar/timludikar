import React from "react";
import styled from "styled-components";

import { ZigZag } from "../_Core";

const Title = styled.h1`
  text-transform: uppercase;
  margin: 0.5em;
`;

const Bold = styled.b`
  color: lightblue;
`;

const Section = styled.header`
  font-family: "Oswald", sans-serif;
  height: auto;
`;

const TopHeader = () => (
  <Section>
    <Title>
      <Bold>Tim</Bold> Ludikar
      <ZigZag />
    </Title>
  </Section>
);

export default TopHeader;
