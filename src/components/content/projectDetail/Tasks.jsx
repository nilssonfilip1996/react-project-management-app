import { useRef } from "react";

export default function Tasks({taskList, manageTask}) {
    const newTaskInput = useRef();
    const newTaskError = useRef();

    function handleNewTask(){
        if(newTaskInput.current.value.length===0){
            newTaskError.current.hidden=false;
        } else {
            newTaskError.current.hidden=true;
            manageTask(newTaskInput.current.value, "add");
        }
    }

    function handleDeleteTask(taskName) {
        manageTask(taskName, "delete");
    }

    function createTaskList() {
        return (
            <ul className="list-disc bg-stone-200 py-2 px-8 rounded-md">
                {taskList.map((task, index) => (
                <li key={index} className="my-1">
                    <div className="flex flex-row justify-between">
                        <p>{task}</p>
                        <button onClick={()=> handleDeleteTask(task)}>Clear</button>
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
                    <input className="grow bg-stone-200 rounded-md px-3.5 py-2" type="text" ref={newTaskInput}/>
                    <button className="px-2 bg-stone-400 hover:bg-stone-600 rounded-lg" onClick={handleNewTask}>Add Task</button>
                </div>
                <div className="text-red-400" hidden={true} ref={newTaskError}>Task can't be empty.</div>
            </div>
            {taskList.length>0 && createTaskList()}
        </div>
    )
}