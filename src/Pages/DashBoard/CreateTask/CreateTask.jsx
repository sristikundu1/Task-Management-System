import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const CreateTask = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)

        const taskItem = {
            title: data.title,
            email: data.email,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority
        }
     
        console.log(taskItem)
        const taskRes = await axiosPublic.post("/task", taskItem);

        console.log(taskRes.data);


        if (taskRes.data.insertedId) {
            reset();

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} added to your task list`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

        return (
            <div>
                <h2 className="font-bold text-3xl text-center my-5 text-[#AC4425]">Create Your Task</h2>

                <div className="border bg-[#faf4d3] pt-24 px-14 mx-10">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="w-full flex gap-3">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Task Title*</span>
                                </label>
                                <input {...register("title", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg " placeholder="Task Title..." type="text" name="title" id="title" />
                            </div>

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Email</span>
                                </label>
                                <input {...register("email", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" defaultValue={user?.email} type="email" name="email" id="email" />
                            </div>

                        </div>

                        <div className="w-full flex gap-3">

                            <div className="w-full flex gap-3 mb-10">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Description</span>
                                    </label>
                                    <textarea {...register("description", { required: true })} className="w-full  border-2 p-4 pl-5 rounded-lg" placeholder="Task  Description" name="description" id="description" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex gap-3">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Deadline</span>
                                </label>
                                <input {...register("deadline", { required: true })} required type="date" name="deadline" className="w-full h-12 border-2 p-4 pl-5 rounded-lg" />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Task Priority</span>

                                </label>
                                <select defaultValue="default" {...register("priority", { required: true })} className="select select-bordered w-full ">
                                    <option disabled value="default">Task priority</option>
                                    <option>Low</option>
                                    <option>moderate</option>
                                    <option>high</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-center">

                            <input className="text-[#FFF] btn font-extrabold uppercase mr-3 w-36 bg-[#006400] my-10 " type="submit" value="Add Task" />

                        </div>

                    </form>
                </div>


            </div>
        );
    };

    export default CreateTask;