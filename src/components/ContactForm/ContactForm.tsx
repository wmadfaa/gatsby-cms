import React from 'react';
import { Controller, useForm } from 'react-hook-form';
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

interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title, subtitle }) => {
  const { register, handleSubmit, errors, control } = useForm<ContactFormInputs>();

  const handleOnSubmit = (data: ContactFormInputs) => {
    console.log(data);
  };

  return (
    <Container>
      <TitleSection title={title} subtitle={subtitle} center />
      <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.msgGroup}>
          <div className={styles.msgInfos}>
            <TextInput
              error={errors.name?.message}
              id="name"
              label="your name"
              type="text"
              ref={register({
                required: 'Enter your full name',
                pattern: {
                  value: /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/,
                  message: 'Enter a valid full-name <wasim almadfaa>',
                },
              })}
            />
            <TextInput
              error={errors.email?.message}
              id="email"
              label="email"
              type="email"
              ref={register({
                required: 'Enter you email',
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Enter a valid e-mail address <wm.maddfaa@gmail.com>',
                },
              })}
            />
            <TextInput
              error={errors.phone?.message}
              id="phone"
              label="phone"
              type="tel"
              ref={register({
                required: 'Enter your Phone Number',
                pattern: {
                  value: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
                  message: 'Enter a valid phone number <+43 660 6805176>',
                },
              })}
            />
          </div>
          <Textarea
            error={errors.message?.message}
            id="message"
            label="message"
            ref={register({ required: 'Enter your Message' })}
          />
        </div>
        <Controller
          control={control}
          name="service"
          rules={{ required: 'choose a service you need to request for' }}
          render={({ onChange, value }) => (
            <OptionsInput error={errors.service?.message} onChange={(checked) => onChange(checked)} value={value} />
          )}
        />
        <div className={styles.formActions}>
          <Button type="submit" primary>
            Send Request
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
