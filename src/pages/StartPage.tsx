import { Flower2, Heart, Play } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { useNavigate } from 'react-router-dom';

export const StartPage = () => {
  const { startGame, resetGame, isGameStarted, currentDay, isGameEnded } = useGameStore();
  const navigate = useNavigate();

  const handleStart = () => {
    resetGame();
    startGame();
    navigate('/game');
  };

  const handleContinue = () => {
    navigate('/game');
  };

  return (
    <div className="game-container flex flex-col items-center justify-center p-6">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 animate-float">
          <Flower2 className="w-8 h-8 text-rose-200 opacity-50" />
        </div>
        <div className="absolute top-32 right-8 animate-float" style={{ animationDelay: '1s' }}>
          <Flower2 className="w-6 h-6 text-rose-300 opacity-40" />
        </div>
        <div className="absolute bottom-40 left-16 animate-float" style={{ animationDelay: '2s' }}>
          <Flower2 className="w-10 h-10 text-rose-200 opacity-30" />
        </div>
        <div className="absolute bottom-20 right-12 animate-float" style={{ animationDelay: '0.5s' }}>
          <Flower2 className="w-7 h-7 text-rose-300 opacity-40" />
        </div>
      </div>

      <div className="text-center z-10 animate-fade-in w-full">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-rose-100 to-cream-200 rounded-full flex items-center justify-center shadow-warm">
            <Heart className="w-12 h-12 text-rose-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">生命的刻度</h1>
        <p className="text-gray-500 mb-6">一个关于透析患者生活的公益叙事游戏</p>

        <div className="mb-6 w-full max-w-xs mx-auto">
          <img
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adult%20picture%20book%20illustration%20style%2C%20warm%20and%20gentle%2C%20chinese%20male%2035%20years%20old%20office%20worker%20sitting%20by%20window%2C%20soft%20evening%20city%20view%20outside%2C%20simple%20weekly%20calendar%20on%20desk%20with%20Monday%20Wednesday%20Friday%20marked%2C%20water%20cup%20lunch%20box%20phone%20diary%20on%20desk%2C%20cream%20white%20background%2C%20soft%20warm%20orange%20and%20light%20red%20accents%2C%20hand%20drawn%20texture%2C%20subtle%20paper%20grain%2C%20soft%20shadows%2C%20calm%20hopeful%20atmosphere%2C%20medical%20humanitarian%20care%20theme%2C%20mobile%20vertical%20layout%2C%20no%20hospital%20brands%2C%20no%20blood%2C%20no%20scary%20elements&image_size=portrait_16_9"
            alt="游戏插画"
            className="w-full h-auto rounded-2xl shadow-warm"
          />
        </div>

        <div className="space-y-3">
          {isGameStarted && !isGameEnded && currentDay <= 7 && (
            <button
              onClick={handleContinue}
              className="btn-secondary w-full max-w-xs mx-auto flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              继续游戏（第 {currentDay} 天）
            </button>
          )}
          
          <button
            onClick={handleStart}
            className="btn-primary w-full max-w-xs mx-auto flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            {isGameStarted && !isGameEnded ? '重新开始' : '开始游戏'}
          </button>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          这是一个公益叙事游戏，旨在增进对慢病患者生活的理解
        </p>
      </div>
    </div>
  );
};
