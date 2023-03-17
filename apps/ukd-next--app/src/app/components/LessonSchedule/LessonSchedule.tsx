import React from 'react';
import './LessonSchedule.scss';

export default function LessonSchedule() {
  return (
    <div className="lesson-container">
      <div className="lesson-left-block-container">
        <p className="lesson-title">Теорія Ймовірностей</p>
        <p className="lesson-teacher">Остафійчук Л.О.Х</p>
      </div>
      <div className="lesson-right-block-container">
        <p className="lesson-date">8:30 - 9:50</p>
        <p className="lesson-classroom">№330</p>
      </div>
    </div>
  );
}
