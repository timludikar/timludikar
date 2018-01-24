import React from "react";
import styled from "styled-components";

import Section from "../Section";

const UnorderedList = styled.ul``;
const ListItem = styled.li``;

export const Skills = ({ skills }) => {
  const skillsCmpt = skills.map((skill, i) => (
    <ListItem key={`skill-${i}`}>{skill}</ListItem>
  ));
  return (
    <Section title="Skills">
      <UnorderedList>{skillsCmpt}</UnorderedList>
    </Section>
  );
};

export default Skills;
