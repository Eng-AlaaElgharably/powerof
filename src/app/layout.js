import localFont from "next/font/local";
import "@/fontawesome/css/all.css";
import "@/fontawesome/js/all.js"
import "@/styles/alaaframework.css";
import "@/styles/global.css";

const lato = localFont({
  src: [
    {
      path: '../fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-lato', // Optional CSS variable
});

export const metadata = {
  title: "شركة قوة الإطفاء",
  description: "تأسست شركة قوة الإطفاء في جدة - المملكة العربية السعودية، وهي من بين الشركات الرائدة في المملكة العربية السعودية التي تقدم خدمات ومنتجات أنظمة الحماية من الحرائق وأجهزة إنذار الحريق ومعدات مكافحة الحرائق وأنظمة هندسة الأمن والسلامة. تمتلك شركة قوة الإطفاء فريقًا من المهندسين والفنيين المدربين والمؤهلين بشكل احترافي يعملون على الافا بالتزامنا بتقديم خبراتنا لعملائنا في حماية الأرواح والبيئة والممتلكات.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
