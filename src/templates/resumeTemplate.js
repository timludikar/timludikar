import React from "react";

import Introduction from "../components/Introduction";
import Achievements from "../components/Achievements";
import Experiences from "../components/Experience";
import Skill from "../components/Skills";
import Organizations from "../components/Organization";

export default function Template({ data }) {
  const { resumeJson } = data;
  const {
    introduction,
    skills,
    achievements,
    workExperience,
    professionalOrganizations
  } = resumeJson;
  return (
    <div>
      <Introduction introduction={introduction} />
      <Achievements achievements={achievements} />
      <Experiences experience={workExperience} />
      <Skill skills={skills} />
      <Organizations organizations={professionalOrganizations} />
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
      workExperience: work_experience {
        title
        company
        start
        end
        location
        experience
      }
      professionalOrganizations: professional_experience {
        title
        company
        start
        end
        notes
      }
    }
  }
`;
