import React from 'react';
import Layout from '../components/Layout/Layout';

import AboutPageTemplate from '../templates/about-page';
import useAboutPageQuery from '../graphql/about-page';

const IndexPage: React.FC = () => {
  const {} = useAboutPageQuery();

  return (
    <Layout>
      <AboutPageTemplate />;
    </Layout>
  );
};

export default IndexPage;
