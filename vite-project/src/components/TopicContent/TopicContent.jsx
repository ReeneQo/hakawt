import React from 'react';
import { Search } from 'lucide-react';
import { renderContent } from '../../utils/content';
import styles from './TopicContent.module.css';

export const TopicContent = ({
  topic,
  searchQuery,
  filteredHeadings,
  onSearchChange,
  onHeadingClick,
}) => {
  return (
    <div className={styles.content_container}>
      <div className={styles.search_container}>
        <div className={styles.search_input_wrapper}>
          <Search className={styles.search_icon} />
          <input
            type="text"
            placeholder="Поиск по подтемам..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={styles.search_input}
          />
        </div>
        {searchQuery && (
          <div className={styles.search_results}>
            {filteredHeadings.map((heading, index) => (
              <button
                key={index}
                onClick={() => onHeadingClick(heading.text)}
                className={styles.search_result_item}
              >
                <span className={styles.search_result_hash}>{'#'.repeat(heading.level)}</span>{' '}
                {heading.text}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className={styles.content_wrapper}>
        <div className={styles.content_text}>
          <div 
            className={styles.content_body}
            dangerouslySetInnerHTML={{ __html: renderContent(topic.content) }}
          />
        </div>
      </div>
    </div>
  );
};