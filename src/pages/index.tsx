import React, { useState, useEffect} from "react";
import NavigationDrawer from "@/components/NavigationDrawer"; 
import UpcomingTasks from "@/components/UpcomingTask";
import TodayTasks from "@/components/TodayTask";

export type Category = 'Удахгүй болох' | 'Өнөөдөр';
interface Task {
  id: number;
  name: string;
  dueDate: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);



  useEffect(() => {
    const fetchedTasks: Task[] = [
      { id: 1, name: "Task 1", dueDate: "2024-04-20" },
      { id: 2, name: "Task 2", dueDate: "2024-04-16" },
      { id: 3, name: "Task 3", dueDate: "2024-04-16" },
    ];

    setTasks(fetchedTasks);
  },[]);
  const fetchTodayTasks = () => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in yyyy-mm-dd format

    const todayTasks = tasks.filter(task => task.dueDate === today);
    return todayTasks;
  };

  useEffect(() => {
    if (selectedCategory === 'Өнөөдөр') {
      const todayTasks = fetchTodayTasks();
      setTasks(todayTasks);
    }
  }, [selectedCategory]);


  const renderComponent = () => {
    switch (selectedCategory) {
      case "Удахгүй болох":
        return <UpcomingTasks />;
      case "Өнөөдөр":
        return <TodayTasks tasks={tasks} />;
      default:
        return null; 
    }
  };

  return (  
    <div>
      <NavigationDrawer onSelectCategory={setSelectedCategory} />
      {renderComponent()}
    </div>
  ); 
}    

export default App;
