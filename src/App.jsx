import { useState } from "react";

import Content from "./components/content/Content";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState({});
  const [chosenProject, setChosenProject] = useState(null);
  const [contentView, setContentView] = useState("fallback");

  function handleAddNewProject({ title, description, dueDate }) {
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

  function handleViewProject(projectName) {
    setChosenProject(projects[projectName]);
    setContentView("viewProject");
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
    <main className="flex flex-col h-screen justify-center">
      <div className="flex flex-row justify-center mb-6">
        <h1 className="text-center text-4xl basis-3/5 py-4 bg-stone-900 text-stone-200 rounded-3xl">Project Management App</h1>
      </div>
      
      <div className="flex flex-row justify-center">
        <div className="basis-1/5">
          <Sidebar
            projectNames={Object.keys(projects)} chosenProjectTitle={chosenProject?chosenProject.title:null}
            onViewProject={handleViewProject}
            onStartNewProject={handleStartNewProject}
          />
        </div>
        <div className="basis-2/5">
          <Content
            onAddProject={handleAddNewProject}
            onCancel={handleCancel}
            onStartNewProject={handleStartNewProject}
            onDeleteProject={handleDeleteProject}
            manageTask={manageTask}
            contentView={contentView}
            chosenProject={chosenProject}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center mt-6">
        <h1 className="text-center basis-3/5 py-2 bg-stone-900 text-stone-200 rounded-3xl">Made {new Date().getFullYear()} by Filip</h1>
      </div>
    </main>
  );
}

export default App;
