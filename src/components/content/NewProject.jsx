
export default function NewProject({handleCancel, handleSave}) {
    function handleSubmit(formData) {
        const formattedFormData = {title: formData.get("title"), description: formData.get("description"), dueDate: formData.get("dueDate")};
        handleSave(formattedFormData);
    }
    return (
        <form className="flex flex-col ms-20 pb-10" action={handleSubmit}>
            <div className="flex flex-row-reverse gap-4">
                <button className="w-fit px-3 py-2 text-lg rounded-xl bg-stone-900 hover:bg-stone-400 text-stone-200" type="submit">Save</button>
                <button className="w-fit px-3 py-2 text-lg rounded-xl bg-stone-100 hover:bg-stone-400 text-stone-900" onClick={handleCancel}>Cancel</button>
            </div>
            <p className="text-lg font-bold">TITLE</p>
            <input type="text" name="title" className="text-lg px-3.5 py-2 rounded-md bg-stone-200 focus:outline-none border-b-2 focus:border-stone-900" required/>
            <p className="text-lg font-bold mt-6">DESCRIPTION</p>
            <textarea type="text" name="description" className="text-lg px-3.5 py-2 rounded-md bg-stone-200 focus:outline-none border-b-2 focus:border-stone-900" rows={4} required/>
            <p className="text-lg font-bold mt-6">DUE DATE</p>
            <input type="date" name="dueDate" className="text-lg px-3.5 py-2 rounded-md bg-stone-200 focus:outline-none border-b-2 focus:border-stone-900" required/>
        </form>
    )
}