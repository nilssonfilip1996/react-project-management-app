import { useState } from "react";

import Content from "./components/content/Content";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState({});
  const [chosenProject, setChosenProject] = useState(null);
  const [contentView, setContentView] = useState("fallback");

  function addNewProject({ title, description, dueDate }) {
    setProjects((prevProjects) => ({
      ...prevProjects,
      [title]: {
        title: title,
        description: description,
        dueDate: dueDate,
        tasks: [],
      },
    }));
    setChosenProject(null);
    setContentView("fallback");
  }

  function viewProject(projectName) {
    setChosenProject(projects[projectName]);
    setContentView("viewProject");
  }
  {
    chosenProject && console.log(`Chosen project: ${chosenProject.title}`);
  }

  function handleCancel() {
    setChosenProject(null);
    setContentView("fallback");
  }

  function handleStartNewProject() {
    setChosenProject(null);
    setContentView("newProject");
  }

  function handleDeleteProject(projectName) {
    let prevProjects = { ...projects };
    delete prevProjects[projectName];
    setProjects(prevProjects);
    setContentView("fallback");
  }

  function manageTask(projectName, taskName, operation) {
    let prevProjects = { ...projects };
    if (operation === "add") {
      prevProjects[projectName].tasks.push(taskName);
    } else {
      const index = prevProjects[projectName].tasks.indexOf(taskName);
      if (index > -1) {
        // only splice array when item is found
        prevProjects[projectName].tasks.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    setProjects(prevProjects);
  }

  return (
    <>
      <div className="flex flex-row my-36">
        <div className="basis-1/4">
          <Sidebar
            projectNames={Object.keys(projects)}
            handleViewProject={viewProject}
            handleStartNewProject={handleStartNewProject}
          />
        </div>
        <div className="basis-2/5">
          <Content
            handleSave={addNewProject}
            handleCancel={handleCancel}
            handleStartNewProject={handleStartNewProject}
            handleDeleteProject={handleDeleteProject}
            manageTask={manageTask}
            contentView={contentView}
            chosenProject={chosenProject}
          />
        </div>
      </div>
    </>
  );
}

export default App;
