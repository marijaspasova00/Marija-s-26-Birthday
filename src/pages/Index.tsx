
// import { useState } from "react";
// import { LanguageProvider, useLanguage } from "@/context/LanguageContext"; // ДОДАДЕНО useLanguage
// import Navbar from "@/components/NavBar"; 
// import HeroSection from "@/components/HeroSection";
// import ActivitiesSection from "@/components/ActivitiesSection";
// import WhatWouldMarijaDoSection from "@/components/WhatWouldMarijaDoSection";
// import IntroOverlay from "@/components/IntroOverlay";
// import heroBg from "@/assets/hero-bg.jpg";

// // Помошна компонента за содржината за да може да го користи useLanguage()
// const IndexContent = () => {
//   const { t } = useLanguage(); // Ова ја поправа грешката "Cannot find name 't'"

//   return (
//     <div className="animate-in fade-in duration-1000">
//       {/* Навигацијата */}
//       <Navbar /> 
      
//       {/* HERO СЕКЦИЈА */}
//       <div id="hero">
//         <HeroSection />
//       </div>
      
//       {/* ACTIVITIES СЕКЦИЈА */}
//       <div id="activities">
//         <ActivitiesSection />
//       </div>
      
//       {/* WHAT WOULD MARIJA DO СЕКЦИЈА (id="think" за навигацијата) */}
//       <div id="think">
//         <WhatWouldMarijaDoSection />
//       </div>
      
//       {/* FOOTER СЕКЦИЈА (id="location" за навигацијата) */}
//       <footer id="location" className="py-24 px-6 text-center relative overflow-hidden">
//         <img
//           src={heroBg}
//           alt=""
//           className="absolute inset-0 w-full h-full object-cover blur-[10px] scale-110 opacity-30"
//         />
//         <div className="absolute inset-0 bg-background/80" />
//         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        
//         <div className="relative z-10">
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <div className="w-12 h-px bg-primary/20" />
//             <span className="text-primary/30 text-[8px]">◆</span>
//             <div className="w-12 h-px bg-primary/20" />
//           </div>
          
//           <p className="font-display text-4xl md:text-5xl text-foreground font-light italic mb-4">
//             {t('footer.seeYou')}
//           </p>
          
//           <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase font-light">
//             {t('footer.details')}
//           </p>
          
//           <p className="text-primary/40 text-[10px] mt-10 tracking-[0.5em] uppercase font-light">
//             {t('footer.celebration')}
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// const Index = () => {
//   const [hasEntered, setHasEntered] = useState(false);

//   return (
//     <LanguageProvider> 
//       <div className="min-h-screen bg-background">
//         {!hasEntered && <IntroOverlay onEnter={() => setHasEntered(true)} />}
//         {hasEntered && <IndexContent />}
//       </div>
//     </LanguageProvider>
//   );
// };

// export default Index;
import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar"; // СРЕДЕНО: Сега е точно со мало 'b'
import HeroSection from "@/components/HeroSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import WhatWouldMarijaDoSection from "@/components/WhatWouldMarijaDoSection";
import IntroOverlay from "@/components/IntroOverlay";

const IndexContent = () => {
  const { t } = useLanguage(); 

  return (
    <div className="animate-in fade-in duration-1000">
      <Navbar /> 
      
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="activities">
        <ActivitiesSection />
      </div>
      
      <div id="think">
        <WhatWouldMarijaDoSection />
      </div>
      
      <footer id="location" className="py-24 px-6 text-center relative overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-[10px] scale-110 opacity-30"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary/20" />
            <span className="text-primary/30 text-[8px]">◆</span>
            <div className="w-12 h-px bg-primary/20" />
          </div>
          
          <p className="font-display text-4xl md:text-5xl text-foreground font-light italic mb-4">
            {t('footer.seeYou')}
          </p>
          
          <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase font-light">
            {t('footer.details')}
          </p>
          
          <p className="text-primary/40 text-[10px] mt-10 tracking-[0.5em] uppercase font-light">
            {t('footer.celebration')}
          </p>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <LanguageProvider> 
      <div className="min-h-screen bg-background">
        {!hasEntered && <IntroOverlay onEnter={() => setHasEntered(true)} />}
        {hasEntered && <IndexContent />}
      </div>
    </LanguageProvider>
  );
};

export default Index;