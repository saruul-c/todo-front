import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Task } from '@/types/types';

const localizer = momentLocalizer(moment);

interface MyCalendarProps {
  tasks: Task[];
}

const MyCalendar: React.FC<MyCalendarProps> = ({ tasks }) => {
    console.log('Tasks:', tasks);
    if (!tasks || tasks.length === 0) {
    return <div>No tasks to display</div>;
  }

  const events = tasks.map(task => ({
    title: task?.task_name || 'Unknown Task',
    start: task.created_at ? new Date(task.created_at) : new Date(), 
    end: task.created_at ? moment(task.created_at).add(1, 'hours').toDate() : new Date(), 
  }));

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default MyCalendar;
