import { LuClipboardEdit } from "react-icons/lu";
import useTask from "../../../Hooks/useTask";
import { MdDeleteSweep } from "react-icons/md";

const TaskList = () => {
    const [alltask, refetch] = useTask();

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
                                          <div className="flex gap-1">
                                          <i className="text-2xl"><LuClipboardEdit></LuClipboardEdit></i>
                                            <i className="text-2xl"><MdDeleteSweep></MdDeleteSweep></i>
                                          </div>
                                            <span>{task.deadline}</span>
                                        </div>
                                    </div>
                                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-[#edd382] peer-checked:text-[#020122]">
                                        <p className="font-serif">{task.description}</p>
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