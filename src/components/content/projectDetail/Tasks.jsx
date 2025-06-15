import { useState, useRef } from "react";

export default function Tasks({taskList, manageTask}) {
    const [inputValue, setInputValue] = useState("");
    const [showError, setShowError] = useState(false);

    function handleSubmitNewTask() {
        if(inputValue.length===0){
            setShowError(true);
        } else {
            setShowError(false);
            setInputValue("");
            manageTask(inputValue, "add");
        }
    }

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleDeleteTask(taskName) {
        manageTask(taskName, "delete");
    }

    function createTaskList() {
        return (
            <ul className="list-disc bg-stone-200 py-2 ps-8 pe-3 rounded-md">
                {taskList.map((task, index) => (
                <li key={index} className="my-1">
                    <div className="flex flex-row justify-between align-bottom ps-2 hover:bg-stone-300 rounded-md">
                        <p className="h-fit my-auto">{task}</p>
                        <button className="p-2 hover:bg-red-400 rounded-md" onClick={()=> handleDeleteTask(task)}>Clear</button>
                    </div>
                </li>
                ))}
            </ul>
        );
  }

    return (
        <div>
            <div className="flex flex-col mb-6">
                <h2 className="font-semibold text-2xl mt-4">Tasks</h2>
                <div className="flex flex-row gap-2">
                    <input className="grow bg-stone-200 rounded-md px-3.5 py-2 focus:outline-none border-b-2 focus:border-stone-900" type="text" value={inputValue} onChange={handleInputChange}/>
                    <button className="px-2 bg-stone-400 hover:bg-stone-600 rounded-lg" onClick={handleSubmitNewTask}>Add Task</button>
                </div>
                <div className="text-red-400" hidden={showError?false:true}>Task can't be empty.</div>
            </div>
            {taskList.length>0 && createTaskList()}
        </div>
    )
}