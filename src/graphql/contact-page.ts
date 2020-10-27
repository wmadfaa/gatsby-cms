import { useStaticQuery, graphql } from 'gatsby';
import { ContactPageQuery } from '../../graphql-types';

export function useContactPageQuery() {
  return useStaticQuery<ContactPageQuery>(graphql`
    query ContactPage {
      markdownRemark(frontmatter: { template_key: { eq: "contact-page" } }) {
        frontmatter {
          SEO {
            title
          }
          title
          subtitle
          contacts {
            title
            icon
            content
          }
        }
      }
    }
  `);
}
