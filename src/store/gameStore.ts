import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, PlayerStats, Ending } from '@/types';
import { getEventsForDay, DIALYSIS_DAYS } from '@/data/events';

const INITIAL_STATS: PlayerStats = {
  waterLoad: 40,
  dietRisk: 35,
  energy: 70,
  emotionalSupport: 60,
  lifeParticipation: 65,
  flowers: 0,
};

interface GameStore extends GameState {
  startGame: () => void;
  makeChoice: (eventId: number, choiceId: string, choiceText: string, feedback: string, effects: Partial<PlayerStats>) => void;
  nextEvent: () => void;
  endDay: () => void;
  goToNextDay: () => void;
  calculateEnding: () => Ending;
  resetGame: () => void;
  getCurrentEvent: () => any;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      currentDay: 1,
      stats: INITIAL_STATS,
      completedEvents: [],
      diary: [],
      isGameStarted: false,
      isGameEnded: false,
      currentEventIndex: 0,

      startGame: () => {
        set({
          currentDay: 1,
          stats: { ...INITIAL_STATS },
          completedEvents: [],
          diary: [],
          isGameStarted: true,
          isGameEnded: false,
          currentEventIndex: 0,
        });
      },

      makeChoice: (eventId, choiceId, choiceText, feedback, effects) => {
        set((state) => {
          const newStats = { ...state.stats };
          Object.keys(effects).forEach((key) => {
            const statKey = key as keyof PlayerStats;
            const value = effects[statKey] || 0;
            newStats[statKey] = Math.max(0, Math.min(100, newStats[statKey] + value));
          });

          const dayDiary = state.diary.find(d => d.day === state.currentDay);
          const newEvents = dayDiary 
            ? [...dayDiary.events, { eventId, choiceId, choiceText, feedback }]
            : [{ eventId, choiceId, choiceText, feedback }];

          const newDiary = dayDiary
            ? state.diary.map(d => d.day === state.currentDay ? { ...d, events: newEvents } : d)
            : [...state.diary, { day: state.currentDay, events: newEvents, dialysisSettlement: false }];

          return {
            stats: newStats,
            completedEvents: [...state.completedEvents, eventId],
            diary: newDiary,
          };
        });
      },

      nextEvent: () => {
        set((state) => {
          const dayEvents = getEventsForDay(state.currentDay);
          const nextIndex = state.currentEventIndex + 1;
          
          if (nextIndex >= dayEvents.length) {
            return { currentEventIndex: -1 };
          }
          return { currentEventIndex: nextIndex };
        });
      },

      endDay: () => {
        set((state) => {
          if (!DIALYSIS_DAYS.includes(state.currentDay)) {
            return { currentEventIndex: -1 };
          }

          const newStats = { ...state.stats };
          newStats.waterLoad = Math.max(0, newStats.waterLoad - 20);
          newStats.dietRisk = Math.max(0, newStats.dietRisk - 10);
          newStats.energy = Math.max(0, newStats.energy - 10);

          const dayDiary = state.diary.find(d => d.day === state.currentDay);
          const newDiary = dayDiary
            ? state.diary.map(d => d.day === state.currentDay ? { ...d, dialysisSettlement: true } : d)
            : [...state.diary, { day: state.currentDay, events: [], dialysisSettlement: true }];

          return {
            stats: newStats,
            diary: newDiary,
            currentEventIndex: -1,
          };
        });
      },

      goToNextDay: () => {
        set((state) => {
          const nextDay = state.currentDay + 1;
          
          if (nextDay > 7) {
            return { 
              currentDay: nextDay,
              isGameEnded: true,
              currentEventIndex: -1 
            };
          }

          return {
            currentDay: nextDay,
            currentEventIndex: 0,
          };
        });
      },

      calculateEnding: (): Ending => {
        const { stats } = get();
        
        const endingA = 
          stats.waterLoad <= 55 &&
          stats.dietRisk <= 55 &&
          stats.energy >= 45 &&
          stats.emotionalSupport >= 60 &&
          stats.lifeParticipation >= 60 &&
          stats.flowers >= 4;

        if (endingA) {
          return {
            type: 'A',
            title: '找到新的节奏',
            description: '在这一周里，你学会了在治疗和生活之间找到平衡。你按时完成透析，也没有完全放弃与家人朋友的联系。身体管理虽然辛苦，但你逐渐找到了适合自己的节奏。每一朵小红花都是你用心生活的证明。'
          };
        }

        const endingC = 
          stats.waterLoad >= 85 ||
          stats.dietRisk >= 85 ||
          stats.energy <= 25 ||
          stats.emotionalSupport <= 25 ||
          stats.lifeParticipation <= 25;

        if (endingC) {
          return {
            type: 'C',
            title: '需要更多支持',
            description: '这一周过得并不容易。也许你还在适应新的生活节奏，也许身体的负担让你难以兼顾所有事情。请记住，你不是一个人。寻求帮助、调整节奏、允许自己慢下来，都是勇敢的选择。'
          };
        }

        return {
          type: 'B',
          title: '仍在寻找平衡',
          description: '生活还在继续，而你正在努力。这一周有收获也有遗憾，但最重要的是你没有放弃。慢病管理是一场马拉松，不是冲刺。给自己多一点时间和耐心，你正在走在正确的路上。'
        };
      },

      resetGame: () => {
        set({
          currentDay: 1,
          stats: { ...INITIAL_STATS },
          completedEvents: [],
          diary: [],
          isGameStarted: false,
          isGameEnded: false,
          currentEventIndex: 0,
        });
      },

      getCurrentEvent: () => {
        const { currentDay, currentEventIndex } = get();
        const dayEvents = getEventsForDay(currentDay);
        return dayEvents[currentEventIndex] || null;
      },
    }),
    {
      name: 'life-measure-game',
      partialize: (state) => ({
        currentDay: state.currentDay,
        stats: state.stats,
        completedEvents: state.completedEvents,
        diary: state.diary,
        isGameStarted: state.isGameStarted,
        isGameEnded: state.isGameEnded,
        currentEventIndex: state.currentEventIndex,
      }),
    }
  )
);
