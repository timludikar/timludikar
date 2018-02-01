import React from "react";
import styled from "styled-components";

import Section from "../_Core/Section";

const Article = styled.article``;
const Company = styled.h3`
  color: lightblue;
  text-transform: uppercase;
  text-align: left;
  margin: 0;
`;
const Title = styled.h4`
  text-transform: uppercase;
  color: lightgrey;
  margin: 10px 0 0 0;
`;
const Aside = styled.aside``;
const UnorderedList = styled.ul``;
const ListItem = styled.li``;
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
  const experienceCmpt = experiences.map((experience, i) => {
    return (
      <ListItem key={`experience-${experience}-${i}`}>{experience}</ListItem>
    );
  });
  return (
    <Main>
      <Title>{title}</Title>
      <UnorderedList>{experienceCmpt}</UnorderedList>
    </Main>
  );
};

const ExperienceRender = (
  { company, start, end, location, title, experience },
  i
) => {
  return (
    <Article key={`experience-${company}`}>
      {asideView(company, `${start} - ${end}`, location)}
      {mainView(title, experience)}
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
