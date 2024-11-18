import Image from "next/image";

export default function Products(){
    return(
        <div id="products">
            <div className="container">
                <div className="row-grid">
                    <div className="g-c-12 title">
                        <h1 className="center-title">المنتجات</h1> 
                    </div>
                    <div className="g-c-12 f-c-c f-w-w">
                        <div className="product">
                            <Image src="/images/p1.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>نقاط التجمع والعلامات الإرشادية</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p2.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>أنظمة الإطفاء الآلي بالغازات</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p3.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>مراوح الدخان والتهوية</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p4.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>أنظمة الإطفاء بالمحلول الكيميائي</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p5.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>أنظمة ستائر الدخان/الحريق</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p6.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>الأبواب المقاومة للحديد</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p7.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>إنارة ومخارج الطوارئ</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p8.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>أنظمة إنذار الحريق</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p9.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>أنظمة الإطفاء برذاذ الماء</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p10.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>أنظمة كاميرات المراقبة</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p11.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>محطات مضخات الحريق</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p12.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>أنظمة الإطفاء الآلي بالماء والرغوة</p></div>
                        </div>
                        <div className="product">
                            <Image src="/images/p13.jpeg" alt="power of product" width={150} height={150}></Image>
                            <div className="f-c-c"><p>خراطيم وعساكر وطفايات الحريق</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}