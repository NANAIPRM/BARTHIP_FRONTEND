import React, { useEffect, useState } from 'react'

function ModalsReuse({ title, header, children, className = '' }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (show) {
            window[title].showModal()
        }
    }, [show])
    return (
        <div>
            <div
                className={`btn border-none bg-transparent ${className}`}
                onClick={() => setShow(true)}
            >
                {title}
            </div>
            {show ? (
                <dialog
                    id={title}
                    className="modal"
                    onClick={() => setShow(false)}
                >
                    <form
                        method="dialog"
                        className="modal-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShow(false)}
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            <img src="src/assets/iX.svg" />
                        </button>
                        <h3 className="font-bold text-lg">{header}</h3>

                        {children}
                    </form>
                </dialog>
            ) : (
                <></>
            )}
        </div>
    )
}

export default ModalsReuse
