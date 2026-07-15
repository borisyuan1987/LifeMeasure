import { Droplets, UtensilsCrossed, Battery, Heart, Users, Flower2 } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

const StatItem = ({ 
  icon: Icon, 
  label, 
  value, 
  color, 
  bgColor,
  isNegative = false 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: number; 
  color: string;
  bgColor: string;
  isNegative?: boolean;
}) => {
  const getProgressColor = () => {
    if (isNegative) {
      if (value >= 70) return 'bg-red-400';
      if (value >= 40) return 'bg-orange-400';
      return 'bg-green-400';
    }
    if (value >= 70) return 'bg-green-400';
    if (value >= 40) return 'bg-orange-400';
    return 'bg-red-400';
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className={`p-1.5 rounded-full ${bgColor}`}>
            <Icon className={`w-3.5 h-3.5 ${color}`} />
          </div>
          <span className="text-xs font-medium text-gray-600">{label}</span>
        </div>
        <span className="text-xs font-semibold" style={{ color: color.replace('text-', '') }}>{value}</span>
      </div>
      <div className="progress-bar">
        <div 
          className={`progress-fill ${getProgressColor()}`} 
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export const StatusBar = () => {
  const { stats } = useGameStore();

  return (
    <div className="card-soft p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">当前状态</h3>
        <div className="flex items-center gap-1">
          <Flower2 className="w-4 h-4 text-rose-400" />
          <span className="text-sm font-semibold text-rose-500">{stats.flowers}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <StatItem 
          icon={Droplets} 
          label="水分负担" 
          value={stats.waterLoad}
          color="text-blue-500"
          bgColor="bg-blue-50"
          isNegative
        />
        <StatItem 
          icon={UtensilsCrossed} 
          label="饮食风险" 
          value={stats.dietRisk}
          color="text-orange-500"
          bgColor="bg-orange-50"
          isNegative
        />
        <StatItem 
          icon={Battery} 
          label="体力" 
          value={stats.energy}
          color="text-green-500"
          bgColor="bg-green-50"
        />
        <StatItem 
          icon={Heart} 
          label="情绪支持" 
          value={stats.emotionalSupport}
          color="text-pink-500"
          bgColor="bg-pink-50"
        />
        <StatItem 
          icon={Users} 
          label="生活参与度" 
          value={stats.lifeParticipation}
          color="text-purple-500"
          bgColor="bg-purple-50"
        />
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="p-1.5 rounded-full bg-rose-50">
                <Flower2 className="w-3.5 h-3.5 text-rose-500" />
              </div>
              <span className="text-xs font-medium text-gray-600">小红花</span>
            </div>
            <span className="text-xs font-semibold text-rose-500">{stats.flowers}</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill bg-rose-400" 
              style={{ width: `${Math.min(stats.flowers * 20, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
