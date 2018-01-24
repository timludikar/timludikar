import React from "react";
import styled from "styled-components";

import Section from "../Section";

{
  /* <Base title={title} className={styles.skills}>
<UnorderedList style={bulleted ? ' ' : { 'list-style-type': 'none' }}>
  {list}
</UnorderedList>
</Base> */
}

// const Section = styled.section``;
const UnorderedList = styled.ul``;
const ListItem = styled.li``;

export const Skills = () => (
  <Section title="Skills">
    <UnorderedList />
  </Section>
);

export default Skills;
