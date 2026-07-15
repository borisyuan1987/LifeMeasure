import { useState } from 'react';
import { Flower2 } from 'lucide-react';
import { GameEvent } from '@/types';
import { useGameStore } from '@/store/gameStore';

interface EventCardProps {
  event: GameEvent;
  onComplete: () => void;
}

export const EventCard = ({ event, onComplete }: EventCardProps) => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const { makeChoice } = useGameStore();

  const handleChoice = (choiceId: string) => {
    if (selectedChoice) return;
    setSelectedChoice(choiceId);
    setShowFeedback(true);
    
    const choice = event.choices.find(c => c.id === choiceId);
    if (choice) {
      makeChoice(event.id, choice.id, choice.text, choice.feedback, choice.effects);
    }
  };

  const handleContinue = () => {
    setShowFeedback(false);
    setSelectedChoice(null);
    onComplete();
  };

  const selectedChoiceData = event.choices.find(c => c.id === selectedChoice);

  return (
    <div className="card-soft p-5 animate-slide-up">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h2>
      
      <div className="bg-cream-50 rounded-xl p-4 mb-5">
        <p className="text-gray-700 leading-relaxed">{event.description}</p>
      </div>

      {!showFeedback ? (
        <div className="space-y-3">
          {event.choices.map((choice, index) => (
            <button
              key={choice.id}
              onClick={() => handleChoice(choice.id)}
              className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                selectedChoice === choice.id
                  ? 'border-rose-400 bg-rose-50 shadow-warm'
                  : 'border-transparent bg-white hover:border-beige-300 hover:bg-cream-50 shadow-soft'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${
                  index === 0 ? 'bg-blue-100 text-blue-600' :
                  index === 1 ? 'bg-green-100 text-green-600' :
                  'bg-rose-100 text-rose-600'
                }`}>
                  {['A', 'B', 'C'][index]}
                </span>
                <span className="text-gray-700 font-medium">{choice.text}</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="animate-fade-in">
          <div className="bg-rose-50 rounded-xl p-4 mb-4 border border-rose-100">
            <div className="flex items-center gap-2 mb-3">
              <Flower2 className="w-5 h-5 text-rose-500" />
              <span className="text-sm font-semibold text-rose-600">选择结果</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-2">
              <span className="font-medium">你选择了：</span>{selectedChoiceData?.text}
            </p>
            <div className="border-t border-rose-200 pt-3 mt-3">
              <p className="text-gray-600 text-sm leading-relaxed">
                {selectedChoiceData?.feedback}
              </p>
            </div>
          </div>
          
          {selectedChoiceData?.effects && (
            <div className="bg-cream-50 rounded-xl p-3 mb-4">
              <p className="text-xs font-medium text-gray-500 mb-2">状态变化</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(selectedChoiceData.effects).map(([key, value]) => {
                  if (!value) return null;
                  const statLabels: Record<string, string> = {
                    waterLoad: '水分负担',
                    dietRisk: '饮食风险',
                    energy: '体力',
                    emotionalSupport: '情绪支持',
                    lifeParticipation: '生活参与度',
                    flowers: '小红花',
                  };
                  return (
                    <span 
                      key={key}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        value > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {statLabels[key]} {value > 0 ? '+' : ''}{value}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          <button
            onClick={handleContinue}
            className="btn-primary w-full"
          >
            继续
          </button>
        </div>
      )}
    </div>
  );
};
