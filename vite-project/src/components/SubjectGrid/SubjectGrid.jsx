import { Book } from 'lucide-react';

export function SubjectGrid ({ subjects, onSelect }){
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelect(subject)}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <Book className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
            </div>
            <p className="text-gray-600">{subject.description}</p>
          </button>
        ))}
      </div>
    );
  };