// // import { useState } from "react";
// // import photo1 from "@/assets/photo1.jpg"; // Главната слика каде си цела
// // import photo5 from "@/assets/photo5.jpg"; // Сликата за страните (merge)

// // interface IntroOverlayProps {
// //   onEnter: () => void;
// // }

// // const IntroOverlay = ({ onEnter }: IntroOverlayProps) => {
// //   const [isExiting, setIsExiting] = useState(false);

// //   const handleStart = () => {
// //     setIsExiting(true);
// //     setTimeout(onEnter, 600);
// //   };

// //   return (
// //     <div 
// //       className={`fixed inset-0 z-[100000] flex items-center justify-center bg-black transition-all duration-700 ease-in-out ${
// //         isExiting ? 'opacity-0 scale-105' : 'opacity-100'
// //       }`}
// //       onClick={handleStart}
// //     >
// //       {/* 1. ПОЗАДИНСКИ СЛОЈ (Photo 5) - Ова е "merge" ефектот од страните */}
// //       <div className="absolute inset-0 overflow-hidden">
// //         <img
// //           src={photo5}
// //           alt=""
// //           className="w-full h-full object-cover opacity-30 blur-[20px] scale-110"
// //         />
// //         {/* Темна маска за да не биде пресветло */}
// //         <div className="absolute inset-0 bg-black/50" />
// //       </div>

// //       {/* 2. ГЛАВНА СЛИКА (Photo 1) - Поставена во центар за да се гледаш цела */}
// //       <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
// //         <img
// //           src={photo1}
// //           alt="Marija"
// //           className="h-full w-auto max-w-none object-contain opacity-60 blur-[4px] sm:blur-[6px]"
// //           style={{
// //             maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
// //             WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
// //           }}
// //         />
// //       </div>

// //       {/* ЦЕНТРАЛЕН ТЕКСТ И ИКОНА */}
// //       <div className="relative z-10 flex flex-col items-center gap-8 cursor-pointer group">
// //         <div className="relative">
// //           <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-700 group-hover:border-primary group-hover:shadow-[0_0_50px_rgba(var(--primary),0.2)] bg-black/20 backdrop-blur-sm">
// //             <span className="text-primary text-3xl animate-pulse font-light">✦</span>
// //           </div>
// //           <div className="absolute inset-[-10px] border border-dashed border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
// //         </div>
        
// //         <div className="text-center space-y-3">
// //           <h2 className="font-display text-3xl md:text-4xl tracking-[0.5em] uppercase text-white/90 mb-1 font-light italic drop-shadow-lg">
// //             Marija's 26th
// //           </h2>
// //           <div className="h-px w-16 bg-primary/40 mx-auto" />
// //           <p className="text-primary/70 tracking-[0.4em] text-[12px] uppercase group-hover:text-primary transition-colors duration-300 font-light">
// //             Click to open invitation
// //           </p>
// //         </div>
// //       </div>

// //       {/* ДЕТАЛИ ВО АГЛИТЕ */}
// //       <div className="absolute top-12 left-12 w-16 h-16 border-t border-l border-primary/20 opacity-40" />
// //       <div className="absolute bottom-12 right-12 w-16 h-16 border-b border-r border-primary/20 opacity-40" />
// //     </div>
// //   );
// // };

// // export default IntroOverlay;
// import { useState } from "react";
// import heroBg from "@/assets/photo1.jpg";

// interface IntroOverlayProps {
//   onEnter: () => void;
// }

// const IntroOverlay = ({ onEnter }: IntroOverlayProps) => {
//   const [isExiting, setIsExiting] = useState(false);

//   const handleStart = () => {
//     setIsExiting(true);
//     // Мала пауза за анимацијата на исчезнување пред да се тргне скроз
//     setTimeout(onEnter, 500);
//   };

//   return (
//     <div 
//       className={`fixed inset-0 z-[100000] flex items-center justify-center bg-background transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
//       onClick={handleStart}
//     >
//       {/* Позадина со твојата Hero слика, но многу потемна и заматена */}
//       <img
//         src={heroBg}
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[0.1px] scale-110"
//       />
      
//       <div className="relative z-10 flex flex-col items-center gap-6 cursor-pointer group">
//         <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:scale-110 shadow-[0_0_30px_rgba(var(--primary),0.1)]">
//           <span className="text-primary text-2xl animate-pulse">✦</span>
//         </div>
        
//         <div className="text-center">
//           <h2 className="font-display text-xl tracking-[0.4em] uppercase text-primary/80 mb-2 font-light">
//             Marija's 26th
//           </h2>
//           <p className="text-muted-foreground tracking-[0.2em] text-[10px] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
//             Click to Open Invitation
//           </p>
//         </div>
//       </div>

//       {/* Елегантни линии во аглите */}
//       <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-primary/20" />
//       <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-primary/20" />
//     </div>
//   );
// };

// export default IntroOverlay;
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext"; // ДОДАДЕНО
import heroBg from "/photo1.jpg";

interface IntroOverlayProps {
  onEnter: () => void;
}

const IntroOverlay = ({ onEnter }: IntroOverlayProps) => {
  const { t, lang, setLang } = useLanguage(); // Иницијализација на јазик
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(onEnter, 500);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100000] flex items-center justify-center bg-background transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleStart}
    >
      {/* КОПЧЕ ЗА ЈАЗИК - Поставено дискретно горе десно */}
      <div className="absolute top-10 right-10 z-[100001]" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={() => setLang(lang === 'en' ? 'mk' : 'en')}
          className="px-4 py-2 rounded-full border border-primary/20 bg-black/20 backdrop-blur-md text-[10px] tracking-[0.2em] text-primary hover:bg-primary/10 transition-all uppercase font-light"
        >
          {lang === 'en' ? 'MK' : 'EN'}
        </button>
      </div>

      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[0.1px] scale-110"
      />
      
      <div className="relative z-10 flex flex-col items-center gap-6 cursor-pointer group">
        <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:scale-110 shadow-[0_0_30px_rgba(var(--primary),0.1)]">
          <span className="text-primary text-2xl animate-pulse">✦</span>
        </div>
        
        <div className="text-center">
          <h2 className="font-display text-xl tracking-[0.4em] uppercase text-primary/80 mb-2 font-light">
            {t('intro.title')}
          </h2>
          <p className="text-muted-foreground tracking-[0.2em] text-[10px] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
            {t('intro.click')}
          </p>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-primary/20" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-primary/20" />
    </div>
  );
};

export default IntroOverlay;