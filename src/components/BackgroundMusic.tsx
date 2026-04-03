

import { useEffect, useRef, useState } from "react";

interface BackgroundMusicProps {
  forcePlay?: boolean;
}

const BackgroundMusic = ({ forcePlay }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Ова се извршува веднаш штом ќе кликнеш на Intro-то
    if (forcePlay && audioRef.current) {
      const audio = audioRef.current;
      
      // ГАРАНТИРАНО ПОСТАВУВАЊЕ НА ВРЕМЕТО
      audio.currentTime = 19;
      audio.volume = 0.5;

      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Playback failed:", error);
          });
      }
    }
  }, [forcePlay]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/introsong.mp3" loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl"
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          background: "rgba(18, 18, 18, 0.6)",
          backdropFilter: "blur(12px)",
          border: "2px solid rgba(212, 175, 55, 0.4)",
          color: "#D4AF37",
          cursor: "pointer"
        }}
      >
        {isPlaying ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="3" height="16" />
            <rect x="15" y="4" width="3" height="16" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;