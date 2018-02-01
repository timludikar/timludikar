import React from "react";
import styled from "styled-components";
import { Row, Column } from "hedron";

import ul from "../_Core/UnorderedList";

const JobTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;

const Title = JobTitle.extend`
  color: lightblue;
`;

const Intro = Row.extend`
  align-content: center;
`;

const Paragraph = styled.p`
  font-size: large;
  text-align: center;
`;

const TagLine = styled.p`
  margin-bottom: 10px;
`;

const UnorderedList = ul`
  margin: 0.025em auto 1em auto;
  width: 80%;
`;

const Introduction = ({ introduction }) => {
  const { title, tagline, description, competencies } = introduction;

  return (
    <Intro>
      <Column>
        <JobTitle>{title}</JobTitle>
        <Paragraph>{tagline}</Paragraph>
        <Paragraph>{description}</Paragraph>
        <Title>Additional competencies include:</Title>
        <UnorderedList>{competencies}</UnorderedList>
      </Column>
    </Intro>
  );
};

export default Introduction;
