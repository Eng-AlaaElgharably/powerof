import Image from "next/image";

export default function Services(){
    return(
        <div id="services">
            <div className="container">
                <div className="row-grid">
                    <div className="g-c-12 title">
                        <h1 className="center-title">الخدمات</h1> 
                    </div>
                    <div className="g-c-12 f-c-c f-w-w">
                        <div className="service">
                            <Image src="/images/service-1.jpg" alt="about power of" width={300} height={300}></Image>
                            <p>عقود الصيانة الدورية الوقائية</p>
                        </div>
                        <div className="service">
                            <Image src="/images/service-2.jpg" alt="about power of" width={300} height={300}></Image>
                            <p>المشـــــاريـــــع والمقـــــاولات</p>
                        </div>
                        <div className="service">
                            <Image src="/images/service-3.jpg" alt="about power of" width={300} height={300}></Image>
                            <p>الخدمـــــات الهندسيــــــــة</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}