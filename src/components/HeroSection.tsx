

// // // // // import { useState, useEffect } from "react";
// // // // // import LemonIntro from "./LemonIntro";
// // // // // import heroBg from "@/assets/hero-bg.jpg";
// // // // // import BackgroundMusic from "./BackgroundMusic"; 

// // // // // const HeroSection = () => {
// // // // //   const [showLemons, setShowLemons] = useState(true);
// // // // //   const [startMusic, setStartMusic] = useState(false); 

// // // // //   useEffect(() => {
// // // // //     // Веднаш штом се вчита Hero (после клик на Intro), пушти ја музиката
// // // // //     setStartMusic(true); 

// // // // //     // По 4.5 секунди само тргни ги лимоните, музиката си продолжува
// // // // //     const timer = setTimeout(() => {
// // // // //       setShowLemons(false);
// // // // //     }, 4500);

// // // // //     return () => clearTimeout(timer);
// // // // //   }, []);

// // // // //   return (
// // // // //     // <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
// // // // //       <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-0">
// // // // //       {/* МУЗИКА - Почнува во исто време со лимоните */}
// // // // //       <BackgroundMusic forcePlay={startMusic} />

// // // // //       {/* Лимоните паѓаат врз сè */}
// // // // //       {showLemons && <LemonIntro />}

// // // // //       {/* ОД ТУКА НАДОЛУ Е ТВОЈОТ ОРИГИНАЛЕН КОД - НЕПРОМЕНЕТ */}
// // // // //       <img
// // // // //         src={heroBg}
// // // // //         alt=""
// // // // //         className="absolute inset-0 w-full h-full object-cover object-[25%_center] sm:object-center scale-100 sm:scale-110 blur-[0.1px]"
// // // // //         width={1920}
// // // // //         height={1080}
// // // // //       />
// // // // //       <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

// // // // //       <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
// // // // //         <line x1="10%" y1="0" x2="20%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// // // // //         <line x1="90%" y1="0" x2="80%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// // // // //       </svg>

// // // // //       <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
// // // // //         <div className="flex items-center justify-center gap-4 mb-4 sm:mb-10 animate-fade-up">
// // // // //           <div className="w-20 h-px bg-primary/25" />
// // // // //           <span className="text-primary/50 text-xs tracking-widest">✦</span>
// // // // //           <div className="w-20 h-px bg-primary/25" />
// // // // //         </div>

// // // // //         <p className="text-muted-foreground tracking-[0.5em] uppercase text-[15px] mb-8 animate-fade-up font-light">
// // // // //           You are cordially invited to
// // // // //         </p>

// // // // //         <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-1 animate-fade-up-delay-1 leading-none italic">
// // // // //           Marija's
// // // // //         </h1>
// // // // //         <p className="font-display text-7xl md:text-9xl lg:text-[10rem] font-semibold text-primary/70 animate-fade-up-delay-1 leading-none mb-1">
// // // // //           26th
// // // // //         </p>
// // // // //         <p className="font-display text-2xl md:text-3xl text-foreground/60 italic tracking-wider mb-12 animate-fade-up-delay-2 font-light">
// // // // //           Birthday Celebration
// // // // //         </p>

// // // // //         <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up-delay-2">
// // // // //           <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/20" />
// // // // //           <span className="text-primary/30 text-[8px]">◆</span>
// // // // //           <div className="w-8 h-px bg-primary/20" />
// // // // //           <span className="text-primary/30 text-[8px]">◆</span>
// // // // //           <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/20" />
// // // // //         </div>

// // // // //         <p className="text-[15px] text-muted-foreground max-w-md mx-auto mb-2 animate-fade-up-delay-2 leading-relaxed font-light">
// // // // //           Come dressed as your version of me — how you see me, imagine me, or even my future self. Be creative, funny, dramatic or iconic ✨
// // // // //         </p>

// // // // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm animate-fade-up-delay-3 mb-6">
// // // // //           <div className="flex items-center gap-2">
// // // // //             <span className="text-primary/50 text-[10px]">✧</span>
// // // // //             <span className="tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">April 18</span>
// // // // //           </div>
// // // // //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// // // // //           <div className="flex items-center gap-2">
// // // // //             <span className="text-primary/50 text-[10px]">✧</span>
// // // // //             <span className="tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">8:00 PM</span>
// // // // //           </div>
// // // // //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// // // // //           <div className="flex items-center gap-2">
// // // // //             <span className="text-primary/50 text-[10px]">✧</span>
// // // // //             <span className="tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">Kata Pockova br.11</span>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="animate-fade-up-delay-4 bg-card/40 backdrop-blur-md rounded-2xl px-10 py-6 border border-primary/10 inline-block">
// // // // //           <p className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] mb-3 font-light">Dress Code</p>
// // // // //           <p className="text-primary font-display text-xl font-medium tracking-wide italic">Different Versions of Me</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;
// // // // // import { useState, useEffect } from "react";
// // // // // import { useLanguage } from "@/context/LanguageContext"; // ДОДАДЕНО
// // // // // import LemonIntro from "./LemonIntro";
// // // // // import heroBg from "/hero-bg.jpg";
// // // // // import BackgroundMusic from "./BackgroundMusic";

// // // // // const HeroSection = () => {
// // // // //   const { t } = useLanguage(); // Иницијализација на преводот
// // // // //   const [showLemons, setShowLemons] = useState(true);
// // // // //   const [startMusic, setStartMusic] = useState(false);

// // // // //   useEffect(() => {
// // // // //     setStartMusic(true); 

// // // // //     const timer = setTimeout(() => {
// // // // //       setShowLemons(false);
// // // // //     }, 4500);

// // // // //     return () => clearTimeout(timer);
// // // // //   }, []);

// // // // //   return (
// // // // //     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-0">
// // // // //       <BackgroundMusic forcePlay={startMusic} />

// // // // //       {showLemons && <LemonIntro />}

// // // // //       <img
// // // // //         src={heroBg}
// // // // //         alt=""
// // // // //         className="absolute inset-0 w-full h-full object-cover object-[25%_center] sm:object-center scale-100 sm:scale-110 blur-[0.1px]"
// // // // //         width={1920}
// // // // //         height={1080}
// // // // //       />
// // // // //       <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

// // // // //       <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
// // // // //         <line x1="10%" y1="0" x2="20%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// // // // //         <line x1="90%" y1="0" x2="80%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// // // // //       </svg>

// // // // //       <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
// // // // //         <div className="flex items-center justify-center gap-4 mb-4 sm:mb-10 animate-fade-up">
// // // // //           <div className="w-20 h-px bg-primary/25" />
// // // // //           <span className="text-primary/50 text-xs tracking-widest">✦</span>
// // // // //           <div className="w-20 h-px bg-primary/25" />
// // // // //         </div>

// // // // //         <p className="text-muted-foreground tracking-[0.5em] uppercase text-[15px] mb-8 animate-fade-up font-light">
// // // // //           {t('hero.invite')}
// // // // //         </p>

// // // // //         <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-1 animate-fade-up-delay-1 leading-none italic">
// // // // //           {t('hero.name')}
// // // // //         </h1>
// // // // //         <p className="font-display text-7xl md:text-9xl lg:text-[10rem] font-semibold text-primary/70 animate-fade-up-delay-1 leading-none mb-1">
// // // // //           {t('hero.age')}
// // // // //         </p>
// // // // //         <p className="font-display text-2xl md:text-3xl text-foreground/60 italic tracking-wider mb-12 animate-fade-up-delay-2 font-light">
// // // // //           {t('hero.celebration')}
// // // // //         </p>

// // // // //         <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up-delay-2">
// // // // //           <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/20" />
// // // // //           <span className="text-primary/30 text-[8px]">◆</span>
// // // // //           <div className="w-8 h-px bg-primary/20" />
// // // // //           <span className="text-primary/30 text-[8px]">◆</span>
// // // // //           <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/20" />
// // // // //         </div>

// // // // //         <p className="text-[15px] text-muted-foreground max-w-md mx-auto mb-2 animate-fade-up-delay-2 leading-relaxed font-light">
// // // // //           {t('hero.description')}
// // // // //         </p>

// // // // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm animate-fade-up-delay-3 mb-6">
// // // // //           <div className="flex items-center gap-2">
// // // // //             <span className="text-primary/50 text-[10px]">✧</span>
// // // // //             <span className="tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// // // // //               {t('hero.date')}
// // // // //             </span>
// // // // //           </div>
// // // // //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// // // // //           <div className="flex items-center gap-2">
// // // // //             <span className="text-primary/50 text-[10px]">✧</span>
// // // // //             <span className="tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// // // // //               {t('hero.time')}
// // // // //             </span>
// // // // //           </div>
// // // // //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// // // // //           <div className="flex items-center gap-2">
// // // // //             <span className="text-primary/50 text-[10px]">✧</span>
// // // // //             <span className="tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// // // // //               {t('hero.address')}
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="animate-fade-up-delay-4 bg-card/40 backdrop-blur-md rounded-2xl px-10 py-6 border border-primary/10 inline-block">
// // // // //           <p className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] mb-3 font-light">
// // // // //             {t('hero.dressCode')}
// // // // //           </p>
// // // // //           <p className="text-primary font-display text-xl font-medium tracking-wide italic">
// // // // //             {t('hero.dressCodeVal')}
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default HeroSection;
// // // // import { useState, useEffect } from "react";
// // // // import { useLanguage } from "@/context/LanguageContext"; // ДОДАДЕНО
// // // // import LemonIntro from "./LemonIntro";
// // // // import heroBg from "/hero-bg.jpg";
// // // // import BackgroundMusic from "./BackgroundMusic";

// // // // const HeroSection = () => {
// // // //   const { t } = useLanguage(); // Иницијализација на преводот
// // // //   const [showLemons, setShowLemons] = useState(true);
// // // //   const [startMusic, setStartMusic] = useState(false);

// // // //   useEffect(() => {
// // // //     setStartMusic(true); 

// // // //     const timer = setTimeout(() => {
// // // //       setShowLemons(false);
// // // //     }, 4500);

// // // //     return () => clearTimeout(timer);
// // // //   }, []);

// // // //   return (
// // // //     <section className="relative min-h-screen flex flex-col items-center pt-16 sm:pt-0 sm:justify-center overflow-hidden">
// // // //       {/* ПОПРАВЕНО: pt-16 за мобилен го крева текстот нагоре, sm:justify-center го враќа во центар на десктоп */}
      
// // // //       <BackgroundMusic forcePlay={startMusic} />

// // // //       {showLemons && <LemonIntro />}

// // // //       <img
// // // //         src={heroBg}
// // // //         alt=""
// // // //         className="absolute inset-0 w-full h-full object-cover object-[25%_center] sm:object-center scale-100 sm:scale-110 blur-[0.1px]"
// // // //         width={1920}
// // // //         height={1080}
// // // //       />
// // // //       <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

// // // //       <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
// // // //         <line x1="10%" y1="0" x2="20%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// // // //         <line x1="90%" y1="0" x2="80%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// // // //       </svg>

// // // //       <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
// // // //         <div className="flex items-center justify-center gap-4 mb-4 sm:mb-10 animate-fade-up">
// // // //           <div className="w-20 h-px bg-primary/25" />
// // // //           <span className="text-primary/50 text-xs tracking-widest">✦</span>
// // // //           <div className="w-20 h-px bg-primary/25" />
// // // //         </div>

// // // //         <p className="text-muted-foreground tracking-[0.5em] uppercase text-[12px] sm:text-[15px] mb-4 sm:mb-8 animate-fade-up font-light">
// // // //           {t('hero.invite')}
// // // //         </p>

// // // //         <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-1 animate-fade-up-delay-1 leading-none italic">
// // // //           {t('hero.name')}
// // // //         </h1>
// // // //         <p className="font-display text-7xl md:text-9xl lg:text-[10rem] font-semibold text-primary/70 animate-fade-up-delay-1 leading-none mb-1">
// // // //           {t('hero.age')}
// // // //         </p>
// // // //         <p className="font-display text-xl md:text-3xl text-foreground/60 italic tracking-wider mb-6 sm:mb-12 animate-fade-up-delay-2 font-light">
// // // //           {t('hero.celebration')}
// // // //         </p>

// // // //         <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up-delay-2">
// // // //           <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/20" />
// // // //           <span className="text-primary/30 text-[8px]">◆</span>
// // // //           <div className="w-8 h-px bg-primary/20" />
// // // //           <span className="text-primary/30 text-[8px]">◆</span>
// // // //           <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/20" />
// // // //         </div>

// // // //         <p className="text-[14px] sm:text-[15px] text-muted-foreground max-w-md mx-auto mb-4 animate-fade-up-delay-2 leading-relaxed font-light">
// // // //           {t('hero.description')}
// // // //         </p>

// // // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm animate-fade-up-delay-3 mb-8">
// // // //           <div className="flex items-center gap-2">
// // // //             <span className="text-primary/50 text-[10px]">✧</span>
// // // //             <span className="tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// // // //               {t('hero.date')}
// // // //             </span>
// // // //           </div>
// // // //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// // // //           <div className="flex items-center gap-2">
// // // //             <span className="text-primary/50 text-[10px]">✧</span>
// // // //             <span className="tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// // // //               {t('hero.time')}
// // // //             </span>
// // // //           </div>
// // // //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// // // //           <div className="flex items-center gap-2">
// // // //             <span className="text-primary/50 text-[10px]">✧</span>
// // // //             <span className="tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// // // //               {t('hero.address')}
// // // //             </span>
// // // //           </div>
// // // //         </div>

// // // //         <div className="animate-fade-up-delay-4 bg-card/40 backdrop-blur-md rounded-2xl px-8 py-4 sm:px-10 sm:py-6 border border-primary/10 inline-block">
// // // //           <p className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] mb-2 font-light">
// // // //             {t('hero.dressCode')}
// // // //           </p>
// // // //           <p className="text-primary font-display text-lg sm:text-xl font-medium tracking-wide italic">
// // // //             {t('hero.dressCodeVal')}
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default HeroSection;
// // // import { useState, useEffect } from "react";
// // // import { useLanguage } from "@/context/LanguageContext";
// // // import LemonIntro from "./LemonIntro";
// // // import heroBg from "/hero-bg.jpg";
// // // import BackgroundMusic from "./BackgroundMusic";

// // // const HeroSection = () => {
// // //   const { t } = useLanguage();
// // //   const [showLemons, setShowLemons] = useState(true);
// // //   const [startMusic, setStartMusic] = useState(false);

// // //   useEffect(() => {
// // //     setStartMusic(true); 

// // //     const timer = setTimeout(() => {
// // //       setShowLemons(false);
// // //     }, 4500);

// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   return (
// // //     <section className="relative min-h-screen flex flex-col items-center justify-start sm:justify-center overflow-hidden pt-20 sm:pt-0">
// // //       {/* justify-start + pt-20: Го поткрева текстот на мобилен.
// // //          sm:justify-center + sm:pt-0: Го враќа совршено во центар на компјутер.
// // //       */}
      
// // //       <BackgroundMusic forcePlay={startMusic} />

// // //       {showLemons && <LemonIntro />}

// // //       <img
// // //         src={heroBg}
// // //         alt=""
// // //         className="absolute inset-0 w-full h-full object-cover object-[25%_center] sm:object-center scale-100 sm:scale-110 blur-[0.1px]"
// // //       />
// // //       <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

// // //       <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
// // //         <line x1="10%" y1="0" x2="20%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// // //         <line x1="90%" y1="0" x2="80%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// // //       </svg>

// // //       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
// // //         <div className="flex items-center justify-center gap-4 mb-4 sm:mb-10 animate-fade-up">
// // //           <div className="w-12 sm:w-20 h-px bg-primary/25" />
// // //           <span className="text-primary/50 text-xs tracking-widest">✦</span>
// // //           <div className="w-12 sm:w-20 h-px bg-primary/25" />
// // //         </div>

// // //         <p className="text-muted-foreground tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[12px] sm:text-[15px] mb-4 sm:mb-8 animate-fade-up font-light">
// // //           {t('hero.invite')}
// // //         </p>

// // //         <h1 className="font-display text-5xl sm:text-8xl lg:text-9xl font-light text-foreground mb-1 animate-fade-up-delay-1 leading-none italic">
// // //           {t('hero.name')}
// // //         </h1>
// // //         <p className="font-display text-6xl sm:text-9xl lg:text-[10rem] font-semibold text-primary/70 animate-fade-up-delay-1 leading-none mb-2">
// // //           {t('hero.age')}
// // //         </p>
// // //         <p className="font-display text-lg sm:text-3xl text-foreground/60 italic tracking-wider mb-6 sm:mb-12 animate-fade-up-delay-2 font-light">
// // //           {t('hero.celebration')}
// // //         </p>

// // //         <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up-delay-2">
// // //           <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-primary/20" />
// // //           <span className="text-primary/30 text-[8px]">◆</span>
// // //           <div className="w-8 h-px bg-primary/20" />
// // //           <span className="text-primary/30 text-[8px]">◆</span>
// // //           <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-primary/20" />
// // //         </div>

// // //         <p className="text-[13px] sm:text-[16px] text-muted-foreground max-w-md mx-auto mb-6 animate-fade-up-delay-2 leading-relaxed font-light">
// // //           {t('hero.description')}
// // //         </p>

// // //         {/* ДАТУМ, ВРЕМЕ, АДРЕСА - Респонзивен распоред */}
// // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm animate-fade-up-delay-3 mb-10">
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-primary/50 text-[10px]">✧</span>
// // //             <span className="tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// // //               {t('hero.date')}
// // //             </span>
// // //           </div>
// // //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-primary/50 text-[10px]">✧</span>
// // //             <span className="tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// // //               {t('hero.time')}
// // //             </span>
// // //           </div>
// // //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-primary/50 text-[10px]">✧</span>
// // //             <span className="tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// // //               {t('hero.address')}
// // //             </span>
// // //           </div>
// // //         </div>

// // //         {/* DRESS CODE BOX */}
// // //         <div className="animate-fade-up-delay-4 bg-card/30 backdrop-blur-md rounded-2xl px-8 py-4 sm:px-12 sm:py-7 border border-primary/10 inline-block">
// // //           <p className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] mb-2 font-light">
// // //             {t('hero.dressCode')}
// // //           </p>
// // //           <p className="text-primary font-display text-lg sm:text-2xl font-medium tracking-wide italic">
// // //             {t('hero.dressCodeVal')}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroSection;
// // import { useState, useEffect } from "react";
// // import { useLanguage } from "@/context/LanguageContext";
// // import LemonIntro from "./LemonIntro";
// // import heroBg from "/hero-bg.jpg";
// // import BackgroundMusic from "./BackgroundMusic";

// // const HeroSection = () => {
// //   const { t } = useLanguage();
// //   const [showLemons, setShowLemons] = useState(true);
// //   const [startMusic, setStartMusic] = useState(false);

// //   useEffect(() => {
// //     setStartMusic(true); 

// //     const timer = setTimeout(() => {
// //       setShowLemons(false);
// //     }, 4500);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 sm:pt-40 md:pt-48">
// //       {/* pt-32: Го крева текстот на мобилен (Screenshot 1 fix)
// //           md:pt-48: Го спушта текстот на PC за да не го гази Navbar-от (Screenshot 2 fix)
// //       */}
      
// //       <BackgroundMusic forcePlay={startMusic} />

// //       {showLemons && <LemonIntro />}

// //       <img
// //         src={heroBg}
// //         alt=""
// //         className="absolute inset-0 w-full h-full object-cover object-[25%_center] sm:object-center scale-100 sm:scale-110 blur-[0.1px]"
// //         width={1920}
// //         height={1080}
// //       />
// //       <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

// //       <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
// //         <line x1="10%" y1="0" x2="20%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// //         <line x1="90%" y1="0" x2="80%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" />
// //       </svg>

// //       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
// //         <div className="flex items-center justify-center gap-4 mb-4 sm:mb-8 animate-fade-up">
// //           <div className="w-12 sm:w-20 h-px bg-primary/25" />
// //           <span className="text-primary/50 text-xs tracking-widest">✦</span>
// //           <div className="w-12 sm:w-20 h-px bg-primary/25" />
// //         </div>

// //         <p className="text-muted-foreground tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[12px] sm:text-[15px] mb-4 sm:mb-6 animate-fade-up font-light">
// //           {t('hero.invite')}
// //         </p>

// //         <h1 className="font-display text-5xl sm:text-8xl lg:text-9xl font-light text-foreground mb-1 animate-fade-up-delay-1 leading-none italic">
// //           {t('hero.name')}
// //         </h1>
// //         <p className="font-display text-6xl sm:text-9xl lg:text-[10rem] font-semibold text-primary/70 animate-fade-up-delay-1 leading-none mb-2">
// //           {t('hero.age')}
// //         </p>
// //         <p className="font-display text-lg sm:text-3xl text-foreground/60 italic tracking-wider mb-6 sm:mb-10 animate-fade-up-delay-2 font-light">
// //           {t('hero.celebration')}
// //         </p>

// //         <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up-delay-2">
// //           <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-primary/20" />
// //           <span className="text-primary/30 text-[8px]">◆</span>
// //           <div className="w-8 h-px bg-primary/20" />
// //           <span className="text-primary/30 text-[8px]">◆</span>
// //           <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-primary/20" />
// //         </div>

// //         <p className="text-[13px] sm:text-[16px] text-muted-foreground max-w-md mx-auto mb-8 animate-fade-up-delay-2 leading-relaxed font-light">
// //           {t('hero.description')}
// //         </p>

// //         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm animate-fade-up-delay-3 mb-10">
// //           <div className="flex items-center gap-2">
// //             <span className="text-primary/50 text-[10px]">✧</span>
// //             <span className="tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// //               {t('hero.date')}
// //             </span>
// //           </div>
// //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// //           <div className="flex items-center gap-2">
// //             <span className="text-primary/50 text-[10px]">✧</span>
// //             <span className="tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// //               {t('hero.time')}
// //             </span>
// //           </div>
// //           <div className="hidden sm:block w-px h-4 bg-primary/15" />
// //           <div className="flex items-center gap-2">
// //             <span className="text-primary/50 text-[10px]">✧</span>
// //             <span className="tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[11px] text-foreground/70 font-light">
// //               {t('hero.address')}
// //             </span>
// //           </div>
// //         </div>

// //         <div className="animate-fade-up-delay-4 bg-card/30 backdrop-blur-md rounded-2xl px-8 py-4 sm:px-12 sm:py-6 border border-primary/10 inline-block mb-10">
// //           <p className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] mb-2 font-light">
// //             {t('hero.dressCode')}
// //           </p>
// //           <p className="text-primary font-display text-lg sm:text-2xl font-medium tracking-wide italic">
// //             {t('hero.dressCodeVal')}
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;
// import { useState, useEffect } from "react";
// import { useLanguage } from "@/context/LanguageContext";
// import LemonIntro from "./LemonIntro";
// import heroBg from "/hero-bg.jpg";
// import BackgroundMusic from "./BackgroundMusic";

// const HeroSection = () => {
//   const { t } = useLanguage();
//   const [showLemons, setShowLemons] = useState(true);
//   const [startMusic, setStartMusic] = useState(false);

//   useEffect(() => {
//     setStartMusic(true); 

//     const timer = setTimeout(() => {
//       setShowLemons(false);
//     }, 4500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-28 md:pt-36 lg:pt-40">
//       {/* Малку го намаливме pt на десктоп за да има место за се долу */}
      
//       <BackgroundMusic forcePlay={startMusic} />

//       {showLemons && <LemonIntro />}

//       <img
//         src={heroBg}
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover object-[25%_center] sm:object-center scale-100 sm:scale-110 blur-[0.1px]"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

//       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
//         {/* Декоративни линии - помали маргини на десктоп */}
//         <div className="flex items-center justify-center gap-4 mb-3 md:mb-6 animate-fade-up">
//           <div className="w-12 sm:w-20 h-px bg-primary/25" />
//           <span className="text-primary/50 text-xs tracking-widest">✦</span>
//           <div className="w-12 sm:w-20 h-px bg-primary/25" />
//         </div>

//         <p className="text-muted-foreground tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[12px] sm:text-[14px] mb-2 md:mb-4 animate-fade-up font-light">
//           {t('hero.invite')}
//         </p>

//         <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-0 md:mb-1 animate-fade-up-delay-1 leading-none italic">
//           {t('hero.name')}
//         </h1>
//         <p className="font-display text-6xl md:text-8xl lg:text-[9rem] font-semibold text-primary/70 animate-fade-up-delay-1 leading-none mb-1 md:mb-2">
//           {t('hero.age')}
//         </p>
//         <p className="font-display text-lg md:text-2xl text-foreground/60 italic tracking-wider mb-4 md:mb-8 animate-fade-up-delay-2 font-light">
//           {t('hero.celebration')}
//         </p>

//         {/* Опис - малку помал маргин за да се крене Dress Code-от */}
//         <p className="text-[13px] md:text-[15px] text-muted-foreground max-w-md mx-auto mb-6 md:mb-8 animate-fade-up-delay-2 leading-relaxed font-light px-4">
//           {t('hero.description')}
//         </p>

//         {/* Датум и Локација */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8 text-sm animate-fade-up-delay-3 mb-8 md:mb-10">
//           <div className="flex items-center gap-2">
//             <span className="text-primary/50 text-[10px]">✧</span>
//             <span className="tracking-[0.15em] text-[11px] text-foreground/70 font-light italic">
//               {t('hero.date')}
//             </span>
//           </div>
//           <div className="hidden sm:block w-px h-4 bg-primary/15" />
//           <div className="flex items-center gap-2">
//             <span className="text-primary/50 text-[10px]">✧</span>
//             <span className="tracking-[0.15em] text-[11px] text-foreground/70 font-light italic">
//               {t('hero.time')}
//             </span>
//           </div>
//           <div className="hidden sm:block w-px h-4 bg-primary/15" />
//           <div className="flex items-center gap-2">
//             <span className="text-primary/50 text-[10px]">✧</span>
//             <span className="tracking-[0.15em] text-[11px] text-foreground/70 font-light italic text-center">
//               {t('hero.address')}
//             </span>
//           </div>
//         </div>

//         {/* DRESS CODE - сега е „поткренат“ и видлив */}
//         <div className="animate-fade-up-delay-4 bg-card/30 backdrop-blur-md rounded-2xl px-8 py-3 md:px-12 md:py-5 border border-primary/10 inline-block shadow-xl">
//           <p className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] mb-1 font-light">
//             {t('hero.dressCode')}
//           </p>
//           <p className="text-primary font-display text-lg md:text-xl font-medium tracking-wide italic">
//             {t('hero.dressCodeVal')}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LemonIntro from "./LemonIntro";
import heroBg from "/hero-bg.jpg";
import BackgroundMusic from "./BackgroundMusic";

const HeroSection = () => {
  const { t } = useLanguage();
  const [showLemons, setShowLemons] = useState(true);
  const [startMusic, setStartMusic] = useState(false);

  useEffect(() => {
    setStartMusic(true); 

    const timer = setTimeout(() => {
      setShowLemons(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-28 md:pt-32 lg:pt-36">
      {/* Дополнително намален pt на десктоп за да се подигне Dress Code делот */}
      
      <BackgroundMusic forcePlay={startMusic} />

      {showLemons && <LemonIntro />}

      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[25%_center] sm:object-center scale-100 sm:scale-110 blur-[0.1px]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Декоративни елементи со минимални маргини */}
        <div className="flex items-center justify-center gap-4 mb-2 md:mb-4 animate-fade-up">
          <div className="w-12 sm:w-20 h-px bg-primary/25" />
          <span className="text-primary/50 text-xs tracking-widest">✦</span>
          <div className="w-12 sm:w-20 h-px bg-primary/25" />
        </div>

        <p className="text-muted-foreground tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[11px] sm:text-[13px] mb-2 md:mb-3 animate-fade-up font-light">
          {t('hero.invite')}
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-0 animate-fade-up-delay-1 leading-none italic">
          {t('hero.name')}
        </h1>
        <p className="font-display text-6xl md:text-8xl lg:text-[8.5rem] font-semibold text-primary/70 animate-fade-up-delay-1 leading-none mb-1 md:mb-2">
          {t('hero.age')}
        </p>
        <p className="font-display text-lg md:text-2xl text-foreground/60 italic tracking-wider mb-3 md:mb-6 animate-fade-up-delay-2 font-light">
          {t('hero.celebration')}
        </p>

        {/* Опис - затегнат простор */}
        <p className="text-[12px] md:text-[14px] text-muted-foreground max-w-md mx-auto mb-5 md:mb-7 animate-fade-up-delay-2 leading-relaxed font-light px-4">
          {t('hero.description')}
        </p>

        {/* Датум, Време, Локација */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8 text-sm animate-fade-up-delay-3 mb-6 md:mb-8">
          <div className="flex items-center gap-2">
            <span className="text-primary/50 text-[10px]">✧</span>
            <span className="tracking-[0.15em] text-[11px] text-foreground/70 font-light italic">
              {t('hero.date')}
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary/15" />
          <div className="flex items-center gap-2">
            <span className="text-primary/50 text-[10px]">✧</span>
            <span className="tracking-[0.15em] text-[11px] text-foreground/70 font-light italic">
              {t('hero.time')}
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary/15" />
          <div className="flex items-center gap-2">
            <span className="text-primary/50 text-[10px]">✧</span>
            <span className="tracking-[0.15em] text-[11px] text-foreground/70 font-light italic text-center">
              {t('hero.address')}
            </span>
          </div>
        </div>

        {/* DRESS CODE - сега е целосно видлив на PC */}
        <div className="animate-fade-up-delay-4 bg-card/30 backdrop-blur-md rounded-2xl px-8 py-3 md:px-12 md:py-4 border border-primary/10 inline-block shadow-2xl">
          <p className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] mb-1 font-light">
            {t('hero.dressCode')}
          </p>
          <p className="text-primary font-display text-lg md:text-xl font-medium tracking-wide italic">
            {t('hero.dressCodeVal')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;