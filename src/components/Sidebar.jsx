export default function Sidebar({projectNames}) {

    function handleClick(e){
        console.log(e.target.textContent);
    }

    return (
        <div className="bg-stone-900 text-stone-200 rounded-r-3xl h-full">
            <div className="flex flex-col ps-24 pt-10 gap-5">
                <h1 className="text-4xl" >YOUR PROJECTS</h1>
                <button className="w-fit px-3 py-2 text-lg rounded-xl bg-stone-600 hover:bg-stone-400 text-stone-200" >+ Add Project</button>  
                <ul>
                    <li className="my-1" >
                        <button className="active:bg-violet-700" onClick={handleClick}>
                          Project 1  
                        </button>
                    </li>
                    <li className="my-1">
                        <button className="active:bg-violet-700" onClick={handleClick} value={"Test"}>
                          Project 2  
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}