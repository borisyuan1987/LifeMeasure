import { useState, useEffect } from 'react';
import { ArrowRight, Moon, BookOpen } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { getEventsForDay, DIALYSIS_DAYS } from '@/data/events';
import { getImageForDay } from '@/data/dayImages';
import { StatusBar } from '@/components/StatusBar';
import { DayHeader } from '@/components/DayHeader';
import { EventCard } from '@/components/EventCard';
import { useNavigate } from 'react-router-dom';

export const GamePage = () => {
  const { 
    currentDay, 
    currentEventIndex, 
    nextEvent, 
    endDay, 
    goToNextDay,
    isGameEnded,
    diary
  } = useGameStore();
  
  const navigate = useNavigate();
  const [showDayEnd, setShowDayEnd] = useState(false);
  const [showDialysisSettlement, setShowDialysisSettlement] = useState(false);

  const dayEvents = getEventsForDay(currentDay);
  const currentEvent = dayEvents[currentEventIndex] || null;

  useEffect(() => {
    if (isGameEnded) {
      navigate('/report');
    }
  }, [isGameEnded, navigate]);

  useEffect(() => {
    if (currentEventIndex === -1 && !showDayEnd) {
      setShowDayEnd(true);
      
      if (DIALYSIS_DAYS.includes(currentDay)) {
        setShowDialysisSettlement(true);
        setTimeout(() => {
          endDay();
          setShowDialysisSettlement(false);
        }, 2000);
      }
    }
  }, [currentEventIndex, currentDay, endDay]);

  const handleEventComplete = () => {
    nextEvent();
  };

  const handleNextDay = () => {
    setShowDayEnd(false);
    goToNextDay();
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const dayDiary = diary.find(d => d.day === currentDay);

  if (showDialysisSettlement) {
    return (
      <div className="game-container flex flex-col items-center justify-center p-6">
        <div className="card-soft p-8 text-center animate-fade-in">
          <Moon className="w-16 h-16 text-rose-400 mx-auto mb-4 animate-pulse-soft" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">透析日结算</h2>
          <p className="text-gray-600 mb-6">正在进行透析治疗...</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">水分负担</span>
              <span className="text-green-600 font-medium">-20</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">饮食风险</span>
              <span className="text-green-600 font-medium">-10</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">体力</span>
              <span className="text-red-500 font-medium">-10</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const dayImage = getImageForDay(currentDay);

  if (showDayEnd) {
    return (
      <div className="game-container flex flex-col items-center justify-center p-6">
        <div className="card-soft p-6 text-center animate-fade-in w-full">
          <BookOpen className="w-12 h-12 text-beige-400 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-gray-800 mb-1">今日日记</h2>
          <p className="text-sm text-gray-500 mb-4">{dayImage?.title}</p>
          
          {dayImage && (
            <div className="mb-4">
              <img
                src={dayImage.url}
                alt={dayImage.description}
                className="w-full h-40 object-cover rounded-xl shadow-soft"
              />
            </div>
          )}
          
          {dayDiary?.events.length === 0 ? (
            <p className="text-gray-500 mb-6">今天没有发生特别的事情</p>
          ) : (
            <div className="text-left bg-cream-50 rounded-xl p-4 mb-6 max-h-60 overflow-y-auto">
              {dayDiary?.events.map((event, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <p className="text-sm font-medium text-gray-700 mb-1">{event.choiceText}</p>
                  <p className="text-xs text-gray-500">{event.feedback.slice(0, 50)}...</p>
                </div>
              ))}
            </div>
          )}

          {dayDiary?.dialysisSettlement && (
            <div className="bg-rose-50 rounded-xl p-3 mb-6">
              <p className="text-xs text-rose-600">今日已完成透析治疗</p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button
              onClick={handleNextDay}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              进入下一天
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleBackToHome}
              className="btn-secondary w-full"
            >
              返回首页
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="game-container p-4 pb-20">
      <DayHeader day={currentDay} />
      <StatusBar />
      
      {currentEvent ? (
        <EventCard event={currentEvent} onComplete={handleEventComplete} />
      ) : (
        <div className="card-soft p-8 text-center">
          <p className="text-gray-500">加载中...</p>
        </div>
      )}

      <button
        onClick={handleBackToHome}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 btn-secondary px-6 py-2 text-sm"
      >
        退出游戏
      </button>
    </div>
  );
};
