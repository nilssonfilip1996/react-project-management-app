export default function Sidebar({ projectNames, chosenProjectTitle, onViewProject, onStartNewProject }) {
  function handleClick(e) {
    onViewProject(e.target.textContent);
  }

  function createProjectList() {
    return (
      <ul className="my-4">
        {projectNames.map((projectName) => (
          <li key={projectName} className={projectName===chosenProjectTitle?"mb-4 border-x-4 px-2":"mb-4"}> 
            <button className="w-full hover:bg-stone-600 rounded-lg px-2" onClick={handleClick}>
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
        <button className="w-fit px-3 py-2 text-lg rounded-xl bg-stone-600 hover:bg-stone-500" onClick={onStartNewProject}>
          + Add Project
        </button>
        {projectNames.length>0 && createProjectList()}
      </div>
    </div>
  );
}
