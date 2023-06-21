import React from 'react'
import ModalsReuse from './ModalsReuse'

function Report() {
    return (
        <div>
            {' '}
            <ModalsReuse
                title={'รีพอร์ต'}
                header={
                    'เราต้องการให้เว็บเป็นพื้นที่ปลอดภัยสำหรับการพูดคุยหากพบยูสเชอร์ที่ไม่เป็นพื้นที่ปลอดภัย สารมารถกดปุ่มรีพอร์ตที่ข้างชื่อได้เลย'
                }
            >
                <div>
                    <p className="py-4">
                        โดยยูสเซอร์ที่ล็อคอินมีสิทธิ์รีพอร์ต 1 ครั้ง/วัน
                    </p>
                    <p className="py-4">
                        ยูสเซอร์บูสต์มีสิทธิ์รีพอร์ต 3 คร้ัง/วัน
                    </p>
                    <div className="w-20">
                        <img src="src/assets/iReport.svg" />
                    </div>
                    <p className="py-4">เมื่อยูสเซอร์ถูกรีพอร์ตจำนวนหนึ่ง</p>
                    <p className="py-4">ระบบจะทำการแบนตามหลักการข้างล่างนี้</p>
                    <br />
                    <p className="py-4">โดนแบนครั้งที่ 1 : 3 วัน</p>
                    <p className="py-4">โดนแบนครั้งที่ 2 : 7 วัน</p>
                    <p className="py-4">โดนแบนครั้งที่ 3 : 1 เดือน</p>
                    <p className="py-4">โดนแบนครั้งที่ 4 : ตลอดไป</p>
                </div>
            </ModalsReuse>
        </div>
    )
}

export default Report
