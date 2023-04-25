import React from 'react';
import LessonBreak from '../LessonBreak/LessonBreak';
import LessonSchedule from '../LessonSchedule/LessonSchedule';
import './Schedule.scss';

export default function Schedule() {
  return (
    <div className="schedule-container">
      <LessonSchedule />
      <LessonBreak  />
      <LessonSchedule />
      <LessonBreak />
      <LessonSchedule />
      <LessonBreak />
      <LessonSchedule />
      <LessonBreak />
      <LessonSchedule />
      <LessonBreak />
      <LessonSchedule />
      <LessonBreak />
      <LessonSchedule />
    </div>
  );
}
