/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions }) => {
  const resumeRelationsTypeDefs = `#graphql  
    type MarkdownRemark implements Node { 
        frontmatter: Frontmatter 
    }
    type Frontmatter {
        experience: MarkdownRemarkFrontmatterExperience
        education: MarkdownRemarkFrontmatterEducation
    }
    type MarkdownRemarkFrontmatterExperience {
        timeline: [MarkdownRemark] @link(by: "frontmatter.data_key")
    }
    type MarkdownRemarkFrontmatterEducation {
        timeline: [MarkdownRemark] @link(by: "frontmatter.data_key")
    }
`;
  const typeDefs = [resumeRelationsTypeDefs];
  actions.createTypes(typeDefs);
};
