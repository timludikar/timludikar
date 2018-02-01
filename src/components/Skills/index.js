import React from "react";
import styled from "styled-components";

import Section from "../_Core/Section";
import ul from "../_Core/UnorderedList";

const UnorderedList = ul``;

export const Skills = ({ skills }) => {
  return (
    <Section title="Skills">
      <UnorderedList>{skills}</UnorderedList>
    </Section>
  );
};

export default Skills;
