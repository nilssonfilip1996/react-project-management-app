import { useState } from "react";

import Content from "./components/content/Content";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState({});
  const [chosenProject, setChosenProject] = useState(null);

  function addNewProject({title, description, dueDate}){
    setProjects((prevProjects) => ({...prevProjects, [title]: {"title": title, "description": description, "dueDate": dueDate, tasks: []}}));
  }
  console.log(projects);


  function viewProject(projectName) {
/*     console.log("----");
    console.log(projects[projectName]);
    console.log("----"); */
    setChosenProject(projects[projectName]);
  }
  {chosenProject && console.log(`Chosen project: ${chosenProject.title}`)};
  

  return (
    <>
      <div className="flex flex-row mt-36">
        <div className="basis-1/4">
          <Sidebar projectNames={Object.keys(projects)} handleViewProject={viewProject}/>
        </div>
        <div className="basis-3/5">
          <Content handleSave={addNewProject} />
        </div>
      </div>
    </>
  );
}

export default App;
