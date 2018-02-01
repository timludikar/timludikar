import React from "react";
import styled from "styled-components";
import { Row, Column } from "hedron";

import Section from "../Section";

const Article = styled.article`
  margin-bottom: 2%;
`;
const Heading = styled.h3`
  color: lightblue;
  margin-top: 0;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 1%;
`;
const UnorderedList = styled.ul``;
const ListItem = styled.li``;

const Achievements = ({ achievements }) => {
  const achievementCmpt = achievements.map(
    ({ company, company_achievements }, i) => {
      const company_achievementsCmpt = company_achievements.map(
        (cmpy_achievement, i) => (
          <ListItem key={`achievement-company-${cmpy_achievement}-${i}`}>
            {cmpy_achievement}
          </ListItem>
        )
      );
      return (
        <Article key={`achievements-${company}`}>
          <Heading>{company}</Heading>
          <UnorderedList>{company_achievementsCmpt}</UnorderedList>
        </Article>
      );
    }
  );
  return <Section title="Achievements">{achievementCmpt}</Section>;
};

export default Achievements;
