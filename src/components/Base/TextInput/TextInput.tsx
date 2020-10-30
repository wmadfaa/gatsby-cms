import React from 'react';

import styles from './TextInput.module.css';

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, error, ...inputProps }) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input id={id} className={styles.input} {...inputProps} />
      {error && <p className={styles.errMsg}>{error}</p>}
    </div>
  );
};

export default TextInput;
