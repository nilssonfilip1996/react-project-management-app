import { useState } from "react";

import NewProject from "./NewProject";
import Fallback from "./Fallback";


export default function Content({chosenProject, defaultView="fallback", handleSave}) {
    const [contentView, setContentView] = useState(defaultView);
    console.log(contentView);
    
    function handleCancel() {
        setContentView("fallback");
    }

    function handleStartNewProject(){
        setContentView("newProject");
    }
    console.log("rerender");
    

    function getView() {
        switch (contentView) {
            case "fallback":
                return <Fallback handleStartProjectButton={handleStartNewProject}/>
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