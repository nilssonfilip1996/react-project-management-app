

export default function NewProject({handleCancel, handleSave}) {
    return (
        <div className="flex flex-col ms-20 py-10">
            <div className="flex flex-row-reverse gap-4">
                <button className="w-fit px-3 py-2 text-lg rounded-xl bg-stone-900 hover:bg-stone-400 text-stone-200">Save</button>
                <button className="w-fit px-3 py-2 text-lg rounded-xl bg-stone-100 hover:bg-stone-400 text-stone-900">Cancel</button>
            </div>
            <p className="text-lg font-bold">TITLE</p>
            <input type="text" className="text-lg px-3.5 py-2 rounded-md bg-stone-200 focus:outline-none border-b-2 focus:border-stone-900"/>
            <p className="text-lg font-bold mt-6">DESCRIPTION</p>
            <textarea type="text" className="text-lg px-3.5 py-2 rounded-md bg-stone-200 focus:outline-none border-b-2 focus:border-stone-900" rows={4}/>
            <p className="text-lg font-bold mt-6">DUE DATE</p>
            <input type="date" className="text-lg px-3.5 py-2 rounded-md bg-stone-200 focus:outline-none border-b-2 focus:border-stone-900"/>
        </div>
    )
}