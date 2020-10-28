import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactsPageTemplate from '../templates/contacts-page';
import { useContactPageQuery } from '../graphql/contact-page';

const ContactPage: React.FC = () => {
  const {} = useContactPageQuery();
  return (
    <Layout>
      <ContactsPageTemplate />
    </Layout>
  );
};

export default ContactPage;
