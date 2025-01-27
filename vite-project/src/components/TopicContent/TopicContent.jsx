import React from 'react';
import { Search } from 'lucide-react';
import { renderContent } from '../../utils/content';
import  './TopicContent.css';

export const TopicContent = ({
  topic,
  searchQuery,
  filteredHeadings,
  onSearchChange,
  onHeadingClick,
}) => {
  return (
    <div className="content_container">
      <div className="search_container">
        <div className="search_input_wrapper">
          <Search className="search_icon"/>
          <input
            type="text"
            placeholder="Поиск по подтемам..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search_input"
          />
        </div>
        {searchQuery && (
          <div className="search_results">
            {filteredHeadings.map((heading, index) => (
              <button
                key={index}
                onClick={() => onHeadingClick(heading.text)}
                className="search_result_item"
              >
                <span className="search_result_hash">{'#'.repeat(heading.level)}</span>{' '}
                {heading.text}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="content_wrapper">
        <div className="styles.content_text">
          <div 
            className="styles.content_body"
            dangerouslySetInnerHTML={{ __html: renderContent(topic.content) }}
          />
        </div>
      </div>
    </div>
  );
};