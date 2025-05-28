export default function Sidebar() {
    return (
        <div className="bg-zinc-800 text-zinc-200 rounded-tr-3xl">
            <div className="flex flex-col ps-24 pt-10 gap-5">
                <h1 className="text-4xl" >YOUR PROJECTS</h1>
                <button className="w-fit px-3 py-2 text-lg rounded-xl bg-zinc-600 hover:bg-zinc-400" >+ Add Project</button>  
                <ul>
                    <li>
                        <button className="focus:bg-violet-700">
                          Project 1  
                        </button>
                    </li>
                    <li>
                        <button className="focus:bg-violet-700">
                          Project 2  
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}