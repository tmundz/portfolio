//import Image from 'next/image'
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#090915] container mx-auto px-12 p4">
      <HeroSection />
    </main>
  );
}
