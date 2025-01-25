import React from 'react';
import styles from './CourseDropdown.module.css';

export const CourseDropdown = ({
  isOpen,
  selectedCourse,
  courses,
  onToggle,
  onSelect,
}) => {
  return (
    <div className={styles.course-dropdown}>
      <button onClick={onToggle} className={styles.dropdown_button}>
        <span className={styles.dropdown-text}>
          {selectedCourse ? selectedCourse.name : 'Выберите курс'}
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown-menu}>
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelect(course)}
              className={styles.dropdown-item}
            >
              {course.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};