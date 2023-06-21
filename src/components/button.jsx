export default function Button({ text }) {
    return (
        <>
            <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4  ">
                <img
                    src="src/assets/iMessageBox.svg"
                    alt="chatbox"
                    className="w-full "
                />
                <button className="w-full py-6 px-16 absolute">
                    <p className="text-lg">{text}</p>
                </button>
            </div>
        </>
    )
}
