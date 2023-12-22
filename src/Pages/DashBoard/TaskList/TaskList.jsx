import { LuClipboardEdit } from "react-icons/lu";
import useTask from "../../../Hooks/useTask";
import { MdDeleteSweep } from "react-icons/md";
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const TaskList = () => {
    const [alltask, refetch] = useTask();
    const axiosPublic = useAxiosPublic();
    // const [tasks, setTasks] = useState(alltask);

    // const handleDragEnd = (result) => {
    //     if (!result.destination) {
    //         return;
    //     }

    // const reorderedTasks = Array.from(tasks);
    // const [removed] = reorderedTasks.splice(result.source.index, 1);
    // reorderedTasks.splice(result.destination.index, 0, removed);

    // setTasks(reorderedTasks); // Update the state with the reordered tasks

    // // Trigger an API call to update tasks on the server
    // // Example using fetch:
    // fetch('your_api_endpoint', {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(reorderedTasks), // Send the reordered tasks to the server
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         // Handle response data if needed
    //         console.log('Tasks updated:', data);
    //     })
    //     .catch((error) => {
    //         // Handle errors
    //         console.error('Error updating tasks:', error);
    //     });
    // };


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/task/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    return (
        <div>
            <h2 className="font-bold text-3xl text-center my-5 text-[#AC4425]">My Task List</h2>

            <div className="p-2 grid grid-cols-9 gap-4">


                <div className="border-lg col-span-3 mx-4 bg-[#faf4d3] py-4">
                    <h2 className="text-center font-medium text-2xl mb-3 underline">My To-Do</h2>
                    {
                        alltask.map((task, index) => <ul key={task._id}>
                            <li>
                                <div className="collapse bg-base-200">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-[#faf4d3] text-[#0e9594] peer-checked:bg-[#edd382] peer-checked:text-[#020122] flex justify-between items-center">

                                        <p className="font-bold"> {index + 1}. {task.title}</p>
                                        <div className="flex flex-col gap-1 items-center">
                                            <span>{task.deadline}</span>
                                        </div>
                                    </div>
                                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#edd382] peer-checked:text-[#020122] flex justify-between items-center">
                                        <p className="font-serif">{task.description}</p>

                                        <div className="flex gap-1">
                                            <button>  <i className="text-2xl"><LuClipboardEdit></LuClipboardEdit></i></button>

                                            <button onClick={() => handleDelete(task._id)} > <i className="text-2xl"><MdDeleteSweep></MdDeleteSweep></i></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        )
                    }
                </div>

                <div className="border-lg col-span-3 mx-4 bg-[#faf4d3] py-4">
                    <h2 className="text-center font-medium text-2xl mb-3 underline">My Ongoing Task</h2>

                </div>

                <div className="border-lg col-span-3 mx-4 bg-[#faf4d3] py-4">
                    <h2 className="text-center font-medium text-2xl mb-3 underline">My Completed Task</h2>

                </div>

            </div>



        </div>
    );
};

export default TaskList;