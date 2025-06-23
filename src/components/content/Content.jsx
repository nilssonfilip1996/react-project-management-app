import NewProject from "./NewProject";
import Fallback from "./Fallback";
import ProjectDetail from "./projectDetail/ProjectDetail";


export default function Content({onAddProject, onCancel, onStartNewProject, onDeleteProject, manageTask, contentView, chosenProject}) {
    
    function getView() {
        switch (contentView) {
            case "fallback":
                return <Fallback onStartProjectButton={onStartNewProject}/>
            case "newProject":
                return <NewProject onCancel={onCancel} onAddProject={onAddProject}/>
            case "viewProject":
                return <ProjectDetail project={chosenProject} onDeleteProject={onDeleteProject} manageTask={manageTask}/>
            default:
                return <div><p>Error</p></div>;
        }
    }

    return (
        <div className="p-6">
            {getView()}
        </div>
    )
}