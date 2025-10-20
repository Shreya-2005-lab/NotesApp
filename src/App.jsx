import React, { useState } from 'react'

const App = () => {

  const submitHandler=(e)=>{
  e.preventDefault();

    const copytask = [...task];
    copytask.push({title, details});
    setTask(copytask);

  setTitle('');
  setDetails('')
  }

  const [title, setTitle] =useState('');
  const [details, setDetails] =useState('');
  const [task, setTask] =useState([]);

  const deleteTaskHandler=(elem)=>{
    // console.log("deleted task")
    const deletetask = [...task];
    // console.log(elem)
    deletetask.splice(elem,1);
    setTask(deletetask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{submitHandler(e)}} className='flex items-start p-10 gap-4 flex-col lg:w-1/2'>
      <h1 className='text-4xl font-bold'>Add Note</h1>
      <input type="text" placeholder='Enter Note Heading' className='px-5 py-2 w-full border-2 rounded outline-none font-medium' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
      <textarea type="text" placeholder='Enter Details..' className='px-5 py-2 w-full h-32 border-2 rounded outline-none font-medium' value={details} onChange={(e)=>{setDetails(e.target.value)}}/>
      <button className='bg-white text-black px-5 py-2 w-full rounded outline-none font-medium'>Add Note</button>
      </form>
      <div className='p-10 lg:w-1/2'> 
      <h1 className='text-4xl font-bold'>Recent Notes:</h1>
      <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full items-start bg-black'>
      {/* <div className='h-52 w-40 rounded-2xl bg-white'></div> */}
      {task.map(function(elem, idx){
        return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
          <div>
          <h3 className='leading-tight font-bold text-lg'>{elem.title}</h3>
          <p className='mt-2 leading-tight text-xs font-semibold text-gray-700'>{elem.details}</p>
          </div>
          <button onClick={()=>{deleteTaskHandler(idx)}} className='w-full bg-red-600 text-white py-1 text-xs rounded font-bold cursor-pointer'>Delete</button>
        </div>
      })}
      </div>
      </div>
    </div>
  )
}

export default App
