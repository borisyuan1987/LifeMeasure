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
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adult%20picture%20book%20illustration%2C%20warm%20gentle%20style%2C%20chinese%20male%2035%20years%20old%20sitting%20on%20bench%20outside%20dialysis%20center%2C%20soft%20morning%20sunlight%2C%20calm%20waiting%20moment%2C%20cream%20white%20and%20warm%20beige%20tones%2C%20hand%20drawn%20texture%2C%20paper%20grain%2C%20medical%20humanitarian%20care%20theme%2C%20mobile%20vertical%20layout%2C%20no%20blood%2C%20no%20scary%20elements&image_size=portrait_16_9'
  },
  {
    day: 2,
    title: '周二 · 工作日常',
    description: '同事间的温暖互动',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adult%20picture%20book%20illustration%2C%20warm%20gentle%20style%2C%20chinese%20male%20office%20worker%20having%20afternoon%20tea%20with%20colleagues%2C%20office%20break%20room%2C%20soft%20natural%20light%2C%20friendly%20conversation%2C%20cream%20white%20and%20warm%20orange%20tones%2C%20hand%20drawn%20texture%2C%20paper%20grain%2C%20mobile%20vertical%20layout&image_size=portrait_16_9'
  },
  {
    day: 3,
    title: '周三 · 亲子时光',
    description: '和女儿一起奔跑',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adult%20picture%20book%20illustration%2C%20warm%20gentle%20style%2C%20chinese%20father%20and%20young%20daughter%20running%20together%20on%20school%20playground%2C%20parent%20child%20sports%20day%2C%20sunny%20afternoon%2C%20happy%20moment%2C%20cream%20white%20and%20warm%20red%20orange%20tones%2C%20hand%20drawn%20texture%2C%20paper%20grain%2C%20mobile%20vertical%20layout&image_size=portrait_16_9'
  },
  {
    day: 4,
    title: '周四 · 朋友相聚',
    description: '火锅桌上的欢笑',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adult%20picture%20book%20illustration%2C%20warm%20gentle%20style%2C%20chinese%20male%20having%20hotpot%20dinner%20with%20friends%2C%20casual%20restaurant%2C%20warm%20lighting%2C%20laughter%20and%20conversation%2C%20cream%20white%20and%20warm%20orange%20tones%2C%20hand%20drawn%20texture%2C%20paper%20grain%2C%20mobile%20vertical%20layout&image_size=portrait_16_9'
  },
  {
    day: 5,
    title: '周五 · 学习与休息',
    description: '培训后的疲惫与收获',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adult%20picture%20book%20illustration%2C%20warm%20gentle%20style%2C%20chinese%20male%20studying%20in%20training%20classroom%2C%20taking%20notes%2C%20soft%20evening%20light%2C%20focused%20expression%2C%20cream%20white%20and%20soft%20blue%20tones%2C%20hand%20drawn%20texture%2C%20paper%20grain%2C%20mobile%20vertical%20layout&image_size=portrait_16_9'
  },
  {
    day: 6,
    title: '周六 · 家庭日',
    description: '和家人一起的周末',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adult%20picture%20book%20illustration%2C%20warm%20gentle%20style%2C%20chinese%20family%20preparing%20dinner%20together%2C%20kitchen%20scene%2C%20wife%20and%20daughter%20helping%2C%20warm%20home%20atmosphere%2C%20cream%20white%20and%20warm%20orange%20tones%2C%20hand%20drawn%20texture%2C%20paper%20grain%2C%20mobile%20vertical%20layout&image_size=portrait_16_9'
  },
  {
    day: 7,
    title: '周日 · 新的开始',
    description: '规划未来的旅行',
    url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adult%20picture%20book%20illustration%2C%20warm%20gentle%20style%2C%20chinese%20family%20looking%20at%20travel%20map%20together%2C%20Beijing%20tourist%20attractions%2C%20daughter%20pointing%20at%20Great%20Wall%2C%20hopeful%20planning%2C%20cream%20white%20and%20soft%20blue%20green%20tones%2C%20hand%20drawn%20texture%2C%20paper%20grain%2C%20mobile%20vertical%20layout&image_size=portrait_16_9'
  }
];

export const getImageForDay = (day: number): DayImage | undefined => {
  return dayImages.find(img => img.day === day);
};