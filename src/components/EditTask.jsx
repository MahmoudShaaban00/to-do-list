import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from '../features/taskSlice';

const EditTask = ({task}) => {

    const [isEdit , setIsEdit] = useState(false)
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const dispatch =useDispatch();

    const handleSumbit = () =>{
        dispatch(editTask({id : task.id , title , description , status}))
        setIsEdit(false)
    }

    return (
        <div>
            {isEdit ? (
                <div className='absolute bg-white p-4 border border-gray-800 rounded-md shadow-lg z-10'>
                     <h2 className="text-xl font-bold mb-4">Edit Task</h2>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter task title"
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter task description"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select 
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className='flex gap-4 mt-3'>
                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    onClick={handleSumbit}
                >
                    Save 
                </button>
                <button className='bg-gray-300 py-2 rounded-md px-2' onClick={() => setIsEdit(false)}>
                    Cancel
                    </button>
                </div>
                </div>
            ):(
            <button className="bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-md hover:bg-blue-600"
            onClick={() => setIsEdit(true)}>
                Edit
            </button>
            )}
        </div>
    )
}

export default EditTask
