import React from 'react';
import {ArrowLeft} from 'lucide-react';
import styles from './BackButton.module.css';

export const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="back-button">
      <ArrowLeft className="back-button-icon" />
      Назад
    </button>
  );
};