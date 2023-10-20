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

 const dataBuilder = (d) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
 }

  return (
    <div className=" w-[50rem] h-[40rem] mt-[5rem]  bg-blue-800 justify-center items-center  overflow-">
    <div className="overflow-hidden">
    <div className="w-full grid justify-center gap-1 bg-blue-900 items-center text-start p-6  ">
      <div>
        <h1 className="text-2xl font-semibold   text-white ">Any Plans For Today</h1>
         <p className='text-md text-gray-400'>{dataBuilder(new Date())}</p>
      </div>
    </div>
     <div className="flex justify-center mt-[2rem] ">
      <input type='text' value={value} 
      onChange={(e) => setValue(e.target.value)} 
      placeholder='Add Task....' className="border-slate-200 placeholder-slate-400 px-3 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
      <button onClick={addTask} className="bg-cyan-500 p-2  text-2xl font-bold">+</button>
    </div>
    

    <ul className="w-full grid justify-center items-center text-[white] text-2xl gap-3 pt-[3rem] ">
      {todo.map((list, index) => 
      <li key={index}>
        <div className="flex justify-between  gap-10 items-center bg-cyan-500 p-2 rounded-sm">
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
