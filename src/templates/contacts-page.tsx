import React from 'react';
import ContactsInfo, { ContactsProps } from '../components/ContactsInfo/ContactsInfo';

export type ContactsPageTemplateData = ContactsProps;

const ContactsPageTemplate: React.FC<ContactsPageTemplateData> = ({ title, subtitle, contacts }) => {
  return <ContactsInfo title={title} subtitle={subtitle} contacts={contacts} />;
};

export default ContactsPageTemplate;
