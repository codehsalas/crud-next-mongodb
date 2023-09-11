import { dbConnect } from "@/utils/mongoose";
import TaskCard from "@/components/TaskCard";
import Task from "@/models/Task";

export async function loadTasks() {
  await dbConnect();
  const tasks = await Task.find();
  return tasks;
}

export default async function HomePage() {
  const tasks = await loadTasks();

  return (
    <div className="grid md:grid-cols-3 gap-5 mt-5">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}
