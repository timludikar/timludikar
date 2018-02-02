import React from "react";
import { Page } from "hedron";

import Introduction from "../components/Introduction";
import Achievements from "../components/Achievements";
import Experiences from "../components/Experience";
import Skill from "../components/Skills";

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
    <Page>
      <Introduction introduction={introduction} />
      <Achievements achievements={achievements} />
      <Experiences experience={workExperience} />
      <Skill skills={skills} />
      <Experiences experience={professionalOrganizations} />
    </Page>
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
        experience: notes
      }
    }
  }
`;
