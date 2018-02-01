import React from "react";
import styled from "styled-components";
import { Row, Column } from "hedron";

import Section from "../_Core/Section";
import ul from "../_Core/UnorderedList";

const Article = Row.withComponent("article");

const Heading = styled.h3`
  color: lightblue;
  margin-top: 0;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 1%;
`;
const UnorderedList = ul``;

export default ({ achievements }) => {
  const achievementCmpt = achievements.map(
    ({ company, company_achievements }, i) => {
      return (
        <Article key={`achievements-${company}`}>
          <Column fluid md={4}>
            <Heading>{company}</Heading>
          </Column>
          <Column fluid md={8}>
            <UnorderedList>{company_achievements}</UnorderedList>
          </Column>
        </Article>
      );
    }
  );
  return <Section title="Achievements">{achievementCmpt}</Section>;
};
