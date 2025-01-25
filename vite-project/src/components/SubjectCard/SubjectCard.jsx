import React from 'react';
import { Book } from 'lucide-react';
import styles from './SubjectCard.module.css';

export const SubjectCard = ({ subject, onSelect }) => {
  return (
    <div className={styles.subject_card}>
      <div className={styles.subject_header}>
        <Book className={styles.subject_icon} />
        <h3 className={styles.subject_title}>{subject.name}</h3>
      </div>
      <p className={styles.subject_description}>{subject.description}</p>
      <div className={styles.subject_footer}>
        <button 
          onClick={() => onSelect(subject)}
          className={styles.subject_button}
        >
          Темы
        </button>
      </div>
    </div>
  );
};