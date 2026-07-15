import { useState } from 'react';
import { Flower2, Trophy, Heart, Home, BookOpen } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { useNavigate } from 'react-router-dom';
import { StatusBar } from '@/components/StatusBar';

export const ReportPage = () => {
  const { stats, diary, calculateEnding, resetGame } = useGameStore();
  const [ending] = useState(calculateEnding());
  const navigate = useNavigate();

  const handleRestart = () => {
    resetGame();
    navigate('/');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleLearnMore = () => {
    navigate('/education');
  };

  const getEndingColor = () => {
    switch (ending.type) {
      case 'A': return 'from-green-100 to-cream-100';
      case 'B': return 'from-blue-100 to-cream-100';
      case 'C': return 'from-rose-100 to-cream-100';
      default: return 'from-cream-100 to-beige-100';
    }
  };

  const getEndingIcon = () => {
    switch (ending.type) {
      case 'A': return <Trophy className="w-16 h-16 text-green-500" />;
      case 'B': return <Heart className="w-16 h-16 text-blue-500" />;
      case 'C': return <Flower2 className="w-16 h-16 text-rose-500" />;
      default: return <Heart className="w-16 h-16 text-gray-500" />;
    }
  };

  return (
    <div className="game-container p-4 pb-20">
      <div className={`rounded-3xl p-6 mb-6 bg-gradient-to-br ${getEndingColor()} animate-fade-in`}>
        <div className="text-center">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-soft mb-4">
            {getEndingIcon()}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">游戏结束</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{ending.title}</h2>
          <p className="text-gray-600 leading-relaxed">{ending.description}</p>
        </div>
      </div>

      <div className="card-soft p-4 mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Flower2 className="w-4 h-4 text-rose-400" />
          最终状态
        </h3>
        <StatusBar />
      </div>

      <div className="card-soft p-4 mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-beige-400" />
          一周回顾
        </h3>
        <div className="space-y-3 max-h-40 overflow-y-auto">
          {diary.map((day, index) => (
            <div key={index} className="bg-cream-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">第 {day.day} 天</span>
                {day.dialysisSettlement && (
                  <span className="text-xs px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full">
                    透析日
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500">
                {day.events.length > 0 ? (
                  day.events.map((event, i) => (
                    <p key={i} className="truncate">{event.choiceText}</p>
                  ))
                ) : (
                  <p>平静的一天</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-soft p-4 mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Flower2 className="w-8 h-8 text-rose-400" />
          <span className="text-2xl font-bold text-rose-500">{stats.flowers}</span>
        </div>
        <p className="text-center text-sm text-gray-600">你获得了 {stats.flowers} 朵小红花</p>
        <p className="text-center text-xs text-gray-400 mt-1">每一朵都是对生活的用心</p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={handleLearnMore}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          了解更多
        </button>
        <button
          onClick={handleRestart}
          className="btn-secondary w-full flex items-center justify-center gap-2"
        >
          <Heart className="w-4 h-4" />
          重新开始
        </button>
        <button
          onClick={handleHome}
          className="btn-secondary w-full flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          返回首页
        </button>
      </div>
    </div>
  );
};
