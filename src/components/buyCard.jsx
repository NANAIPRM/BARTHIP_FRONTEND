export default function BuyCard() {
    return (
        <>
            <div className="flex flex-col justify-center items-center relative w-40">
                <img src="src/assets/iBuybox.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5 bottom-5">
                    <img src="src/assets/iMilktea.svg" />
                </div>
                <div>ชานมไข่มุก</div>
                <div>ราคา 30 บาท</div>
                <button className="w-20">
                    <img src="src/assets/iBuy.svg" />
                </button>
            </div>
        </>
    )
}
