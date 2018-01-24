import React from "react";
import styled from "styled-components";

import ZigZag from "../ZigZag";

const SectionTag = styled.section``;
const Heading = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
`;

export const Section = ({ title, children }) => (
  <SectionTag>
    <Heading>
      {title} <ZigZag />
    </Heading>

    {children}
  </SectionTag>
);

export default Section;
