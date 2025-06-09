import Tasks from "./Tasks"

export default function ProjectDetail({project, handleDeleteProject, manageTask, handleDeleteTask}) {

    function formatManageTask(taskName, operation) {    
        manageTask(project.title, taskName, operation);
    }

    return (
        <div className="mx-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between align-middle">
                    <h1 className="font-semibold text-4xl text-stone-600">{project.title}</h1>
                    <button className="px-2 text-stone-800 bg-red-200 rounded-md">Delete</button>
                </div>
                <p className="text-stone-400">{project.dueDate}</p>
                <p className="text-stone-600">{project.description}</p>
                <div className="border border-b-stone-400"></div>
            </div>
            <Tasks taskList={project.tasks} manageTask={formatManageTask}/>
        </div>
    )
}