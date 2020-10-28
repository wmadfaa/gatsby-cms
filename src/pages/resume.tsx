import React from 'react';
import Layout from '../components/Layout/Layout';
import { useResumePageQuery } from '../graphql/resume-page';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';

import { map, orderBy } from 'lodash';

const ResumePage: React.FC = () => {
  const { markdownRemark } = useResumePageQuery();

  const { SEO, experience, education } = markdownRemark.frontmatter;

  const experiences = orderBy(
    map(experience.timeline, ({ html, frontmatter }) => ({ body: html, ...frontmatter })),
    ['startDate'],
  );

  const educations = orderBy(
    map(education.timeline, ({ html, frontmatter }) => ({ body: html, ...frontmatter })),
    ['startDate'],
  );

  return (
    <Layout seo={SEO}>
      <Experience title={experience.title} subtitle={experience.subtitle} experiences={experiences} />
      <hr />
      <Education title={education.title} subtitle={education.subtitle} educations={educations} />
    </Layout>
  );
};

export default ResumePage;
