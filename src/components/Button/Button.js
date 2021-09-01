import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, move }) => {
  return <button className={`${styles.button} ${styles[move]}`}>{title}</button>;
};

export default Button;
