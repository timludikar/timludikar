import React from "react";

export default function Template({ data }) {
  const { resumeJson } = data; // data.markdownRemark holds our post data
  const { title } = resumeJson;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query GetPostByPath($path: String) {
    resumeJson(path: { eq: $path }) {
      title
    }
  }
`;
