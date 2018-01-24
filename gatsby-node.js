/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const resumeTemplate = path.resolve(`src/templates/resumeTemplate.js`);

  return graphql(`
    {
      allResumeJson(limit: 1000) {
        edges {
          node {
            path
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allResumeJson.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: resumeTemplate,
        context: {}
      });
    });
  });
};
