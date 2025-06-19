import { useRef } from "react";
import Tasks from "./Tasks"
import DeleteModal from "./DeleteModal"

export default function ProjectDetail({project, onDeleteProject, manageTask}) {
    const deleteDialog = useRef();

    function formatManageTask(taskName, operation) {    
        manageTask(project.title, taskName, operation);
    }

    return (
        <div className="">
            <DeleteModal ref={deleteDialog} projectName={project.title} handleDelete={() => onDeleteProject(project.title)}/>
            <div className="flex flex-col gap-4 pb-2 mb-4 border-b-2 border-b-stone-400">
                <div className="flex flex-row justify-between align-middle">
                    <h1 className="font-semibold text-3xl text-stone-600">{project.title}</h1>
                    <button className="px-2 py-3 h-fit my-auto text-stone-800 bg-red-200 hover:bg-red-400 rounded-md" onClick={()=>deleteDialog.current.open()} >Delete</button>
                </div>
                <p className="text-stone-400">{project.dueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p> 
            </div>
            <Tasks taskList={project.tasks} manageTask={formatManageTask}/>
        </div>
    )
}