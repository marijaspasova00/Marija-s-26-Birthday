// // // import { useLanguage } from "@/context/LanguageContext";

// // // const Navbar = () => {
// // //   const { lang, setLang, t } = useLanguage();

// // //   return (
// // //     <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-4xl">
// // //       <div className="bg-background/40 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
// // //         <span className="font-display text-primary text-xl italic">M.</span>

// // //         <div className="flex items-center gap-6">
// // //           <a href="#activities" className="text-[10px] uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors">
// // //             {t('nav.activities')}
// // //           </a>
// // //           <button 
// // //             onClick={() => setLang(lang === "mk" ? "en" : "mk")}
// // //             className="bg-primary/10 border border-primary/20 rounded-full px-4 py-1 text-[10px] text-primary hover:bg-primary/20 transition-all font-medium"
// // //           >
// // //             {lang === "mk" ? "ENGLISH" : "МАКЕДОНСКИ"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;
// // import { useState, useEffect } from "react";
// // import { useLanguage } from "@/context/LanguageContext";
// // import { Menu, X, Sparkles } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const Navbar = () => {
// //   const { lang, setLang, t } = useLanguage();
// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   // Скрол ефект за промена на позадината
// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 50);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const navLinks = [
// //     { name: t('nav.activities'), href: "#activities" },
// //     { name: t('nav.rsvp') || "RSVP", href: "#rsvp" },
// //     { name: t('nav.location') || "Location", href: "#location" },
// //   ];

// //   return (
// //     <>
// //       <nav
// //         className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[92%] max-w-5xl transition-all duration-500 ${
// //           scrolled ? "top-4" : "top-6"
// //         }`}
// //       >
// //         <div className={`relative overflow-hidden rounded-full border border-white/10 px-6 py-3 transition-all duration-500 ${
// //           scrolled 
// //             ? "bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
// //             : "bg-black/20 backdrop-blur-md"
// //         }`}>
// //           <div className="flex items-center justify-between">
// //             {/* LOGO */}
// //             <a href="#hero" className="flex items-center gap-2 group">
// //               <Sparkles className="w-5 h-5 text-primary animate-pulse" />
// //               <span className="font-display text-2xl italic font-light tracking-tighter text-foreground group-hover:text-primary transition-colors">M.</span>
// //             </a>

// //             {/* Desktop Menu (PC) */}
// //             <ul className="hidden md:flex items-center gap-10">
// //               {navLinks.map((link) => (
// //                 <li key={link.name}>
// //                   <a 
// //                     href={link.href} 
// //                     className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 hover:text-primary transition-all font-light"
// //                   >
// //                     {link.name}
// //                   </a>
// //                 </li>
// //               ))}
              
// //               {/* Language Switcher PC */}
// //               <li className="flex items-center gap-3 border-l border-white/10 pl-6 ml-2">
// //                 <button 
// //                   onClick={() => setLang('en')} 
// //                   className={`text-[10px] font-bold tracking-widest transition-all ${lang === 'en' ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground'}`}
// //                 >
// //                   EN
// //                 </button>
// //                 <span className="text-white/10 text-[10px]">/</span>
// //                 <button 
// //                   onClick={() => setLang('mk')} 
// //                   className={`text-[10px] font-bold tracking-widest transition-all ${lang === 'mk' ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground'}`}
// //                 >
// //                   MK
// //                 </button>
// //               </li>
// //             </ul>

// //             {/* Mobile Toggle */}
// //             <button className="md:hidden text-primary p-1" onClick={() => setMobileMenuOpen(true)}>
// //               <Menu className="w-6 h-6" />
// //             </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Mobile Sidebar Menu */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <>
// //             {/* Backdrop */}
// //             <motion.div 
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1100] md:hidden" 
// //               onClick={() => setMobileMenuOpen(false)} 
// //             />

// //             {/* Drawer */}
// //             <motion.div 
// //               initial={{ x: "100%" }}
// //               animate={{ x: 0 }}
// //               exit={{ x: "100%" }}
// //               transition={{ type: "spring", damping: 25, stiffness: 200 }}
// //               className="fixed inset-y-0 right-0 w-[280px] z-[1200] bg-background/95 backdrop-blur-2xl border-l border-white/10 md:hidden p-10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
// //             >
// //               <button className="self-end text-primary mb-12" onClick={() => setMobileMenuOpen(false)}>
// //                 <X className="w-8 h-8" />
// //               </button>

// //               <ul className="flex flex-col gap-8">
// //                 {navLinks.map((link, i) => (
// //                   <motion.li 
// //                     initial={{ opacity: 0, x: 20 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{ delay: i * 0.1 }}
// //                     key={link.name}
// //                   >
// //                     <a 
// //                       href={link.href} 
// //                       onClick={() => setMobileMenuOpen(false)} 
// //                       className="text-foreground/80 text-2xl font-display italic tracking-widest block border-b border-white/5 pb-4 hover:text-primary transition-colors"
// //                     >
// //                       {link.name}
// //                     </a>
// //                   </motion.li>
// //                 ))}
// //               </ul>

// //               {/* Language Switcher Mobile */}
// //               <div className="mt-auto flex gap-6 pt-10 border-t border-white/5">
// //                 <button onClick={() => { setLang('en'); setMobileMenuOpen(false); }} className={`text-sm font-bold tracking-[0.2em] ${lang === 'en' ? 'text-primary' : 'text-foreground/40'}`}>ENGLISH</button>
// //                 <button onClick={() => { setLang('mk'); setMobileMenuOpen(false); }} className={`text-sm font-bold tracking-[0.2em] ${lang === 'mk' ? 'text-primary' : 'text-foreground/40'}`}>МАКЕДОНСКИ</button>
// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default Navbar;

// // import { useState, useEffect } from "react";
// // import { useLanguage } from "@/context/LanguageContext";
// // import { Menu, X, Sparkles } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const Navbar = () => {
// //   const { lang, setLang, t } = useLanguage();
// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   // Следење на скролање за менување на стилот на лентата
// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 50);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Линкови поврзани со ID-ата во Index.tsx
// //   const navLinks = [
// //     { name: t('nav.activities'), href: "#activities" },
// //     { name: t('Think'), href: "#think" },
// //     { name: t('nav.location'), href: "#location" },
// //   ];

// //   return (
// //     <>
// //       <nav 
// //         className={`fixed left-1/2 -translate-x-1/2 z-[1000] w-[92%] max-w-5xl transition-all duration-500 ${
// //           scrolled ? "top-4" : "top-6"
// //         }`}
// //       >
// //         <div className={`relative overflow-hidden rounded-full border border-white/10 px-4 py-2 md:px-6 md:py-3 transition-all duration-500 ${
// //           scrolled 
// //             ? "bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
// //             : "bg-black/20 backdrop-blur-md"
// //         }`}>
// //           <div className="flex items-center justify-between">
            
// //             {/* LOGO */}
// //             <a href="#hero" className="flex items-center gap-2 group">
// //               <Sparkles className="w-5 h-5 text-primary animate-pulse" />
// //               <span className="font-display text-2xl italic font-light tracking-tighter text-foreground group-hover:text-primary transition-colors">
// //                 M.
// //               </span>
// //             </a>

// //             {/* DESKTOP MENU (PC) */}
// //             <ul className="hidden md:flex items-center gap-10">
// //               {navLinks.map((link) => (
// //                 <li key={link.name}>
// //                   <a 
// //                     href={link.href} 
// //                     className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 hover:text-primary transition-all font-light"
// //                   >
// //                     {link.name}
// //                   </a>
// //                 </li>
// //               ))}
              
// //               {/* Language Switcher PC */}
// //               <li className="flex items-center gap-3 border-l border-white/10 pl-6 ml-2">
// //                 <button 
// //                   onClick={() => setLang('en')} 
// //                   className={`text-[10px] font-bold tracking-widest transition-all ${
// //                     lang === 'en' ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground'
// //                   }`}
// //                 >
// //                   EN
// //                 </button>
// //                 <span className="text-white/10 text-[10px]">/</span>
// //                 <button 
// //                   onClick={() => setLang('mk')} 
// //                   className={`text-[10px] font-bold tracking-widest transition-all ${
// //                     lang === 'mk' ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground'
// //                   }`}
// //                 >
// //                   MK
// //                 </button>
// //               </li>
// //             </ul>

// //             {/* MOBILE CONTROLS */}
// //             <div className="md:hidden flex items-center gap-4">
// //               <button 
// //                 onClick={() => setLang(lang === 'mk' ? 'en' : 'mk')}
// //                 className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
// //               >
// //                 {lang === 'mk' ? 'EN' : 'MK'}
// //               </button>
// //               <button 
// //                 className="text-primary p-1 active:scale-90 transition-transform" 
// //                 onClick={() => setMobileMenuOpen(true)}
// //               >
// //                 <Menu className="w-6 h-6" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* MOBILE SIDEBAR (BURGER MENU) */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <>
// //             {/* Затемнета позадина */}
// //             <motion.div 
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1100] md:hidden" 
// //               onClick={() => setMobileMenuOpen(false)} 
// //             />

// //             {/* Странично мени */}
// //             <motion.div 
// //               initial={{ x: "100%" }}
// //               animate={{ x: 0 }}
// //               exit={{ x: "100%" }}
// //               transition={{ type: "spring", damping: 25, stiffness: 200 }}
// //               className="fixed inset-y-0 right-0 w-[280px] z-[1200] bg-background/95 backdrop-blur-2xl border-l border-white/10 md:hidden p-10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
// //             >
// //               <button 
// //                 className="self-end text-primary mb-12 active:scale-90 transition-transform" 
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 <X className="w-8 h-8" />
// //               </button>

// //               <ul className="flex flex-col gap-8">
// //                 {navLinks.map((link, i) => (
// //                   <motion.li 
// //                     initial={{ opacity: 0, x: 20 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{ delay: i * 0.1 }}
// //                     key={link.name}
// //                   >
// //                     <a 
// //                       href={link.href} 
// //                       onClick={() => setMobileMenuOpen(false)} 
// //                       className="text-foreground/80 text-2xl font-display italic tracking-widest block border-b border-white/5 pb-4 hover:text-primary transition-colors"
// //                     >
// //                       {link.name}
// //                     </a>
// //                   </motion.li>
// //                 ))}
// //               </ul>

// //               <div className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-4">
// //                 <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">Select Language</p>
// //                 <div className="flex gap-6">
// //                   <button 
// //                     onClick={() => { setLang('en'); setMobileMenuOpen(false); }} 
// //                     className={`text-sm font-bold tracking-[0.2em] ${lang === 'en' ? 'text-primary' : 'text-foreground/40'}`}
// //                   >
// //                     EN
// //                   </button>
// //                   <button 
// //                     onClick={() => { setLang('mk'); setMobileMenuOpen(false); }} 
// //                     className={`text-sm font-bold tracking-[0.2em] ${lang === 'mk' ? 'text-primary' : 'text-foreground/40'}`}
// //                   >
// //                     MK
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default Navbar;
// import { useState, useEffect } from "react";
// import { useLanguage } from "@/context/LanguageContext";
// import { Menu, X, Sparkles } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const { lang, setLang, t } = useLanguage();
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Следење на скролање за менување на стилот на лентата
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Линкови поврзани со ID-ата во Index.tsx
//   const navLinks = [
//     { name: t('nav.activities'), href: "#activities" },
//     { name: t('nav.think'), href: "#think" }, // ПОПРАВЕНО: t('nav.think') наместо t('Think')
//     { name: t('nav.location'), href: "#location" },
//   ];

//   return (
//     <>
//       <nav 
//         className={`fixed left-1/2 -translate-x-1/2 z-[1000] w-[92%] max-w-5xl transition-all duration-500 ${
//           scrolled ? "top-4" : "top-6"
//         }`}
//       >
//         <div className={`relative overflow-hidden rounded-full border border-white/10 px-4 py-2 md:px-6 md:py-3 transition-all duration-500 ${
//           scrolled 
//             ? "bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
//             : "bg-black/20 backdrop-blur-md"
//         }`}>
//           <div className="flex items-center justify-between">
            
//             {/* LOGO */}
//             <a href="#hero" className="flex items-center gap-2 group">
//               <Sparkles className="w-5 h-5 text-primary animate-pulse" />
//               <span className="font-display text-2xl italic font-light tracking-tighter text-foreground group-hover:text-primary transition-colors">
//                 M.
//               </span>
//             </a>

//             {/* DESKTOP MENU (PC) */}
//             <ul className="hidden md:flex items-center gap-10">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <a 
//                     href={link.href} 
//                     className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 hover:text-primary transition-all font-light"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
              
//               {/* Language Switcher PC */}
//               <li className="flex items-center gap-3 border-l border-white/10 pl-6 ml-2">
//                 <button 
//                   onClick={() => setLang('en')} 
//                   className={`text-[10px] font-bold tracking-widest transition-all ${
//                     lang === 'en' ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground'
//                   }`}
//                 >
//                   EN
//                 </button>
//                 <span className="text-white/10 text-[10px]">/</span>
//                 <button 
//                   onClick={() => setLang('mk')} 
//                   className={`text-[10px] font-bold tracking-widest transition-all ${
//                     lang === 'mk' ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground'
//                   }`}
//                 >
//                   MK
//                 </button>
//               </li>
//             </ul>

//             {/* MOBILE CONTROLS */}
//             <div className="md:hidden flex items-center gap-4">
//               <button 
//                 onClick={() => setLang(lang === 'mk' ? 'en' : 'mk')}
//                 className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
//               >
//                 {lang === 'mk' ? 'EN' : 'MK'}
//               </button>
//               <button 
//                 className="text-primary p-1 active:scale-90 transition-transform" 
//                 onClick={() => setMobileMenuOpen(true)}
//               >
//                 <Menu className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* MOBILE SIDEBAR (BURGER MENU) */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <>
//             {/* Затемнета позадина */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1100] md:hidden" 
//               onClick={() => setMobileMenuOpen(false)} 
//             />

//             {/* Странично мени */}
//             <motion.div 
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed inset-y-0 right-0 w-[280px] z-[1200] bg-background/95 backdrop-blur-2xl border-l border-white/10 md:hidden p-10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
//             >
//               <button 
//                 className="self-end text-primary mb-12 active:scale-90 transition-transform" 
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <X className="w-8 h-8" />
//               </button>

//               <ul className="flex flex-col gap-8">
//                 {navLinks.map((link, i) => (
//                   <motion.li 
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: i * 0.1 }}
//                     key={link.name}
//                   >
//                     <a 
//                       href={link.href} 
//                       onClick={() => setMobileMenuOpen(false)} 
//                       className="text-foreground/80 text-2xl font-display italic tracking-widest block border-b border-white/5 pb-4 hover:text-primary transition-colors"
//                     >
//                       {link.name}
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>

//               <div className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-4">
//                 <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">
//                   {t('intro.select')} {/* ПОПРАВЕНО: Превод за Select Language */}
//                 </p>
//                 <div className="flex gap-6">
//                   <button 
//                     onClick={() => { setLang('en'); setMobileMenuOpen(false); }} 
//                     className={`text-sm font-bold tracking-[0.2em] ${lang === 'en' ? 'text-primary' : 'text-foreground/40'}`}
//                   >
//                     EN
//                   </button>
//                   <button 
//                     onClick={() => { setLang('mk'); setMobileMenuOpen(false); }} 
//                     className={`text-sm font-bold tracking-[0.2em] ${lang === 'mk' ? 'text-primary' : 'text-foreground/40'}`}
//                   >
//                     MK
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Следење на скролање за менување на стилот на лентата
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Линкови поврзани со ID-ата во Index.tsx
  const navLinks = [
    { name: t('nav.activities'), href: "#activities" },
    { name: t('nav.think'), href: "#think" },
    { name: t('nav.location'), href: "#location" },
  ];

  return (
    <>
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-[1000] w-[94%] max-w-5xl transition-all duration-500 ${
          scrolled ? "top-2" : "top-3"
        }`}
      >
        <div className={`relative overflow-hidden rounded-full border border-white/10 px-4 py-1.5 md:px-6 md:py-3 transition-all duration-500 ${
          scrolled 
            ? "bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
            : "bg-black/20 backdrop-blur-md"
        }`}>
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <a href="#hero" className="flex items-center gap-2 group">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="font-display text-xl md:text-2xl italic font-light tracking-tighter text-foreground group-hover:text-primary transition-colors">
                M.
              </span>
            </a>

            {/* DESKTOP MENU (PC) */}
            <ul className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 hover:text-primary transition-all font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              
              {/* Language Switcher PC */}
              <li className="flex items-center gap-3 border-l border-white/10 pl-6 ml-2">
                <button 
                  onClick={() => setLang('en')} 
                  className={`text-[10px] font-bold tracking-widest transition-all ${
                    lang === 'en' ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground'
                  }`}
                >
                  EN
                </button>
                <span className="text-white/10 text-[10px]">/</span>
                <button 
                  onClick={() => setLang('mk')} 
                  className={`text-[10px] font-bold tracking-widest transition-all ${
                    lang === 'mk' ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground'
                  }`}
                >
                  MK
                </button>
              </li>
            </ul>

            {/* MOBILE CONTROLS */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setLang(lang === 'mk' ? 'en' : 'mk')}
                className="text-[9px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20"
              >
                {lang === 'mk' ? 'EN' : 'MK'}
              </button>
              <button 
                className="text-primary p-1 active:scale-90 transition-transform" 
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR (BURGER MENU) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1100] md:hidden" 
              onClick={() => setMobileMenuOpen(false)} 
            />

            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[280px] z-[1200] bg-background/95 backdrop-blur-2xl border-l border-white/10 md:hidden p-10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
            >
              <button 
                className="self-end text-primary mb-12 active:scale-90 transition-transform" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>

              <ul className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                  >
                    <a 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="text-foreground/80 text-2xl font-display italic tracking-widest block border-b border-white/5 pb-4 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-4">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">
                  {t('intro.select')}
                </p>
                <div className="flex gap-6">
                  <button 
                    onClick={() => { setLang('en'); setMobileMenuOpen(false); }} 
                    className={`text-sm font-bold tracking-[0.2em] ${lang === 'en' ? 'text-primary' : 'text-foreground/40'}`}
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => { setLang('mk'); setMobileMenuOpen(false); }} 
                    className={`text-sm font-bold tracking-[0.2em] ${lang === 'mk' ? 'text-primary' : 'text-foreground/40'}`}
                  >
                    MK
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;