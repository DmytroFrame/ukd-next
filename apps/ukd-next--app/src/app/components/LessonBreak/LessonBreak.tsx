import React from 'react'
import './LessonBreak.scss'
export default function LessonBreak({time}: {time?: number}) {
  return (
    <div className='lessonbreak-container'>
        Перерва: {time || 10}хв
    </div>
  )
}
