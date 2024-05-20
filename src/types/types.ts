// types.ts
export interface Task {
  end_date: string | number | Date;
  start_date: string | number | Date;
  day: string;
  id: number;
  task_name: string;
  completion_status: boolean;
  time_spent: number;
  created_at: string;
}

export interface TimerProps {
  tasks: Task[];
  updateTasks: (updatedTasks: Task[]) => void;
  taskId: number;
  secondsRemaining: number;
  isActive: boolean;
  isFocusTime: boolean;
  onStartStop: () => void;
}

export const ItemTypes = {
  TASK: 'task', // Define your drag item types here
};

