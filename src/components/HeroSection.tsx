
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