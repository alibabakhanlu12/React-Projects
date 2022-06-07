import "./App.css";
import Tasks from "./Components/Tasks";
import { useState } from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";

function App() {
  //dfsdfjkl
  const [tasks, setTasks] = useState([
    { id: 1, text: "go home", day: "feb 5th at 2:30pm", reminder: false },
    { id: 2, text: "go jim", day: "feb 5th at 2:30pm", reminder: true },
    { id: 3, text: "go school", day: "feb 5th at 2:30pm", reminder: true },
  ]);
  const [showAddTask, setshowAddTask] = useState(false);
  const deleteEvent = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const ToggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        //fdfddf
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="App">
      <Header
        onAdd={() => setshowAddTask(!showAddTask)}
        addShow={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteEvent} onToggle={ToggleReminder} />
      ) : (
        <p align="center"> not found any task to do</p>
      )}
    </div>
  );
}

export default App;
