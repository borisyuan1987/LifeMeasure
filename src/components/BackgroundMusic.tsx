import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}bgm.mp3`} />
      <button
        onClick={isMuted ? toggleMute : togglePlay}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-soft ${
          isPlaying && !isMuted
            ? 'bg-rose-100 text-rose-500 hover:bg-rose-200'
            : 'bg-white text-gray-400 hover:text-gray-600'
        }`}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};