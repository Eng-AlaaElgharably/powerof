import Header from "@/components/header";
import Footer from "@/components/footer";
import About from "@/components/about";
import Services from "@/components/services";
import Products from "@/components/products";
import Companies from "@/components/companies";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Services/>
      <Products/>
      <Companies/>
      <Footer/>
    </main>  
  );
}
