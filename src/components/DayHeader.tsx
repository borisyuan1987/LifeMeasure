import { Calendar, Sun, Moon } from 'lucide-react';
import { WEEK_DAYS, DIALYSIS_DAYS } from '@/data/events';

interface DayHeaderProps {
  day: number;
}

export const DayHeader = ({ day }: DayHeaderProps) => {
  const isDialysisDay = DIALYSIS_DAYS.includes(day);
  const isWeekend = day === 6 || day === 7;

  return (
    <div className={`card-soft p-4 mb-4 ${isDialysisDay ? 'border-rose-200' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${
            isDialysisDay ? 'bg-rose-100' : isWeekend ? 'bg-cream-200' : 'bg-beige-100'
          }`}>
            {isWeekend ? (
              <Sun className={`w-6 h-6 ${isWeekend ? 'text-warm-500' : 'text-gray-500'}`} />
            ) : isDialysisDay ? (
              <Moon className="w-6 h-6 text-rose-500" />
            ) : (
              <Calendar className="w-6 h-6 text-gray-500" />
            )}
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">第 {day} 天</h1>
            <p className="text-sm text-gray-500">
              {WEEK_DAYS[day - 1]}
              {isDialysisDay && (
                <span className="ml-2 px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-xs font-medium">
                  透析日
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5, 6, 7].map(d => (
            <div 
              key={d}
              className={`w-2 h-2 rounded-full ${
                d === day ? 'bg-rose-500' :
                d < day ? 'bg-beige-400' :
                'bg-beige-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
