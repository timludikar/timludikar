import React from "react";
import styled from "styled-components";
import { Row, Column } from "hedron";

import Section from "../_Core/Section";
import ul from "../_Core/UnorderedList";

const Article = Row.withComponent("article");
const Company = styled.h3`
  color: lightblue;
  text-transform: uppercase;
  text-align: left;
  margin: 0;
`;
const Title = styled.h4`
  text-transform: uppercase;
  color: lightgrey;
  margin: 0 0 0 0;
`;
const Aside = styled.aside`
  margin: 0 1.5em 0 0;
`;
const UnorderedList = ul``;
const Main = styled.main``;
const Paragraph = styled.p`
  margin: 0;
`;

const asideView = (company, date, description = "") => (
  <Aside>
    <Company size={3}>{company}</Company>
    <Paragraph>{date}</Paragraph>
    <Paragraph>{description}</Paragraph>
  </Aside>
);

const mainView = (title, experiences) => {
  return (
    <Main>
      <Title>{title}</Title>
      <UnorderedList>{experiences}</UnorderedList>
    </Main>
  );
};

const ExperienceRender = (
  { company, start, end, location, title, experience },
  i
) => {
  return (
    <Article key={`experience-${company}`}>
      <Column fluid md={4}>
        {asideView(company, `${start} - ${end}`, location)}
      </Column>
      <Column fluid md={8}>
        {mainView(title, experience)}
      </Column>
    </Article>
  );
};

const Experiences = ({ experience }) => {
  const experienceCmpt = experience.map((experience, i) =>
    ExperienceRender(experience, i)
  );
  return <Section title={"Experiences"}>{experienceCmpt}</Section>;
};

export default Experiences;
