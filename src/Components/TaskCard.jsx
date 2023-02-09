import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {

  const {deleteTask, ClonarTask} = useContext(TaskContext)

  return (
  
      <div className="bg-gray-800 text-white p-4 rounded-md">
        <h1 className="text-xl fontbold capitalize">{task.title}</h1>
        <p className="text-gray-500 text-sm">{task.description}</p>
        <button className="bg-red-500 px-2 py-1 mr-2 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
        <button className="bg-blue-500 px-2 py-1 rounded-md mt-4 hover:bg-blue-400" onClick={() => ClonarTask(task.title, task.description)}>Clonar Tarea</button>
      </div>

  )
}

export default TaskCard;