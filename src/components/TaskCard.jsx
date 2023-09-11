import Link from "next/link";
import "../styles/globals.css";

export function TaskCard({ task }) {
  return (
    <Link href={`/tasks/${task._id}`}>
      <div className="background-cards p-10 text-white rounded-md">
        <div className="flex flex-row items-center mb-2">
        <span className="mr-2"><i class="gg-layout-list"></i></span>
          <h1 className="text-2xl font-bold ml-2">{task.title}</h1>
        </div>
        
        <div className="flex flex-row items-center mb-2 ml-3">
        <span className="mr-2"><i class="gg-shape-circle" style={{width:10, height:10}}></i></span>
        <p className="text-slate-300 text-white">{task.description}</p>
        </div> 
        
        <div className="flex flex-row items-center mb-2 ml-3">
        <span className="mr-2"><i class="gg-shape-circle" style={{width:10, height:10}}></i></span>
        <p className="text-slate-400 my-2 font text-xs text-white">
          <span className="mr-1 text-xs">Created at:</span>
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
        </div>
        
      </div>
    </Link>
  );
}

export default TaskCard;
