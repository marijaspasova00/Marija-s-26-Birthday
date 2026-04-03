// import { useState } from "react";
// import sectionBg from "@/assets/photo1.jpg";

// const categories = [
//   {
//     title: "Love & Drama",
//     icon: "♡",
//     emoji: "😏",
//     questions: [
//       "He leaves you on seen… what do you do?",
//       "Your ex texts you after 6 months: \"hey\"…?",
//       "Your boyfriend likes another girl's photos… reaction?",
//       "Someone texts you \"you up?\" at 2 AM…?",
//       "He says he's not ready for a relationship…?",
//       "Your boyfriend is too clingy…?",
//       "You have to choose: toxic hot guy or nice boring guy… who do you pick? 😏",
//     ],
//   },
//   {
//     title: "Girl Life",
//     icon: "✧",
//     emoji: "💅",
//     questions: [
//       "You have nothing to wear 10 minutes before going out…?",
//       "Your hair is a disaster that day…?",
//       "Someone copies your style…?",
//       "You're broke but want to go out…? 😂",
//       "You get into a fight with your best friend…?",
//     ],
//   },
//   {
//     title: "Life & Career",
//     icon: "◈",
//     emoji: "🧠",
//     questions: [
//       "You get your dream job, but it's in another country…?",
//       "You have a chance to make a lot of money, but it's risky…?",
//       "You have to choose: love or career…?",
//       "You realize you're underpaid… what do you do?",
//       "You're offered something not very moral but very profitable…? 😏",
//     ],
//   },
//   {
//     title: "Fun & Chaos",
//     icon: "❋",
//     emoji: "😂",
//     questions: [
//       "You trip in front of a lot of people…?",
//       "You send a message to the wrong person…?",
//       "Someone is talking behind your back…?",
//       "You get a little too drunk…? 😂",
//       "Someone approaches you and they're super cringe…?",
//     ],
//   },
//   {
//     title: "Spicy",
//     icon: "✺",
//     emoji: "🔥",
//     questions: [
//       "You're attracted to someone you shouldn't be…?",
//       "Your friend tells you a secret you're not supposed to share… but you want to…?",
//       "Someone offers you a sugar daddy situation…? 😭😂",
//       "Your boyfriend asks for your password…?",
//       "Someone you really like ghosts you…?",
//     ],
//   },
// ];

// const WhatWouldMarijaDoSection = () => {
//   const [openCategory, setOpenCategory] = useState<number | null>(null);

//   return (
//     <section className="py-28 px-6 relative overflow-hidden">
//       {/* Blurred photo background */}
//       <img
//         src={sectionBg}
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover scale-105" // Намали го scale на 105 за помалку растегнување
//       />
//       <div className="absolute inset-0 bg-background/80" />
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

//       <div className="max-w-4xl mx-auto relative z-10">
//         <div className="text-center mb-20">
//           <div className="flex items-center justify-center gap-4 mb-5">
//             <div className="w-12 h-px bg-primary/20" />
//             <span className="text-primary/30 text-[8px]">◆</span>
//             <div className="w-12 h-px bg-primary/20" />
//           </div>
//           <p className="text-primary/60 tracking-[0.4em] uppercase text-[10px] mb-4 font-light">The game</p>
//           <h2 className="font-display text-5xl md:text-6xl font-light text-foreground italic mb-5">
//             What Would Marija Do? 🔥
//           </h2>
//           <p className="text-muted-foreground text-sm max-w-md mx-auto font-light">
//             Guess what I would do in these situations 👇
//           </p>
//         </div>

//         <div className="space-y-3">
//           {categories.map((cat, idx) => (
//             <div key={cat.title} className="rounded-2xl border border-border/60 overflow-hidden bg-card/30 backdrop-blur-md">
//               <button
//                 onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
//                 className="w-full px-7 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-all duration-300"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="text-lg">{cat.emoji}</span>
//                   <h3 className="font-display text-xl font-medium text-foreground italic">{cat.title}</h3>
//                 </div>
//                 <span className={`text-primary/30 text-xs transition-transform duration-300 ${openCategory === idx ? 'rotate-180' : ''}`}>
//                   ▾
//                 </span>
//               </button>
//               <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openCategory === idx ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
//                 <div className="px-7 pb-6 space-y-2">
//                   {cat.questions.map((q, qIdx) => (
//                     <div
//                       key={qIdx}
//                       className="flex items-start gap-3 p-3.5 rounded-xl bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-all duration-300"
//                     >
//                       <span className="text-primary/30 mt-0.5 text-[10px]">✦</span>
//                       <p className="text-foreground/75 text-sm font-light">{q}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWouldMarijaDoSection;
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import sectionBg from "/photo1.jpg";

const WhatWouldMarijaDoSection = () => {
  const { t, lang } = useLanguage();
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const categories = [
    {
      title: t('wwmd.categories.love'),
      emoji: "😏",
      questions: lang === 'en' 
        ? ["He leaves you on seen… what do you do?", "Your ex texts you after 6 months: \"hey\"…?", "Your boyfriend likes another girl's photos… reaction?", "Someone texts you \"you up?\" at 2 AM…?", "He says he's not ready for a relationship…?", "Your boyfriend is too clingy…?", "You have to choose: toxic hot guy or nice boring guy… who do you pick? 😏"]
        : ["Те остава на seen... што правиш?", "Бившиот ти пишува по 6 месеци: \"hey\"...?", "Дечко ти лајкнува слики на други девојки... реакција?", "Некој ти пишува \"you up?\" во 2 по полноќ...?", "Вели дека не е спремен за врска...?", "Дечко ти е премногу „clingy“...?", "Мораш да бираш: toxic hot тип или фин досаден тип... кој го бираш? 😏"]
    },
    {
      title: t('wwmd.categories.girl'),
      emoji: "💅",
      questions: lang === 'en'
        ? ["You have nothing to wear 10 minutes before going out…?", "Your hair is a disaster that day…?", "Someone copies your style…?", "You're broke but want to go out…? 😂", "You get into a fight with your best friend…?"]
        : ["Немаш што да облечеш 10 минути пред излегување...?", "Косата ти е катастрофа тој ден...?", "Некој ти го копира стилот...?", "Шворц си, а сакаш да излезеш...? 😂", "Се караш со најдобрата другарка...?"]
    },
    {
      title: t('wwmd.categories.career'),
      emoji: "🧠",
      questions: lang === 'en'
        ? ["You get your dream job, but it's in another country…?", "You have a chance to make a lot of money, but it's risky…?", "You have to choose: love or career…?", "You realize you're underpaid… what do you do?", "You're offered something not very moral but very profitable…? 😏"]
        : ["Ја добиваш работата од соништата, но во друга држава...?", "Имаш шанса да заработиш многу пари, но ризично е...?", "Мораш да бираш: љубов или кариера...?", "Сфаќаш дека си малку платена... што правиш?", "Ти нудат нешто не баш морално, но многу профитабилно...? 😏"]
    },
    {
      title: t('wwmd.categories.fun'),
      emoji: "😂",
      questions: lang === 'en'
        ? ["You trip in front of a lot of people…?", "You send a message to the wrong person…?", "Someone is talking behind your back…?", "You get a little too drunk…? 😂", "Someone approaches you and they're super cringe…?"]
        : ["Се сопнуваш пред многу луѓе...?", "Испраќаш порака на погрешна личност...?", "Некој те озборува зад грб...?", "Малку повеќе се опиваш...? 😂", "Ти приоѓа некој што е ептен „cringe“...?"]
    },
    {
      title: t('wwmd.categories.spicy'),
      emoji: "🔥",
      questions: lang === 'en'
        ? ["You're attracted to someone you shouldn't be…?", "Your friend tells you a secret you're not supposed to share… but you want to…?", "Someone offers you a sugar daddy situation…? 😭😂", "Your boyfriend asks for your password…?", "Someone you really like ghosts you…?"]
        : ["Те привлекува некој што не треба...?", "Другарка ти кажува тајна што не смееш да ја кажеш... а сакаш...?", "Некој ти нуди sugar daddy ситуација...? 😭😂", "Дечко ти ти ја бара лозинката...?", "Некој што многу ти се допаѓа те „ghost“-нува...?"]
    }
  ];

  return (
    <section id="think" className="py-28 px-6 relative overflow-hidden">
      <img
        src={sectionBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-primary/20" />
            <span className="text-primary/30 text-[8px]">◆</span>
            <div className="w-12 h-px bg-primary/20" />
          </div>
          <p className="text-primary/60 tracking-[0.4em] uppercase text-[10px] mb-4 font-light">
            {t('wwmd.subtitle')}
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground italic mb-5">
            {t('wwmd.title')} 🔥
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto font-light">
            {t('wwmd.description')}
          </p>
        </div>

        <div className="space-y-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="rounded-2xl border border-border/60 overflow-hidden bg-card/30 backdrop-blur-md">
              <button
                onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                className="w-full px-7 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{cat.emoji}</span>
                  <h3 className="font-display text-xl font-medium text-foreground italic">{cat.title}</h3>
                </div>
                <span className={`text-primary/30 text-xs transition-transform duration-300 ${openCategory === idx ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openCategory === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-7 pb-6 space-y-2">
                  {cat.questions.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-background/30 backdrop-blur-sm hover:bg-background/50 transition-all duration-300"
                    >
                      <span className="text-primary/30 mt-0.5 text-[10px]">✦</span>
                      <p className="text-foreground/75 text-sm font-light">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWouldMarijaDoSection;