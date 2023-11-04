//import Image from 'next/image'
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#090915] container mx-auto px-12 p4">
      <Navbar />
      <div class="container mt-24 mx-auto"></div>
      <HeroSection />
    </main>
  );
}
