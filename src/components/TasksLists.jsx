import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fetchTodo } from "../features/taskSlice";
import EditTask from "./EditTask";


const TasksLists = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    if (loading) {
        return <p className="text-center text-lg text-blue-500">Tasks loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">There is an error: {error}</p>;
    }

    return (
        <div className="flex justify-center items-center mt-10 w-full ">
            <div className="max-w-3xl w-full p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Task List</h2>
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
                            <div>
                                <p className="text-lg font-semibold text-gray-700">{task.title}</p>
                                {task.description && <p className="text-gray-600">{task.description}</p>}
                                <p className={`text-sm font-medium ${task.status === "Completed" ? "text-green-600" : "text-yellow-500"}`}>
                                    Status: {task.status}
                                </p>
                            </div>
                            <div className="space-x-2 flex">
                                <EditTask task={task}/>
                                <button className="bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-md hover:bg-red-600"
                                onClick={() => handleDelete(task.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TasksLists;
