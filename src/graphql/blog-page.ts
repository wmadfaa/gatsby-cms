import { useStaticQuery, graphql } from 'gatsby';
import { BlogPageQuery } from '../../graphql-types';

export function useBlogPageQuery() {
  return useStaticQuery<BlogPageQuery>(graphql`
    query BlogPage {
      markdownRemark(frontmatter: { template_key: { eq: "blog-page" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { template_key: { eq: "post" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              description
              date(formatString: "MMMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
}
