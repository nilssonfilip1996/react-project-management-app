export default function Sidebar({ projectNames, chosenProjectTitle, handleViewProject, handleStartNewProject }) {
  function handleClick(e) {
    //console.log(e.target.textContent);
    handleViewProject(e.target.textContent);
  }

  function createProjectList() {
    console.log("---");
    console.log(chosenProjectTitle);
    console.log("---");
    
    
    return (
      <ul>
        {projectNames.map((projectName) => (
          <li key={projectName} className={projectName===chosenProjectTitle?"mb-4 border-x-4 px-2":"mb-4"}>
            <button className="hover:bg-stone-600 rounded-lg px-2" onClick={handleClick}>
              {projectName}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex bg-stone-900 text-stone-200 rounded-3xl h-full">
      <div className="basis-2/3 flex flex-col mx-auto pt-10 gap-5">
        <h1 className="text-4xl">YOUR PROJECTS</h1>
        <button className="w-fit px-3 py-2 text-lg rounded-xl bg-stone-600 hover:bg-stone-400 text-stone-200" onClick={handleStartNewProject}>
          + Add Project
        </button>
        {projectNames.length>0 && createProjectList()}
      </div>
    </div>
  );
}
