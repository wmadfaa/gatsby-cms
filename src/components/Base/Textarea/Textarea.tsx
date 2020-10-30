import React from 'react';

import styles from './Textarea.module.css';

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ id, label, error, ...inputProps }) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea id={id} className={styles.input} {...inputProps} />
      {error && <p className={styles.errMsg}>{error}</p>}
    </div>
  );
};

export default Textarea;
