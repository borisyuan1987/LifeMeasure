export interface DayImage {
  day: number;
  title: string;
  description: string;
  url: string;
}

export const dayImages: DayImage[] = [
  {
    day: 1,
    title: '周一 · 透析日',
    description: '治疗开始的日子',
    url: `${import.meta.env.BASE_URL}images/day1.png`,
  },
  {
    day: 2,
    title: '周二 · 工作日常',
    description: '同事间的温暖互动',
    url: `${import.meta.env.BASE_URL}images/day2.png`,
  },
  {
    day: 3,
    title: '周三 · 亲子时光',
    description: '和女儿一起奔跑',
    url: `${import.meta.env.BASE_URL}images/day3.png`,
  },
  {
    day: 4,
    title: '周四 · 朋友相聚',
    description: '火锅桌上的欢笑',
    url: `${import.meta.env.BASE_URL}images/day4.png`,
  },
  {
    day: 5,
    title: '周五 · 学习与休息',
    description: '培训后的疲惫与收获',
    url: `${import.meta.env.BASE_URL}images/day5.png`,
  },
  {
    day: 6,
    title: '周六 · 家庭日',
    description: '和家人一起的周末',
    url: `${import.meta.env.BASE_URL}images/day6.png`,
  },
  {
    day: 7,
    title: '周日 · 新的开始',
    description: '规划未来的旅行',
    url: `${import.meta.env.BASE_URL}images/day7.png`,
  },
];

export const getImageForDay = (day: number): DayImage | undefined => {
  return dayImages.find(img => img.day === day);
};
