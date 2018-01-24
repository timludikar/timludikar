import React from "react";
import styled from "styled-components";

const JobTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;

const Title = JobTitle.extend`
  color: lightblue;
`;

const Intro = styled.section``;

const Paragraph = styled.p`
  font-size: large;
  text-align: center;
`;

const TagLine = styled.p`
  margin-bottom: 10px;
`;

const UnorderedList = styled.ul`
  margin-top: 0.025em;
`;

const Introduction = ({ introduction }) => {
  const { title, tagline, description, competencies } = introduction;

  const competenciesCmpts = competencies.map((competency, i) => (
    <li key={`introduction-${i}`}>{competency}</li>
  ));

  return (
    <Intro>
      <JobTitle>{title}</JobTitle>
      <Paragraph>{tagline}</Paragraph>
      <Paragraph>{description}</Paragraph>
      <Title>Additional competencies include:</Title>
      <UnorderedList>{competenciesCmpts}</UnorderedList>
    </Intro>
  );
};

export default Introduction;
