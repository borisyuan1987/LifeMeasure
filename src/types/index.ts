export interface PlayerStats {
  waterLoad: number;
  dietRisk: number;
  energy: number;
  emotionalSupport: number;
  lifeParticipation: number;
  flowers: number;
}

export interface Choice {
  id: string;
  text: string;
  effects: Partial<PlayerStats>;
  feedback: string;
}

export interface GameEvent {
  id: number;
  day: number;
  title: string;
  description: string;
  choices: Choice[];
}

export interface DayDiary {
  day: number;
  events: {
    eventId: number;
    choiceId: string;
    choiceText: string;
    feedback: string;
  }[];
  dialysisSettlement: boolean;
}

export interface GameState {
  currentDay: number;
  stats: PlayerStats;
  completedEvents: number[];
  diary: DayDiary[];
  isGameStarted: boolean;
  isGameEnded: boolean;
  currentEventIndex: number;
}

export type EndingType = 'A' | 'B' | 'C';

export interface Ending {
  type: EndingType;
  title: string;
  description: string;
}
