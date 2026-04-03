

// // // // // // import React, { createContext, useContext, useState } from "react";

// // // // // // type Language = "en" | "mk";

// // // // // // interface LanguageContextType {
// // // // // //   lang: Language;
// // // // // //   setLang: (lang: Language) => void;
// // // // // //   t: (key: string) => any;
// // // // // // }

// // // // // // const translations = {
// // // // // //   en: {
// // // // // //     nav: { 
// // // // // //       activities: "Activities", 
// // // // // //       think: "Think", 
// // // // // //       location: "Location",
// // // // // //       rsvp: "RSVP" 
// // // // // //     },
// // // // // //     intro: { title: "Marija's 26th", click: "Click to enter experience" },
// // // // // //     hero: { 
// // // // // //       invite: "You are cordially invited to", 
// // // // // //       celebration: "Birthday Celebration",
// // // // // //       description: "Come dressed as your version of me — how you see me, imagine me, or even my future self. Be creative, funny, dramatic or iconic ✨",
// // // // // //       dressCode: "Dress Code",
// // // // // //       dressCodeVal: "Different Versions of Me"
// // // // // //     },
// // // // // //     activities: {
// // // // // //       title: "Activities",
// // // // // //       subtitle: "Get creative",
// // // // // //       cards: [
// // // // // //         { title: "Draw Me", desc: "Draw how you imagine me 🎨" },
// // // // // //         { title: "3 Positives / 3 Negatives", desc: "Tell me 3 things you love about me and 3 things I should improve 😏" },
// // // // // //         { title: "Smartest vs Dumbest", desc: "What's the smartest thing I've ever done vs the dumbest? 😂" },
// // // // // //         { title: "Future Me", desc: "How do you see me in the future? 🔮" },
// // // // // //         { title: "Confession Box", desc: "Tell me something you’ve never told me before 🤫" },
// // // // // //         { title: "Advice for Me", desc: "Give me advice about love, career and life 💌" }
// // // // // //       ]
// // // // // //     },
// // // // // //     wwmd: {
// // // // // //       title: "What would Marija do?",
// // // // // //       subtitle: "Guess my choice",
// // // // // //       questions: [
// // // // // //         { q: "Pizza or Pasta?", a: "Pasta 🍝" },
// // // // // //         { q: "Mountain or Beach?", a: "Beach 🏖️" },
// // // // // //         { q: "All-nighter or 5 AM shift?", a: "All-nighter 🌙" }
// // // // // //       ]
// // // // // //     }
// // // // // //   },
// // // // // //   mk: {
// // // // // //     nav: { 
// // // // // //       activities: "Активности", 
// // // // // //       think: "Размисли", 
// // // // // //       location: "Локација",
// // // // // //       rsvp: "RSVP" 
// // // // // //     },
// // // // // //     intro: { title: "Марија 26", click: "Кликни за влез" },
// // // // // //     hero: { 
// // // // // //       invite: "Срдечно сте поканети на", 
// // // // // //       celebration: "Роденденска прослава",
// // // // // //       description: "Дојдете облечени како ваша верзија од мене — како ме гледате, замислувате или моето идно јас. Бидете креативни, смешни или иконични ✨",
// // // // // //       dressCode: "Dress Code",
// // // // // //       dressCodeVal: "Различни верзии од мене"
// // // // // //     },
// // // // // //     activities: {
// // // // // //       title: "Активности",
// // // // // //       subtitle: "Биди креативен",
// // // // // //       cards: [
// // // // // //         { title: "Нацртај ме", desc: "Нацртај ме како што ме замислуваш 🎨" },
// // // // // //         { title: "3 Позитивни / 3 Негативни", desc: "Кажи ми 3 работи што ги сакаш кај мене и 3 што треба да ги поправам 😏" },
// // // // // //         { title: "Најпаметно vs Најглупаво", desc: "Која е најпаметната работа што сум ја направила, а која најглупавата? 😂" },
// // // // // //         { title: "Идната јас", desc: "Како ме гледаш во иднина? 🔮" },
// // // // // //         { title: "Исповедална", desc: "Кажи ми нешто што никогаш не си ми кажал 🤫" },
// // // // // //         { title: "Совет за мене", desc: "Дај ми совет за љубовта, кариерата и животот 💌" }
// // // // // //       ]
// // // // // //     },
// // // // // //     wwmd: {
// // // // // //       title: "What would Marija do?",
// // // // // //       subtitle: "Погоди го мојот избор",
// // // // // //       questions: [
// // // // // //         { q: "Дали би избрала пица или паста?", a: "Паста 🍝" },
// // // // // //         { q: "Дали би заминала на планина или плажа?", a: "Плажа 🏖️" },
// // // // // //         { q: "Дали би работела цела ноќ или би се будела во 5 наутро?", a: "Цела ноќ 🌙" }
// // // // // //       ]
// // // // // //     }
// // // // // //   }
// // // // // // };

// // // // // // const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// // // // // // export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
// // // // // //   // Поставено на "en" за примарен јазик
// // // // // //   const [lang, setLang] = useState<Language>("en");

// // // // // //   const t = (path: string) => {
// // // // // //     return path.split('.').reduce((obj, key) => obj?.[key], translations[lang] as any) || path;
// // // // // //   };

// // // // // //   return (
// // // // // //     <LanguageContext.Provider value={{ lang, setLang, t }}>
// // // // // //       {children}
// // // // // //     </LanguageContext.Provider>
// // // // // //   );
// // // // // // };

// // // // // // export const useLanguage = () => {
// // // // // //   const context = useContext(LanguageContext);
// // // // // //   if (!context) throw new Error("useLanguage must be used within LanguageProvider");
// // // // // //   return context;
// // // // // // };
// // // // // import React, { createContext, useContext, useState } from "react";

// // // // // type Language = "en" | "mk";

// // // // // interface LanguageContextType {
// // // // //   lang: Language;
// // // // //   setLang: (lang: Language) => void;
// // // // //   t: (key: string) => any;
// // // // // }

// // // // // const translations = {
// // // // //   en: {
// // // // //     nav: { 
// // // // //       activities: "Activities", 
// // // // //       think: "Think", 
// // // // //       location: "Location",
// // // // //       rsvp: "RSVP" 
// // // // //     },
// // // // //     intro: { title: "Marija's 26th", click: "Click to enter experience" },
// // // // //     hero: { 
// // // // //       invite: "You are cordially invited to",
// // // // //       name: "Marija's",
// // // // //       age: "26th",
// // // // //       celebration: "Birthday Celebration",
// // // // //       description: "Come dressed as your version of me — how you see me, imagine me, or even my future self. Be creative, funny, dramatic or iconic ✨",
// // // // //       date: "April 18",
// // // // //       time: "8:00 PM",
// // // // //       address: "Kata Pockova br.11",
// // // // //       dressCode: "Dress Code",
// // // // //       dressCodeVal: "Different Versions of Me"
// // // // //     },
// // // // //     wwmd: {
// // // // //       title: "What Would Marija Do?",
// // // // //       subtitle: "Guess what I would do in these situations 💡",
// // // // //       categories: {
// // // // //         love: "Love & Drama",
// // // // //         girl: "Girl Life",
// // // // //         career: "Life & Career"
// // // // //       }
// // // // //     }
// // // // //   },
// // // // //   mk: {
// // // // //     nav: { 
// // // // //       activities: "Активности", 
// // // // //       think: "Размисли", 
// // // // //       location: "Локација",
// // // // //       rsvp: "RSVP" 
// // // // //     },
// // // // //     intro: { title: "Марија 26", click: "Кликни за влез" },
// // // // //     hero: { 
// // // // //       invite: "Срдечно сте поканети на",
// // // // //       name: "Марија",
// // // // //       age: "26-ти",
// // // // //       celebration: "Роденденска прослава",
// // // // //       description: "Дојдете облечени како ваша верзија од мене — како ме гледате, замислувате или моето идно јас. Бидете креативни, смешни или иконични ✨",
// // // // //       date: "18 Април",
// // // // //       time: "20:00 часот",
// // // // //       address: "Ката Поцкова бр.11",
// // // // //       dressCode: "Dress Code",
// // // // //       dressCodeVal: "Различни верзии од мене"
// // // // //     },
// // // // //     wwmd: {
// // // // //       title: "Што би правела Марија?",
// // // // //       subtitle: "Погоди што би направила во овие ситуации 💡",
// // // // //       categories: {
// // // // //         love: "Љубов и Драма",
// // // // //         girl: "Girl Life",
// // // // //         career: "Живот и Кариера"
// // // // //       }
// // // // //     }
// // // // //   }
// // // // // };

// // // // // const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// // // // // export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
// // // // //   const [lang, setLang] = useState<Language>("en");

// // // // //   const t = (path: string) => {
// // // // //     const value = path.split('.').reduce((obj, key) => obj?.[key], translations[lang] as any);
// // // // //     return value || path;
// // // // //   };

// // // // //   return (
// // // // //     <LanguageContext.Provider value={{ lang, setLang, t }}>
// // // // //       {children}
// // // // //     </LanguageContext.Provider>
// // // // //   );
// // // // // };

// // // // // export const useLanguage = () => {
// // // // //   const context = useContext(LanguageContext);
// // // // //   if (!context) throw new Error("useLanguage must be used within LanguageProvider");
// // // // //   return context;
// // // // // };
// // // // import React, { createContext, useContext, useState } from "react";

// // // // type Language = "en" | "mk";

// // // // interface LanguageContextType {
// // // //   lang: Language;
// // // //   setLang: (lang: Language) => void;
// // // //   t: (key: string) => any;
// // // // }

// // // // const translations = {
// // // //   en: {
// // // //     nav: { 
// // // //       activities: "Activities", 
// // // //       think: "Think", 
// // // //       location: "Location",
// // // //       rsvp: "RSVP" 
// // // //     },
// // // //     hero: { 
// // // //       invite: "You are cordially invited to",
// // // //       name: "Marija's",
// // // //       age: "26th",
// // // //       celebration: "Birthday Celebration",
// // // //       description: "Come dressed as your version of me — how you see me, imagine me, or even my future self. Be creative, funny, dramatic or iconic ✨",
// // // //       date: "April 18",
// // // //       time: "8:00 PM",
// // // //       address: "Kata Pockova br.11",
// // // //       dressCode: "Dress Code",
// // // //       dressCodeVal: "Different Versions of Me"
// // // //     },
// // // //     activities: {
// // // //       title: "Activities",
// // // //       subtitle: "Get creative",
// // // //       cards: [
// // // //         { title: "Draw Me", desc: "Draw how you imagine me 🎨" },
// // // //         { title: "3 Positives / 3 Negatives", desc: "Tell me 3 things you love about me and 3 things I should improve 😏" },
// // // //         { title: "Smartest vs Dumbest", desc: "What's the smartest thing I've ever done vs the dumbest? 😂" },
// // // //         { title: "Future Me", desc: "How do you see me in the future? 🔮" },
// // // //         { title: "Confession Box", desc: "Tell me something you’ve never told me before 🤫" },
// // // //         { title: "Advice for Me", desc: "Give me advice about love, career and life 💌" }
// // // //       ]
// // // //     },
// // // //     wwmd: {
// // // //       title: "What Would Marija Do?",
// // // //       subtitle: "Guess what I would do in these situations 💡",
// // // //       categories: {
// // // //         love: "Love & Drama",
// // // //         girl: "Girl Life",
// // // //         career: "Life & Career"
// // // //       }
// // // //     }
// // // //   },
// // // //   mk: {
// // // //     nav: { 
// // // //       activities: "Активности", 
// // // //       think: "Размисли", 
// // // //       location: "Локација",
// // // //       rsvp: "RSVP" 
// // // //     },
// // // //     hero: { 
// // // //       invite: "Срдечно сте поканети на",
// // // //       name: "Марија",
// // // //       age: "26-ти",
// // // //       celebration: "Роденденска прослава",
// // // //       description: "Дојдете облечени како ваша верзија од мене — како ме гледате, замислувате или моето идно јас. Бидете креативни, смешни или иконични ✨",
// // // //       date: "18 Април",
// // // //       time: "20:00 часот",
// // // //       address: "Ката Поцкова бр.11",
// // // //       dressCode: "Dress Code",
// // // //       dressCodeVal: "Различни верзии од мене"
// // // //     },
// // // //     activities: {
// // // //       title: "Активности",
// // // //       subtitle: "Биди креативен",
// // // //       cards: [
// // // //         { title: "Нацртај ме", desc: "Нацртај ме како што ме замислуваш 🎨" },
// // // //         { title: "3 Позитивни / 3 Негативни", desc: "Кажи ми 3 работи што ги сакаш кај мене и 3 што треба да ги поправам 😏" },
// // // //         { title: "Најпаметно vs Најглупаво", desc: "Која е најпаметната работа што сум ја направила, а која најглупавата? 😂" },
// // // //         { title: "Идната јас", desc: "Како ме гледаш во иднина? 🔮" },
// // // //         { title: "Исповедална", desc: "Кажи ми нешто што никогаш не си ми кажал 🤫" },
// // // //         { title: "Совет за мене", desc: "Дај ми совет за љубовта, кариерата и животот 💌" }
// // // //       ]
// // // //     },
// // // //     wwmd: {
// // // //       title: "Што би правела Марија?",
// // // //       subtitle: "Погоди што би направила во овие ситуации 💡",
// // // //       categories: {
// // // //         love: "Љубов и Драма",
// // // //         girl: "Girl Life",
// // // //         career: "Живот и Кариера"
// // // //       }
// // // //     }
// // // //   }
// // // // };

// // // // const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// // // // export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
// // // //   const [lang, setLang] = useState<Language>("en");

// // // //   const t = (path: string) => {
// // // //     // Оваа логика овозможува пристап до длабоки клучеви како 'activities.title'
// // // //     const value = path.split('.').reduce((obj, key) => obj?.[key], translations[lang] as any);
// // // //     return value || path;
// // // //   };

// // // //   return (
// // // //     <LanguageContext.Provider value={{ lang, setLang, t }}>
// // // //       {children}
// // // //     </LanguageContext.Provider>
// // // //   );
// // // // };

// // // // export const useLanguage = () => {
// // // //   const context = useContext(LanguageContext);
// // // //   if (!context) throw new Error("useLanguage must be used within LanguageProvider");
// // // //   return context;
// // // // };
// // // import React, { createContext, useContext, useState } from "react";

// // // type Language = "en" | "mk";

// // // interface LanguageContextType {
// // //   lang: Language;
// // //   setLang: (lang: Language) => void;
// // //   t: (key: string) => any;
// // // }

// // // const translations = {
// // //   en: {
// // //     nav: { 
// // //       activities: "Activities", 
// // //       think: "Think", 
// // //       location: "Location",
// // //       rsvp: "RSVP" 
// // //     },
// // //     hero: { 
// // //       invite: "You are cordially invited to",
// // //       name: "Marija's",
// // //       age: "26th",
// // //       celebration: "Birthday Celebration",
// // //       description: "Come dressed as your version of me — how you see me, imagine me, or even my future self. Be creative, funny, dramatic or iconic ✨",
// // //       date: "April 18",
// // //       time: "8:00 PM",
// // //       address: "Kata Pockova br.11",
// // //       dressCode: "Dress Code",
// // //       dressCodeVal: "Different Versions of Me"
// // //     },
// // //     activities: {
// // //       title: "Activities",
// // //       subtitle: "Get creative",
// // //       cards: [
// // //         { title: "Draw Me", desc: "Draw how you imagine me 🎨" },
// // //         { title: "3 Positives / 3 Negatives", desc: "Tell me 3 things you love about me and 3 things I should improve 😏" },
// // //         { title: "Smartest vs Dumbest", desc: "What's the smartest thing I've ever done vs the dumbest? 😂" },
// // //         { title: "Future Me", desc: "How do you see me in the future? 🔮" },
// // //         { title: "Confession Box", desc: "Tell me something you’ve never told me before 🤫" },
// // //         { title: "Advice for Me", desc: "Give me advice about love, career and life 💌" }
// // //       ]
// // //     },
// // //     wwmd: {
// // //       title: "What Would Marija Do?",
// // //       subtitle: "The game",
// // //       description: "Guess what I would do in these situations 👇",
// // //       categories: {
// // //         love: "Love & Drama",
// // //         girl: "Girl Life",
// // //         career: "Life & Career",
// // //         fun: "Fun & Chaos",
// // //         spicy: "Spicy"
// // //       }
// // //     }
// // //   },
// // //   mk: {
// // //     nav: { 
// // //       activities: "Активности", 
// // //       think: "Размисли", 
// // //       location: "Локација",
// // //       rsvp: "RSVP" 
// // //     },
// // //     hero: { 
// // //       invite: "Срдечно сте поканети на",
// // //       name: "Марија",
// // //       age: "26-ти",
// // //       celebration: "Роденденска прослава",
// // //       description: "Дојдете облечени како ваша верзија од мене — како ме гледате, замислувате или моето идно јас. Бидете креативни, смешни или иконични ✨",
// // //       date: "18 Април",
// // //       time: "20:00 часот",
// // //       address: "Ката Поцкова бр.11",
// // //       dressCode: "Dress Code",
// // //       dressCodeVal: "Различни верзии од мене"
// // //     },
// // //     activities: {
// // //       title: "Активности",
// // //       subtitle: "Биди креативен",
// // //       cards: [
// // //         { title: "Нацртај ме", desc: "Нацртај ме како што ме замислуваш 🎨" },
// // //         { title: "3 Позитивни / 3 Негативни", desc: "Кажи ми 3 работи што ги сакаш кај мене и 3 што треба да ги поправам 😏" },
// // //         { title: "Најпаметно vs Најглупаво", desc: "Која е најпаметната работа што сум ја направила, а која најглупавата? 😂" },
// // //         { title: "Идната јас", desc: "Како ме гледаш во иднина? 🔮" },
// // //         { title: "Исповедална", desc: "Кажи ми нешто што никогаш не си ми кажал 🤫" },
// // //         { title: "Совет за мене", desc: "Дај ми совет за љубовта, кариерата и животот 💌" }
// // //       ]
// // //     },
// // //     wwmd: {
// // //       title: "Што би правела Марија?",
// // //       subtitle: "Игра",
// // //       description: "Погоди што би направила во овие ситуации 👇",
// // //       categories: {
// // //         love: "Љубов и Драма",
// // //         girl: "Girl Life",
// // //         career: "Живот и Кариера",
// // //         fun: "Забава и Хаос",
// // //         spicy: "Spicy 🔥"
// // //       }
// // //     }
// // //   }
// // // };

// // // const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// // // export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
// // //   const [lang, setLang] = useState<Language>("en");

// // //   const t = (path: string) => {
// // //     const value = path.split('.').reduce((obj, key) => obj?.[key], translations[lang] as any);
// // //     return value || path;
// // //   };

// // //   return (
// // //     <LanguageContext.Provider value={{ lang, setLang, t }}>
// // //       {children}
// // //     </LanguageContext.Provider>
// // //   );
// // // };

// // // export const useLanguage = () => {
// // //   const context = useContext(LanguageContext);
// // //   if (!context) throw new Error("useLanguage must be used within LanguageProvider");
// // //   return context;
// // // };
// // import React, { createContext, useContext, useState } from "react";

// // type Language = "en" | "mk";

// // interface LanguageContextType {
// //   lang: Language;
// //   setLang: (lang: Language) => void;
// //   t: (key: string) => any;
// // }

// // const translations = {
// //   en: {
// //     nav: { 
// //       activities: "Activities", 
// //       think: "Think", 
// //       location: "Location",
// //       rsvp: "RSVP" 
// //     },
// //     intro: { 
// //       title: "Marija's 26th", 
// //       click: "Click to enter experience" 
// //     },
// //     hero: { 
// //       invite: "You are cordially invited to",
// //       name: "Marija's",
// //       age: "26th",
// //       celebration: "Birthday Celebration",
// //       description: "Come dressed as your version of me — how you see me, imagine me, or even my future self. Be creative, funny, dramatic or iconic ✨",
// //       date: "April 18",
// //       time: "8:00 PM",
// //       address: "Kata Pockova br.11",
// //       dressCode: "Dress Code",
// //       dressCodeVal: "Different Versions of Me"
// //     },
// //     activities: {
// //       title: "Activities",
// //       subtitle: "Get creative",
// //       cards: [
// //         { title: "Draw Me", desc: "Draw how you imagine me 🎨" },
// //         { title: "3 Positives / 3 Negatives", desc: "Tell me 3 things you love about me and 3 things I should improve 😏" },
// //         { title: "Smartest vs Dumbest", desc: "What's the smartest thing I've ever done vs the dumbest? 😂" },
// //         { title: "Future Me", desc: "How do you see me in the future? 🔮" },
// //         { title: "Confession Box", desc: "Tell me something you’ve never told me before 🤫" },
// //         { title: "Advice for Me", desc: "Give me advice about love, career and life 💌" }
// //       ]
// //     },
// //     wwmd: {
// //       title: "What Would Marija Do?",
// //       subtitle: "The game",
// //       description: "Guess what I would do in these situations 👇",
// //       categories: {
// //         love: "Love & Drama",
// //         girl: "Girl Life",
// //         career: "Life & Career",
// //         fun: "Fun & Chaos",
// //         spicy: "Spicy"
// //       }
// //     }
// //   },
// //   mk: {
// //     nav: { 
// //       activities: "Активности", 
// //       think: "Размисли", 
// //       location: "Локација",
// //       rsvp: "RSVP" 
// //     },
// //     intro: { 
// //       title: "Марија 26", 
// //       click: "Кликни за влез" 
// //     },
// //     hero: { 
// //       invite: "Срдечно сте поканети на",
// //       name: "Марија",
// //       age: "26-ти",
// //       celebration: "Роденденска прослава",
// //       description: "Дојдете облечени како ваша верзија од мене — како ме гледате, замислувате или моето идно јас. Бидете креативни, смешни или иконични ✨",
// //       date: "18 Април",
// //       time: "20:00 часот",
// //       address: "Ката Поцкова бр.11",
// //       dressCode: "Dress Code",
// //       dressCodeVal: "Различни верзии од мене"
// //     },
// //     activities: {
// //       title: "Активности",
// //       subtitle: "Биди креативен",
// //       cards: [
// //         { title: "Нацртај ме", desc: "Нацртај ме како што ме замислуваш 🎨" },
// //         { title: "3 Позитивни / 3 Негативни", desc: "Кажи ми 3 работи што ги сакаш кај мене и 3 што треба да ги поправам 😏" },
// //         { title: "Најпаметно vs Најглупаво", desc: "Која е најпаметната работа што сум ја направила, а која најглупавата? 😂" },
// //         { title: "Идната јас", desc: "Како ме гледаш во иднина? 🔮" },
// //         { title: "Исповедална", desc: "Кажи ми нешто што никогаш не си ми кажал 🤫" },
// //         { title: "Совет за мене", desc: "Дај ми совет за љубовта, кариерата и животот 💌" }
// //       ]
// //     },
// //     wwmd: {
// //       title: "Што би правела Марија?",
// //       subtitle: "Игра",
// //       description: "Погоди што би направила во овие ситуации 👇",
// //       categories: {
// //         love: "Љубов и Драма",
// //         girl: "Girl Life",
// //         career: "Живот и Кариера",
// //         fun: "Забава и Хаос",
// //         spicy: "Spicy 🔥"
// //       }
// //     }
// //   }
// // };

// // const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// // export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
// //   // English е почетен јазик
// //   const [lang, setLang] = useState<Language>("en");

// //   const t = (path: string) => {
// //     // Оваа функција овозможува пристап до длабоки клучеви како 'hero.name'
// //     const value = path.split('.').reduce((obj, key) => obj?.[key], translations[lang] as any);
// //     return value || path;
// //   };

// //   return (
// //     <LanguageContext.Provider value={{ lang, setLang, t }}>
// //       {children}
// //     </LanguageContext.Provider>
// //   );
// // };

// // export const useLanguage = () => {
// //   const context = useContext(LanguageContext);
// //   if (!context) throw new Error("useLanguage must be used within LanguageProvider");
// //   return context;
// // };
// import React, { createContext, useContext, useState } from "react";

// type Language = "en" | "mk";

// interface LanguageContextType {
//   lang: Language;
//   setLang: (lang: Language) => void;
//   t: (key: string) => any;
// }

// const translations = {
//   en: {
//     nav: { 
//       activities: "Activities", 
//       think: "Think", 
//       location: "Location",
//       rsvp: "RSVP" 
//     },
//     intro: { 
//       title: "Marija's 26th", 
//       click: "Click to enter experience",
//       select: "Select Language" // ДОДАДЕНО
//     },
//     hero: { 
//       invite: "You are cordially invited to",
//       name: "Marija's",
//       age: "26th",
//       celebration: "Birthday Celebration",
//       description: "Come dressed as your version of me — how you see me, imagine me, or even my future self. Be creative, funny, dramatic or iconic ✨",
//       date: "April 18",
//       time: "8:00 PM",
//       address: "Kata Pockova br.11",
//       dressCode: "Dress Code",
//       dressCodeVal: "Different Versions of Me"
//     },
//     activities: {
//       title: "Activities",
//       subtitle: "Get creative",
//       cards: [
//         { title: "Draw Me", desc: "Draw how you imagine me 🎨" },
//         { title: "3 Positives / 3 Negatives", desc: "Tell me 3 things you love about me and 3 things I should improve 😏" },
//         { title: "Smartest vs Dumbest", desc: "What's the smartest thing I've ever done vs the dumbest? 😂" },
//         { title: "Future Me", desc: "How do you see me in the future? 🔮" },
//         { title: "Confession Box", desc: "Tell me something you’ve never told me before 🤫" },
//         { title: "Advice for Me", desc: "Give me advice about love, career and life 💌" }
//       ]
//     },
//     wwmd: {
//       title: "What Would Marija Do?",
//       subtitle: "The game",
//       description: "Guess what I would do in these situations 👇",
//       categories: {
//         love: "Love & Drama",
//         girl: "Girl Life",
//         career: "Life & Career",
//         fun: "Fun & Chaos",
//         spicy: "Spicy"
//       }
//     }
//   },
//   mk: {
//     nav: { 
//       activities: "Активности", 
//       think: "Размисли", 
//       location: "Локација",
//       rsvp: "RSVP" 
//     },
//     intro: { 
//       title: "Марија 26", 
//       click: "Кликни за влез",
//       select: "Избери јазик" // ДОДАДЕНО
//     },
//     hero: { 
//       invite: "Срдечно сте поканети на",
//       name: "Марија",
//       age: "26-ти",
//       celebration: "Роденденска прослава",
//       description: "Дојдете облечени како ваша верзија од мене — како ме гледате, замислувате или моето идно јас. Бидете креативни, смешни или иконични ✨",
//       date: "18 Април",
//       time: "20:00 часот",
//       address: "Ката Поцкова бр.11",
//       dressCode: "Dress Code",
//       dressCodeVal: "Различни верзии од мене"
//     },
//     activities: {
//       title: "Активности",
//       subtitle: "Биди креативен",
//       cards: [
//         { title: "Нацртај ме", desc: "Нацртај ме како што ме замислуваш 🎨" },
//         { title: "3 Позитивни / 3 Негативни", desc: "Кажи ми 3 работи што ги сакаш кај мене и 3 што треба да ги поправам 😏" },
//         { title: "Најпаметно vs Најглупаво", desc: "Која е најпаметната работа што сум ја направила, а која најглупавата? 😂" },
//         { title: "Идната јас", desc: "Како ме гледаш во иднина? 🔮" },
//         { title: "Исповедална", desc: "Кажи ми нешто што никогаш не си ми кажал 🤫" },
//         { title: "Совет за мене", desc: "Дај ми совет за љубовта, кариерата и животот 💌" }
//       ]
//     },
//     wwmd: {
//       title: "Што би правела Марија?",
//       subtitle: "Игра",
//       description: "Погоди што би направила во овие ситуации 👇",
//       categories: {
//         love: "Љубов и Драма",
//         girl: "Girl Life",
//         career: "Живот и Кариера",
//         fun: "Забава и Хаос",
//         spicy: "Spicy 🔥"
//       }
//     }
//   }
// };

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
//   const [lang, setLang] = useState<Language>("en");

//   const t = (path: string) => {
//     const value = path.split('.').reduce((obj, key) => obj?.[key], translations[lang] as any);
//     return value || path;
//   };

//   return (
//     <LanguageContext.Provider value={{ lang, setLang, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) throw new Error("useLanguage must be used within LanguageProvider");
//   return context;
// };

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "mk";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  en: {
    nav: { 
      activities: "Activities", 
      think: "Think", 
      location: "Location",
      rsvp: "RSVP" 
    },
    intro: { 
      title: "Marija's 26th", 
      click: "Click to enter experience",
      select: "Select Language"
    },
    hero: { 
      invite: "You are cordially invited to",
      name: "Marija's",
      age: "26th",
      celebration: "Birthday Celebration",
      description: "Come dressed as your version of me — how you see me, imagine me, or even my future self. Be creative, funny, dramatic or iconic ✨",
      date: "April 18",
      time: "8:00 PM",
      address: "Kata Pockova br.11",
      dressCode: "Dress Code",
      dressCodeVal: "Different Versions of Me"
    },
    activities: {
      title: "Activities",
      subtitle: "Get creative",
      cards: [
        { title: "Draw Me", desc: "Draw how you imagine me 🎨" },
        { title: "3 Positives / 3 Negatives", desc: "Tell me 3 things you love about me and 3 things I should improve 😏" },
        { title: "Smartest vs Dumbest", desc: "What's the smartest thing I've ever done vs the dumbest? 😂" },
        { title: "Future Me", desc: "How do you see me in the future? 🔮" },
        { title: "Confession Box", desc: "Tell me something you’ve never told me before 🤫" },
        { title: "Advice for Me", desc: "Give me advice about love, career and life 💌" }
      ]
    },
    wwmd: {
      title: "What Would Marija Do?",
      subtitle: "The game",
      description: "Guess what I would do in these situations 👇",
      categories: {
        love: "Love & Drama",
        girl: "Girl Life",
        career: "Life & Career",
        fun: "Fun & Chaos",
        spicy: "Spicy"
      }
    },
    footer: {
      seeYou: "See you there ✨",
      details: "April 18 · 8:00 PM · Kata Pockova br.11",
      celebration: "Marija's 26th"
    }
  },
  mk: {
    nav: { 
      activities: "Активности", 
      think: "Размисли", 
      location: "Локација",
      rsvp: "RSVP" 
    },
    intro: { 
      title: "Марија 26", 
      click: "Кликни за влез",
      select: "Избери јазик"
    },
    hero: { 
      invite: "Срдечно сте поканети на",
      name: "Марија",
      age: "26-ти",
      celebration: "Роденденска прослава",
      description: "Дојдете облечени како ваша верзија од мене — како ме гледате, замислувате или моето идно јас. Бидете креативни, смешни или иконични ✨",
      date: "18 Април",
      time: "20:00 часот",
      address: "Ката Поцкова бр.11",
      dressCode: "Dress Code",
      dressCodeVal: "Различни верзии од мене"
    },
    activities: {
      title: "Активности",
      subtitle: "Биди креативен",
      cards: [
        { title: "Нацртај ме", desc: "Нацртај ме како што ме замислуваш 🎨" },
        { title: "3 Позитивни / 3 Негативни", desc: "Кажи ми 3 работи што ги сакаш кај мене и 3 што треба да ги поправам 😏" },
        { title: "Најпаметно vs Најглупаво", desc: "Која е најпаметната работа што сум ја направила, а која најглупавата? 😂" },
        { title: "Идната јас", desc: "Како ме гледаш во иднина? 🔮" },
        { title: "Исповедална", desc: "Кажи ми нешто што никогаш не си ми кажал 🤫" },
        { title: "Совет за мене", desc: "Дај ми совет за љубовта, кариерата и животот 💌" }
      ]
    },
    wwmd: {
      title: "Што би правела Марија?",
      subtitle: "Игра",
      description: "Погоди што би направила во овие ситуации 👇",
      categories: {
        love: "Љубов и Драма",
        girl: "Girl Life",
        career: "Живот и Кариера",
        fun: "Забава и Хаос",
        spicy: "Spicy 🔥"
      }
    },
    footer: {
      seeYou: "Се гледаме таму ✨",
      details: "18 Април · 20:00 часот · Ката Поцкова бр.11",
      celebration: "Марија 26"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (path: string) => {
    const value = path.split('.').reduce((obj, key) => obj?.[key], translations[lang] as any);
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};