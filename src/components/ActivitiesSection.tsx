// import ActivityCard from "./ActivityCard";
// import sectionBg from "@/assets/section-bg1.jpg";

// const activities = [
//   { title: "Draw Me", description: "Draw how you imagine me 🎨", emoji: "✎" },
//   { title: "3 Positives / 3 Negatives", description: "Tell me 3 things you love about me and 3 things I should improve 😏", emoji: "❧" },
//   { title: "Smartest vs Dumbest", description: "What's the smartest thing I've ever done vs the dumbest? 😂", emoji: "◎" },
//   { title: "Future Me", description: "How do you see me in the future? 🔮", emoji: "✦" },
//   { title: "Confession Box", description: "Tell me something you’ve never told me before 🤫", emoji: "✧" },
//   { title: "Advice for Me", description: "Give me advice about love, career and life 💌", emoji: "♡" },
// ];

// const ActivitiesSection = () => {
//   return (
//     <section className="py-28 px-6 relative overflow-hidden">
//       {/* Blurred photo background */}
//       <img
//         src={sectionBg}
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover blur-[0.1px] scale-100"
//       />
//       <div className="absolute inset-0 bg-background/75" />
//       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      
//       <div className="max-w-5xl mx-auto relative z-10">
//         <div className="text-center mb-20">
//           <div className="flex items-center justify-center gap-4 mb-5">
//             <div className="w-12 h-px bg-primary/20" />
//             <span className="text-primary/30 text-[8px]">◆</span>
//             <div className="w-12 h-px bg-primary/20" />
//           </div>
//           <p className="text-primary/60 tracking-[0.4em] uppercase text-[10px] mb-4 font-light">Get creative</p>
//           <h2 className="font-display text-5xl md:text-6xl font-light text-foreground italic">Activities</h2>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {activities.map((a, i) => (
//             <ActivityCard key={a.title} {...a} delay={i * 100} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ActivitiesSection;
import { useLanguage } from "@/context/LanguageContext"; // ДОДАДЕНО
import ActivityCard from "./ActivityCard";
import sectionBg from "/section-bg1.jpg";

const ActivitiesSection = () => {
  const { t } = useLanguage(); // Иницијализација на преводот

  // Ги влечеме преведените картички директно од контекстот
  const activities = t('activities.cards');

  // Емоџијата ги дефинираме тука за да не ги чуваме во JSON-от за превод
  const emojis = ["✎", "❧", "◎", "✦", "✧", "♡"];

  return (
    <section id="activities" className="py-28 px-6 relative overflow-hidden">
      {/* Blurred photo background */}
      <img
        src={sectionBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-[0.1px] scale-100"
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-primary/20" />
            <span className="text-primary/30 text-[8px]">◆</span>
            <div className="w-12 h-px bg-primary/20" />
          </div>
          <p className="text-primary/60 tracking-[0.4em] uppercase text-[10px] mb-4 font-light">
            {t('activities.subtitle')}
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground italic">
            {t('activities.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(activities) && activities.map((a, i) => (
            <ActivityCard 
              key={i} 
              title={a.title} 
              description={a.desc} // Внимавај: во контекстот е 'desc', во твојот оригинален код беше 'description'
              emoji={emojis[i]} 
              delay={i * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;