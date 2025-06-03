import { useState } from "react";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState({});

  function addNewProject({title, description, dueDate}){
    setProjects((prevProjects) => ({...prevProjects, [title]: {"description": description, "dueDate": dueDate}}));
    console.log(projects);
  }

  //console.log(projects);
  return (
    <>
      <div className="flex flex-row mt-36">
        <div className="basis-1/4">
          <Sidebar projectNames={Object.keys(projects)}/>
        </div>
        <div className="basis-3/5">
          <Content handleSave={addNewProject}/>
        </div>
      </div>
    </>
  );
}

export default App;
