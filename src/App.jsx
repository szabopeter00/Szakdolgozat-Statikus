import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ComfortSection from "./components/sections/ComfortSection";
import SoundSection from "./components/sections/SoundSection";
import DurabilitySection from "./components/sections/DurabilitySection";
import AppearanceSection from "./components/sections/AppearanceSection";

export default function App() {
  return (
    <main>
      <Navbar />

      <HeroSection />

      <ComfortSection />

      <SoundSection />

      <DurabilitySection />

      <AppearanceSection />
    </main>
  );
}
