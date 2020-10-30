import React from 'react';
import Container from '../Base/Container/Container';
import TextInput from '../Base/TextInput/TextInput';
import TitleSection from '../Base/TitleSection/TitleSection';
import Textarea from '../Base/Textarea/Textarea';
import Button from '../Base/Button/Button';
import OptionsInput from '../Base/OptionsInput/OptionsInput';

import styles from './ContactForm.module.css';

export interface ContactFormProps {
  title: string;
  subtitle: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <TitleSection title={title} subtitle={subtitle} center />
      <form className={styles.form}>
        <div className={styles.msgGroup}>
          <div className={styles.msgInfos}>
            <TextInput id="name" label="your name" type="text" />
            <TextInput id="email" label="email" type="email" />
            <TextInput id="phone" label="phone" type="tel" />
          </div>
          <Textarea id="message" label="message" />
        </div>
        <OptionsInput />
        <div className={styles.formActions}>
          <Button primary>Send Request</Button>
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
