import NewProject from "./NewProject";
import Fallback from "./Fallback";
import ProjectDetail from "./projectDetail/ProjectDetail";


export default function Content({handleSave, handleCancel, handleStartNewProject, handleDeleteProject, manageTask, contentView, chosenProject}) {
    console.log(contentView);
    
    console.log("rerender");
    
    function getView() {
        switch (contentView) {
            case "fallback":
                return <Fallback handleStartProjectButton={handleStartNewProject}/>
            case "newProject":
                return <NewProject handleCancel={handleCancel} handleSave={handleSave}/>
            case "viewProject":
                return <ProjectDetail project={chosenProject} handleDeleteProject={handleDeleteProject} manageTask={manageTask}/>
            default:
                return <div><p>Error</p></div>;
        }
    }
    
    //const view = getView();

    return (
        <div className="p-6">
            {getView()}
        </div>
    )
}