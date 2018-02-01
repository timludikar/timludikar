import React from "react";
import styled from "styled-components";
import { Row, Column } from "hedron";

import ZigZag from "../ZigZag";

const Section = Row.extend``;
const Heading = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
`;

export default ({ title, children }) => (
  <Section>
    <Column>
      <Heading>
        {title} <ZigZag />
      </Heading>

      {children}
    </Column>
  </Section>
);
