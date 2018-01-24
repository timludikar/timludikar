import React from "react";

import Introduction from "../components/Introduction";
import Skill from "../components/Skills";

export default function Template({ data }) {
  console.log(data);
  const { resumeJson } = data;
  const { introduction, skills } = resumeJson;
  return (
    <div>
      <Introduction introduction={introduction} />
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
    }
  }
`;
