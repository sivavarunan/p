import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/components/ui/data";
import { FloatingNav } from "@/components/ui/floatingNav";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { FlipWordsDemo } from "@/components/flip";




export default function Home() {
  return (
<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems}/>
    <Hero />
    <Grid />
    <FlipWordsDemo />
    <RecentProjects />  
    <Clients />
    <Experience/>
    <Approach />
    <Footer />
  </div>
  </main>
  );
}