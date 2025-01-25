import React from 'react';
import { BookOpen, ListChecks } from 'lucide-react';
import styles from './TopicsList.module.css';

export const TopicsList = ({ subject, onSelectTopic }) => {
  return (
    <div className="topics-container">
      <div className="topics-card">
        <div className="topics-header">
          <BookOpen className="topics-icon" />
          <h2 className="topics-title">{subject.name}</h2>
        </div>
        <div className="topics-list">
          {subject.topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="topic-item"
            >
              <div className="topic-content">
                <ListChecks className="topic-icon" />
                <span className="topic-title">{topic.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};