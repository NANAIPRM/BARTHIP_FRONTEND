import React from 'react'

function BoostPageContainer() {
    return (
        <>
            <div className="max-w-5xl bg-green-300 flex flex-col justify-center mx-auto">
                <div className="flex justify-center">
                    <div>
                        <img src="src/assets/iFly.svg" alt="ifly" />
                    </div>
                    <div>Container</div>
                </div>
                <div className="flex flex-col mx-auto">
                    <h1>FAQ</h1>
                    <div>
                        <p>Q: ถ้าครบเดือนที่ซื้อบูสต์ไว้แล้วจะเกิดอะไรขึ้น</p>
                        <p>
                            A: ไอเทมแต่งตัวต่าง ๆ จะหายอัตโนมัติ
                            สามารถมากดซื้อบูสต์ใหม่ได้
                        </p>
                    </div>
                    <div>
                        <p>Q: เปลี่ยนหมวก ถอดหมวดได้ไหม</p>
                        <p>
                            A: ตอนนี้ยังทำไม่ได้ เป็น feature ในอนาคต
                            เมื่อมีคนสนับสนุนเว็บมากขึ้น
                        </p>
                    </div>
                    <div>
                        <p>Q: หมวกเปลี่ยนตามเทศกาลคือยังไง</p>
                        <p>
                            A: ทุก ๆ เดือนเราจะออกหมวกเซ็ตใหม่
                            หรือมีหมวกพิเศษตาม Theme ในช่วงเทศกาลต่าง ๆ
                            (เมื่อก่อนจะเปลี่ยนให้ทุกคนที่เป็นยูสเซอร์ล๊อกอิน
                            แต่หลังจากนี้จะเปลี่ยนเฉพาะหมวกของยูสเซอร์บูสเท่านั้น
                            พิเศษแน่นอน !)
                        </p>
                    </div>
                    <div>
                        <p>
                            Q: หากกดรับ qrcode เพื่อโอนแล้ว
                            ต้องโอนภายในเวลาเท่าไร
                        </p>
                        <p>
                            A: ภายใน 60 นาทีหลังจากกดรับ qrcode นะคะ
                            แต่สามารถกดสร้าง qrcode ใหม่ได้ โดยการกลับไปหน้า
                            drinksonme.live/boost แล้วกดซื้ออีกรอบค่ะ
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoostPageContainer
