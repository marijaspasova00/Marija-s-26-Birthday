import { useEffect, useState } from "react";

const LemonIntro = () => {
  const [lemons, setLemons] = useState<{ id: number; left: number; delay: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    // Генерираме 30 лимони со различни параметри
    const newLemons = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Позиција лево-десно
      delay: Math.random() * 2,  // Кога ќе почне да паѓа
      size: Math.random() * (45 - 20) + 20, // Големина на лимонот
      duration: Math.random() * (4 - 2) + 2, // Брзина на паѓање
    }));
    setLemons(newLemons);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-10vh) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) rotate(360deg);
              opacity: 0;
            }
          }
          .animate-lemon-fall {
            animation: fall linear forwards;
          }
        `}
      </style>
      
      {lemons.map((lemon) => (
        <div
          key={lemon.id}
          className="absolute top-[-10vh] animate-lemon-fall"
          style={{
            left: `${lemon.left}%`,
            animationDelay: `${lemon.delay}s`,
            animationDuration: `${lemon.duration}s`,
            fontSize: `${lemon.size}px`,
          }}
        >
          🍋
        </div>
      ))}
    </div>
  );
};

export default LemonIntro;