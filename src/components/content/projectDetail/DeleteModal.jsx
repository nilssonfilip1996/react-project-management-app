import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const DeleteModal = forwardRef(function DeleteModal({projectName, handleDelete}, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () =>{
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <div>
            <dialog className="delete-modal" ref={dialog}>
                <div className="fixed inset-0 grid place-content-center bg-black/90">
                    <div className="w-full max-w-lg bg-white p-4 shadow-lg rounded-lg">
                        <h2>Are you sure that you want to delete the project: <span className="text-center text-xl font-bold block">{projectName}?</span></h2>
                        <div className="flex flex-row justify-center mt-4 gap-4">
                            <button className="px-4 py-2 text-stone-800 bg-red-200 hover:bg-red-400 rounded-md" onClick={handleDelete}>Yes</button>
                            <button className="px-4 py-2 text-stone-800 bg-green-200 hover:bg-green-400 rounded-md" onClick={() => dialog.current.close()}>No</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>, document.getElementById("modal-root")

    )
});

export default DeleteModal;