import noProjectImage from "../../assets/no-projects.png";

export default function Fallback({onStartProjectButton}) {
    return (
        <div className="flex flex-col py-10 items-center">
            <img src={noProjectImage} alt="An empty task list" className="w-28 h-28 object-contain"/>
            <h1 className="text-4xl mt-2 text-stone-600">No Project Selected</h1>
            <p className="text-xl mt-2 text-stone-400">Select a project or get started with a new one</p>
            <button className="w-fit mt-6 px-3 py-2 text-lg rounded-xl bg-stone-900 hover:bg-stone-400 text-stone-200" onClick={() => onStartProjectButton()}>Create New Project</button>
        </div>
    )
}