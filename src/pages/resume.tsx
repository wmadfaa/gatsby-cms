import React from 'react';
import Layout from '../components/Layout/Layout';
import ResumePageTemplate from '../templates/resume-page';
import { useResumePageQuery } from '../graphql/resume-page';

const ResumePage: React.FC = () => {
  const {} = useResumePageQuery();

  return (
    <Layout>
      <ResumePageTemplate />
    </Layout>
  );
};

export default ResumePage;
