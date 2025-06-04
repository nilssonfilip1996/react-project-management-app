import { useState } from "react";

import logo from "../assets/no-projects.png";
import NewProject from "./NewProject";

function getFallbackView(setContentView) {
    return (
        <div className="flex flex-col py-10 items-center">
            <img src={logo} alt="" className="w-28 h-28 object-contain"/>
            <h1 className="text-4xl mt-2 text-stone-600">No Project Selected</h1>
            <p className="text-xl mt-2 text-stone-400">Select a project or get started with a new one</p>
            <button className="w-fit mt-6 px-3 py-2 text-lg rounded-xl bg-stone-900 hover:bg-stone-400 text-stone-200" onClick={() => setContentView("newProject")}>Create New Project</button>
        </div>
    )
}


export default function Content({chosenProject, defaultView="fallback", handleSave}) {
    const [contentView, setContentView] = useState(defaultView);
    console.log(contentView);
    
    function handleCancel() {
        setContentView("fallback");
    }

    function getView() {
        switch (contentView) {
            case "fallback":
                return getFallbackView(setContentView);
            case "newProject":
                return <NewProject handleCancel={handleCancel} handleSave={handleSave}/>
            case "viewProject":
                return <></>
            default:
                return <div><p>Error</p></div>;
        }
    }
    
    const view = getView();

    return (
        view
    )
}