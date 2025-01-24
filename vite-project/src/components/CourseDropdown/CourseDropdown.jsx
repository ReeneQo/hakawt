import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Course } from '../types'

const CourseDropdownProps = {
  isOpen: false, 
  selectedCourse: Course | null, 
  courses: [], 
  onToggle: () => {}, 
  onSelect: (Course) => {}
};

export const CourseDropdown = ({ isOpen, selectedCourse, courses, onToggle, onSelect }) => {
  return (
    <div className="relative w-full max-w-md mx-auto mb-12">
      <button
        onClick={onToggle}
        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left shadow-sm hover:border-blue-500 transition-colors flex items-center justify-between"
      >
        <span className="text-gray-700">
          {selectedCourse ? selectedCourse.name : 'Выберите курс'}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelect(course)}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors"
            >
              {course.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};