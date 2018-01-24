import React from "react";

import Introduction from "../components/Introduction";
import Achievements from "../components/Achievements";
import Skill from "../components/Skills";

export default function Template({ data }) {
  const { resumeJson } = data;
  const { introduction, skills, achievements } = resumeJson;
  return (
    <div>
      <Introduction introduction={introduction} />
      <Achievements achievements={achievements} />
      <Skill skills={skills} />
    </div>
  );
}

export const pageQuery = graphql`
  query GetPostByPath($path: String) {
    resumeJson(path: { eq: $path }) {
      introduction {
        title
        tagline
        description
        competencies
      }
      skills
      achievements {
        company
        company_achievements
      }
    }
  }
`;
