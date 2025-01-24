import React from 'react';
import { BookOpen, Search } from 'lucide-react';

export function TopicContent ({ topic, searchQuery, onSearchChange, onSubtopicSelect, filteredSubtopics }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">{topic.name}</h2>
        </div>
        <div className="prose max-w-none mb-8">
          <p className="text-gray-600 leading-relaxed">{topic.content}</p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Поиск по подтемам..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Подтемы</h3>
          {filteredSubtopics.length > 0 ? (
            filteredSubtopics.map((subtopic) => (
              <div
                key={subtopic.id}
                className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => onSubtopicSelect(subtopic)}
              >
                <h4 className="text-lg font-medium text-gray-800 mb-2">{subtopic.title}</h4>
                <p className="text-gray-600 line-clamp-2">{subtopic.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">Подтемы не найдены</p>
          )}
        </div>
      </div>
    </div>
  );
};