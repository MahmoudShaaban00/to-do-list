import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TasksLists from './components/TasksLists'
import AddTask from './components/AddTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <div className='bg-white shadow-md p-6 mx-auto max-w-2xl rounded-md'>
        <h2 className='text-2xl text-center mb-4 font-bold text-indigo-600'>Task Management App</h2>
        <AddTask />
        <TasksLists />
      </div>
    </div>
  )
}

export default App
