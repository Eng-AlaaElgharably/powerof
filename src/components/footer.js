import Link from "next/link";

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row-grid">
                    <div className="g-c-4 g-c-l-12 f-c-s">
                        <i className="fa-solid fa-location-dot f-c-c"></i>
                        <div className="f-s-c f-d-c">
                            <p>الـــمدينـــــة المنـــــــــــورة طـــريـــــــــــق ٢٣٦٨</p>
                            <p>هــــــــــلال بن أميـــــــــــة - حـــــــي الشرفيـــــــة</p>
                            <p>الطابــــــــــق الثــــــانــــي مكتــــــب رقـــــــم ٢٩</p>
                        </div>
                    </div>
                    <div className="g-c-4 g-c-l-6 f-c-s">
                        <i className="fa-solid fa-phone-volume f-c-c"></i>
                        <div className="f-s-c f-d-c">
                            <p>0509916060</p>
                            <p>0535996060</p>
                        </div>
                    </div>
                    <div className="g-c-4 g-c-l-6 f-c-s">
                        <i className="fa-solid fa-globe f-c-c"></i>
                        <div className="f-s-c f-d-c">
                            <p>sales@powerof.sa</p>
                            <p>www.powerof.sa</p>
                        </div>
                    </div>
                </div>
                <div className="row-grid rights">
                    <p className="g-c-8 g-c-sm-12 f-c-s">كل الحقوق محفوظة. شركة قوة الإطفاءلأدوات ومواد السلامة © 2022</p>
                    <nav className="g-c-4 g-c-sm-12 social-media f-c-e">
                        <Link href="/"><i className="fa-brands fa-facebook-f f-c-c"></i></Link>
                        <Link href="/"><i className="fa-brands fa-x-twitter f-c-c"></i></Link>
                        <Link href="/"><i className="fa-brands fa-whatsapp f-c-c"></i></Link>
                        <Link href="/"><i className="fa-brands fa-instagram f-c-c"></i></Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}