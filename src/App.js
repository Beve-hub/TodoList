import { useState } from "react";
import {BiSolidEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'


function App() {
  const [todo, setTodo] = useState([])
  const [value, setValue] = useState('')


  const addTask = () => {
    if (value.trim() !== '') {
      setTodo([...todo, value]);
      setValue('');
    }
  };

  const removeTask = (index) => {
    const updatedTask = todo.filter((_, i) => i !== index);
    setTodo(updatedTask)
  }

  const editTask = (index, newTask) => {
    const updatedTasks = [...todo];
    updatedTasks[index] = newTask;
    setTodo(updatedTasks);
  };



  return (
    <div className=" w-[50rem] h-[40rem] mt-[5rem]  bg-blue-900 justify-center items-center  overflow-">
    <div className="overflow-hidden">
    <h1 className="text-2xl font-semibold w-full flex justify-center  text-white pt-[3rem]">Any Plans For Today</h1>
     <div className="flex justify-center mt-[2rem] ">
      <input type='text' value={value} 
      onChange={(e) => setValue(e.target.value)} 
      placeholder='Add Task....'/>
      <button onClick={addTask} className="bg-cyan-500 p-2 ">Add Task</button>
    </div>
    

    <ul className="w-full grid justify-center items-center text-[white] text-2xl gap-3 pt-[3rem] ">
      {todo.map((list, index) => 
      <li key={index}>
        <div className="flex gap-20 items-center ">
        <p>{list}</p>
       <div>
       <button onClick={() => editTask(index,prompt('Edit task:', list))}><BiSolidEdit/></button>
        <button onClick={() => removeTask(index)}><MdDelete/></button>
       </div>
        </div>
      </li>
      )}
    </ul>
    </div>

    </div>
  );
}

export default App;
