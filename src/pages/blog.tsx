import React from 'react';

import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';
import TitleSection from '../components/Base/TitleSection/TitleSection';
import Container from '../components/Base/Container/Container';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <Container section>
        <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
        <Posts />
      </Container>
    </Layout>
  );
};

export default BlogPage;
