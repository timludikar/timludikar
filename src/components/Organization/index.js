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

const asideView = (title, company, date) => (
  <Aside>
    <Company size={3}>{company}</Company>
    <Paragraph>{date}</Paragraph>
    <Title>{title}</Title>
  </Aside>
);

const mainView = notes => {
  const notesCmpt = notes.map((note, i) => {
    return <ListItem key={`note-${note}-${i}`}>{note}</ListItem>;
  });
  return (
    <Main>
      <UnorderedList>{notesCmpt}</UnorderedList>
    </Main>
  );
};

const OrganizationRender = ({ company, start, end, title, notes }, i) => {
  return (
    <Article key={`organization-${company}`}>
      {asideView(title, company, `${start} - ${end}`)}
      {mainView(notes)}
    </Article>
  );
};

const Organizations = ({ organizations }) => {
  const organizationsCmpt = organizations.map((organization, i) =>
    OrganizationRender(organization, i)
  );
  return <Section title={"Organizations"}>{organizationsCmpt}</Section>;
};

export default Organizations;
