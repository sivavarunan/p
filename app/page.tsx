
import Hero from "@/components/Hero";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/components/ui/data";
import { FloatingNav } from "@/components/ui/floatingNav";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { LampComp } from "@/components/tubelight";
import ThreeDCardComp from "@/components/3dcard";
import { About } from "@/components/about";

export default function Home() {
  return (
<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems}/>
    <Hero />
    <About/>
    {/* <LampComp /> */}
    <Grid />
    <ThreeDCardComp />
    <Approach />
    <Footer />
  </div>
  </main>
  );
}