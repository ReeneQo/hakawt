import React from 'react';
import { ListTodo } from 'lucide-react';

export function TopicList ({ subject, onSelect }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <ListTodo className="w-8 h-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Темы по предмету: {subject.name}</h2>
      </div>
      <div className="grid gap-4">
        {subject.topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onSelect(topic)}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left w-full"
          >
            <h3 className="text-lg font-semibold text-gray-800">{topic.name}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};