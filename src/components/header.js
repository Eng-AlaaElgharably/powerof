"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import $ from "jquery"

export default function Header(){
    const sentence = "نحن نحافظ على بيئتك أمنة";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        $('.bar').on('click', () => {
            $('.nav-bar').toggleClass('hidden'); 
        });
        return () => {
            $('.bar').off('click');
        };
      }, []);
      useEffect(() => {
        $('.link').on('click', () => {
            $('.nav-bar').toggleClass('hidden'); 
        });
        return () => {
            $('.link').off('click');
        };
      }, []);
    useEffect(() => {
        setTimeout(() => {
            if (index < sentence.length) {
              setText((prev) => prev + sentence[index]);
              setIndex((prev) => prev + 1);
            } else {
              setTimeout(() => {
                setText("");
                setIndex(0);
              }, 1000); 
            }
          }, 100);
    }, [index, sentence]);
    return(
        <header>
            <div className="container">
                <div className="row-grid">
                    <div className="g-c-3 g-c-md-6 logo">
                        <Image src="images/logo.png" alt="power of logo" width={180} height={50}></Image>
                    </div>
                    <div className="g-c-9 g-c-md-12 f-c-s nav-bar hidden">
                        <Link className="link" href='/'>الرئيسية</Link>
                        <Link className="link" href='#about'>عن الشركة</Link>
                        <Link className="link" href='#services'>الخدمات</Link>
                        <Link className="link" href='#products'>المنتجات</Link>
                        <Link className="link" href='#companies'>شركاء النجاح</Link>
                    </div>
                    <i className="fa-solid fa-bars bar f-c-c"></i>
                </div>
            </div>
            <div className="header-image">
                <Image src="images/header-background.jpg" fill="cover" alt="header image"></Image>
                <h1 className="f-c-c">{text}</h1>
            </div>
        </header>
    );
}
