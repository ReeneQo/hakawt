import React from 'react';
import { Book } from 'lucide-react';
import styles from './SubjectCard.module.css';

export const SubjectCard = ({ subject, onSelect }) => {
  return (
    <div className="subject-card">
      <div className="subject-header">
        <Book className="subject-icon" />
        <h3 className="subject-title">{subject.name}</h3>
      </div>
      <p className="subject-description">{subject.description}</p>
      <div className="subject-footer">
        <span className="subject-credits">Кредиты: {subject.credits}</span>
        <button 
          onClick={() => onSelect(subject)}
          className="subject-button"
        >
          Темы
        </button>
      </div>
    </div>
  );
};