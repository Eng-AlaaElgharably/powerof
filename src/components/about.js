import Image from "next/image";

export default function About(){
    
    return(
        <div id="about">
            <div className="container">
                <div className="row-grid">
                    <div className="g-c-12 title">
                        <h1>عن الشركة</h1> 
                    </div>
                    <div className="g-c-6 g-c-l-12 f-s-c">
                        <p className="about-text">تأسست شركة قوة الإطفاء في جدة - المملكة العربية السعودية، وهي من بين الشركات الرائدة في المملكة العربية السعودية التي تقدم خدمات ومنتجات أنظمة الحماية من الحرائق وأجهزة إنذار الحريق ومعدات مكافحة الحرائق وأنظمة هندسة الأمن والسلامة. تمتلك شركة قوة الإطفاء فريقًا من المهندسين والفنيين المدربين والمؤهلين بشكل احترافي يعملون على الافا بالتزامنا بتقديم خبراتنا لعملائنا في حماية الأرواح والبيئة والممتلكات.</p>
                    </div>
                    <div className="g-c-6 g-c-l-12 about-image">
                        <Image src="images/about.jpg" alt="about power of" layout="fill"></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}
