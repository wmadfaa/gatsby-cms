import { useStaticQuery, graphql } from 'gatsby';
import { AboutPageQuery } from '../../graphql-types';

function useAboutPageQuery() {
  return useStaticQuery<AboutPageQuery>(graphql`
    query AboutPage {
      markdownRemark(frontmatter: { template_key: { eq: "about-page" } }) {
        frontmatter {
          SEO {
            title
          }
          heroBannerSection {
            role
            greeting
            bio
          }
          servicesSection {
            title
            subtitle
            services {
              title
              icon
              description
            }
          }
        }
      }
    }
  `);
}

export default useAboutPageQuery;
