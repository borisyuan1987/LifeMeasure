import { GameEvent } from '@/types';

export const events: GameEvent[] = [
  {
    id: 1,
    day: 1,
    title: '透析时间到了',
    description: '今天是周一，也是你的透析日。下午需要前往透析中心，但你也收到朋友的聚会消息。新的生活节奏，似乎从今天真正开始了。',
    choices: [
      {
        id: '1A',
        text: '按时透析',
        effects: { waterLoad: -25, dietRisk: -10, energy: -10, emotionalSupport: 0, lifeParticipation: -10, flowers: 0 },
        feedback: '你按时去了透析中心。身体负担减轻了，但你也错过了朋友的聚会。你开始意识到：治疗不是生活之外的事情，而会重新安排你的每一天。'
      },
      {
        id: '1B',
        text: '晚一点再去',
        effects: { waterLoad: 15, dietRisk: 8, energy: 0, emotionalSupport: 5, lifeParticipation: 10, flowers: 0 },
        feedback: '你参加了一会儿聚会，像以前一样和朋友聊天。但整个过程中，你一直惦记着还没完成的透析。'
      },
      {
        id: '1C',
        text: '线上参加聚会后再透析',
        effects: { waterLoad: 0, dietRisk: 0, energy: -15, emotionalSupport: 8, lifeParticipation: 5, flowers: 0 },
        feedback: '你选择线上和朋友打了招呼，然后赶去透析。你尽力照顾了关系，也照顾了治疗，但一天下来真的很累。'
      }
    ]
  },
  {
    id: 2,
    day: 2,
    title: '同事的奶茶邀请',
    description: '下班后，同事说："今天大家都点奶茶，你也来一杯吧？就一杯，没关系的。"你看着手机上的点单页面，犹豫了一下。',
    choices: [
      {
        id: '2A',
        text: '点正常奶茶',
        effects: { waterLoad: 15, dietRisk: 5, energy: 0, emotionalSupport: 10, lifeParticipation: 10, flowers: 0 },
        feedback: '你和同事一起喝了奶茶，聊天的感觉很轻松。但你也知道，今天的水分负担又增加了一些。'
      },
      {
        id: '2B',
        text: '点小杯奶茶',
        effects: { waterLoad: 8, dietRisk: 0, energy: 0, emotionalSupport: 5, lifeParticipation: 5, flowers: 0 },
        feedback: '你点了一杯小杯，慢慢喝。这不是完美选择，但至少是一次现实中的折中。'
      },
      {
        id: '2C',
        text: '说明原因，不点奶茶',
        effects: { waterLoad: 0, dietRisk: 0, energy: 0, emotionalSupport: -3, lifeParticipation: 12, flowers: 1 },
        feedback: '你有点不好意思地解释了自己的情况。同事愣了一下，然后说："那下次我们换个不喝东西的活动。"你获得了一朵小红花。'
      }
    ]
  },
  {
    id: 3,
    day: 2,
    title: '下班后的晚餐',
    description: '晚上加班结束，你已经很饿了。回家做饭很费劲，外卖又很难完全放心。便利店的货架就在眼前。',
    choices: [
      {
        id: '3A',
        text: '泡面 + 火腿肠',
        effects: { waterLoad: 0, dietRisk: 20, energy: 10, emotionalSupport: 0, lifeParticipation: 0, flowers: 0 },
        feedback: '这是最快的选择。你很快恢复了一点体力。但高盐和加工食品让饮食风险明显上升。'
      },
      {
        id: '3B',
        text: '回家自己做饭',
        effects: { waterLoad: 0, dietRisk: 5, energy: -8, emotionalSupport: 5, lifeParticipation: 0, flowers: 0 },
        feedback: '你回家简单做了一顿饭。饭菜清淡一些，但忙完以后，你也更疲惫了。'
      },
      {
        id: '3C',
        text: '点一份相对清淡的外卖',
        effects: { waterLoad: 0, dietRisk: 8, energy: 5, emotionalSupport: 0, lifeParticipation: 0, flowers: 0 },
        feedback: '你选择了一份相对清淡的外卖。它不是最理想的健康选择，但在疲惫的工作日里，这已经是你能做到的平衡。'
      }
    ]
  },
  {
    id: 4,
    day: 3,
    title: '工作会议撞上透析',
    description: '今天下午是透析时间。但项目组临时安排了一个重要会议，你负责的测试结果也需要在会上说明。你看着日历上的两个安排，陷入沉默。',
    choices: [
      {
        id: '4A',
        text: '准时透析',
        effects: { waterLoad: -25, dietRisk: -10, energy: 0, emotionalSupport: -5, lifeParticipation: -15, flowers: 0 },
        feedback: '你准时去了透析中心。身体负担减轻了。但会议结束后，你发现一些关键讨论已经完成，心里有些失落。'
      },
      {
        id: '4B',
        text: '参加完整会议',
        effects: { waterLoad: 15, dietRisk: 10, energy: -10, emotionalSupport: 5, lifeParticipation: 15, flowers: 0 },
        feedback: '你完整参加了会议，项目进展没有受到影响。但会议期间，你一直担心身体状态，结束后也明显更疲惫了。'
      },
      {
        id: '4C',
        text: '申请远程参加',
        effects: { waterLoad: 0, dietRisk: 0, energy: -15, emotionalSupport: 8, lifeParticipation: 10, flowers: 0 },
        feedback: '你向主管说明情况，申请远程参加部分会议。你尽量兼顾了治疗和工作，但两边切换让你非常疲惫。'
      }
    ]
  },
  {
    id: 12,
    day: 3,
    title: '炎热的通勤路',
    description: '下班时天气闷热，地铁里又拥挤又燥。你的口渴越来越明显，而今天剩余的饮水安排已经不多。回家还有四十分钟。',
    choices: [
      {
        id: '12A',
        text: '买一瓶冰饮，慢慢喝',
        effects: { waterLoad: 15, dietRisk: 4, energy: 5, emotionalSupport: 8, lifeParticipation: 3, flowers: 0 },
        feedback: '第一口冰饮让你整个人都放松下来。但看着瓶中剩下的液体，你又开始默默计算今天的总量。'
      },
      {
        id: '12B',
        text: '只喝几小口，把剩余部分带回家',
        effects: { waterLoad: 7, dietRisk: 2, energy: 2, emotionalSupport: 3, lifeParticipation: 0, flowers: 0 },
        feedback: '你拧紧瓶盖，把饮料放回包里。口渴还在，但至少不再像刚才那样让人难以忍受。'
      },
      {
        id: '12C',
        text: '提前下车，到商场休息降温',
        effects: { waterLoad: 2, dietRisk: 0, energy: -4, emotionalSupport: 5, lifeParticipation: -6, flowers: 0 },
        feedback: '你在商场的长椅上坐了一会儿，等身体慢慢凉下来。回到家时，女儿已经吃完了晚饭。'
      }
    ]
  },
  {
    id: 13,
    day: 3,
    title: '女儿学校的亲子运动会',
    description: '女儿学校举办亲子运动会，项目包括接力跑、双人运球和亲子障碍赛。女儿很早就报了名，每天回家都在练习。她对你说："我们不一定要拿第一，我只是想和爸爸一组。"',
    choices: [
      {
        id: '13A',
        text: '和女儿参加完整比赛',
        effects: { waterLoad: 5, dietRisk: 2, energy: -20, emotionalSupport: 15, lifeParticipation: 18, flowers: 0 },
        feedback: '你和女儿一起站上了起跑线。跑到后半段时，你的脚步明显慢了下来。你们没有拿到名次，但冲过终点后，女儿紧紧抱住你说："爸爸，我们完成了！"回家后，你几乎没有力气吃晚饭。快乐是真的，疲惫也是真的。'
      },
      {
        id: '13B',
        text: '参加低强度项目，把接力跑交给家人',
        effects: { waterLoad: 3, dietRisk: 1, energy: -10, emotionalSupport: 10, lifeParticipation: 12, flowers: 1 },
        feedback: '你和女儿一起完成了双人运球。接力开始时，你站在场边为她加油。她偶尔回头看你，似乎有一点遗憾，但比赛结束后，她还是拉你去拍了合照。你没有完成所有项目，却没有完全缺席。你获得一朵"小红花"：一起调整。陪伴不一定意味着完成所有事情，也可以意味着一起改变原来的计划。'
      },
      {
        id: '13C',
        text: '不参加比赛，担任班级摄影和加油志愿者',
        effects: { waterLoad: 2, dietRisk: 0, energy: -5, emotionalSupport: 6, lifeParticipation: 8, flowers: 1 },
        feedback: '你负责为班级拍照，也在女儿比赛时大声为她加油。她跑过你身边时笑了一下，但活动结束后还是小声问："爸爸，下次我们能一起参加吗？"你拍下了很多精彩瞬间，却没有一张是你们一起比赛的照片。你获得一朵"小红花"：换一种参与。保护身体并不等于完全退出生活，但替代方案也未必能消除孩子的失落。'
      }
    ]
  },
  {
    id: 5,
    day: 4,
    title: '午后的水果',
    description: '午后，你感到有些口渴。桌上有香蕉、橙汁、苹果和一小杯冰块。这些看起来都很普通，但对你来说，每个选择都要多想一步。',
    choices: [
      {
        id: '5A',
        text: '香蕉和橙汁',
        effects: { waterLoad: 10, dietRisk: 15, energy: 0, emotionalSupport: 5, lifeParticipation: 0, flowers: 0 },
        feedback: '香蕉和橙汁让你感觉舒服了一点。但这也让饮食风险和水分负担同时上升。'
      },
      {
        id: '5B',
        text: '吃一个苹果',
        effects: { waterLoad: 0, dietRisk: 3, energy: 0, emotionalSupport: 3, lifeParticipation: 0, flowers: 0 },
        feedback: '你选择了苹果。它不像橙汁那样畅快，但至少是一个更稳妥的选择。'
      },
      {
        id: '5C',
        text: '含一小块冰，慢慢缓解口渴',
        effects: { waterLoad: 2, dietRisk: 0, energy: 0, emotionalSupport: -2, lifeParticipation: 0, flowers: 1 },
        feedback: '你含着一小块冰，慢慢等口渴过去。这个选择有点委屈，但也是一种自我守护。你获得了一朵小红花。'
      }
    ]
  },
  {
    id: 6,
    day: 4,
    title: '老朋友的火锅局',
    description: '老朋友发来消息："这周大家好不容易都有空，晚上火锅走起！"你已经很久没有和他们一起吃饭了。',
    choices: [
      {
        id: '6A',
        text: '正常参加',
        effects: { waterLoad: 15, dietRisk: 20, energy: 0, emotionalSupport: 12, lifeParticipation: 15, flowers: 0 },
        feedback: '这一晚，你像从前一样和朋友说笑。但火锅的重口味和饮水，让身体管理变得更困难。'
      },
      {
        id: '6B',
        text: '清淡参与，少喝汤',
        effects: { waterLoad: 5, dietRisk: 8, energy: 0, emotionalSupport: 8, lifeParticipation: 10, flowers: 0 },
        feedback: '你去了火锅局，但尽量选择清淡食物，也少喝汤。朋友们有些不解，但你还是参与了这次聚会。'
      },
      {
        id: '6C',
        text: '提议改成散步聊天',
        effects: { waterLoad: 0, dietRisk: 0, energy: -5, emotionalSupport: 10, lifeParticipation: 8, flowers: 1 },
        feedback: '你试着提议换一种见面方式。朋友沉默了几秒，然后说："也行，我们边走边聊。"你获得了一朵小红花。'
      }
    ]
  },
  {
    id: 11,
    day: 5,
    title: '难得的升职培训',
    description: '公司开放了一个内部培训名额，课程可能帮助你争取下一次晋升。培训连续三晚进行。',
    choices: [
      {
        id: '11A',
        text: '参加全部培训',
        effects: { waterLoad: 4, dietRisk: 5, energy: -18, emotionalSupport: 7, lifeParticipation: 15, flowers: 0 },
        feedback: '你重新感受到学习新东西的兴奋。但第三晚回家时，你坐在玄关很久，才有力气站起来。'
      },
      {
        id: '11B',
        text: '只参加最重要的一晚',
        effects: { waterLoad: 2, dietRisk: 3, energy: -8, emotionalSupport: 4, lifeParticipation: 8, flowers: 0 },
        feedback: '你选择了最重要的一场课程，也提前向讲师索取了资料。这是一个折中的决定，但你仍担心自己是否错过了关键内容。'
      },
      {
        id: '11C',
        text: '放弃本期培训，和主管讨论下一次机会',
        effects: { waterLoad: -3, dietRisk: -3, energy: 10, emotionalSupport: -5, lifeParticipation: -10, flowers: 0 },
        feedback: '主管答应下次提前通知你，但没有给出明确时间。你知道这是更稳妥的决定，却还是会想："如果我没有生病呢？"'
      }
    ]
  },
  {
    id: 7,
    day: 5,
    title: '透析后的疲惫',
    description: '今天又是透析日。治疗结束后，你感到身体发沉。本来晚上朋友还约你参加一个小活动。你很想去，但也真的很累。',
    choices: [
      {
        id: '7A',
        text: '回家休息',
        effects: { waterLoad: 0, dietRisk: 0, energy: 15, emotionalSupport: 0, lifeParticipation: -8, flowers: 0 },
        feedback: '你回家休息，身体终于缓了一些。但看到朋友们发来的照片，你心里还是有点空落落的。'
      },
      {
        id: '7B',
        text: '坚持参加活动',
        effects: { waterLoad: 0, dietRisk: 0, energy: -15, emotionalSupport: 5, lifeParticipation: 12, flowers: 0 },
        feedback: '你还是去了。朋友们见到你很高兴。但活动结束后，你几乎没有力气说话。'
      },
      {
        id: '7C',
        text: '告诉朋友自己太累',
        effects: { waterLoad: 0, dietRisk: 0, energy: 0, emotionalSupport: 10, lifeParticipation: 5, flowers: 1 },
        feedback: '你告诉朋友："我今天透析后有点累，可能来不了。"朋友说："那你好好休息，下次我们安排轻松一点的。"你获得了一朵小红花。'
      }
    ]
  },
  {
    id: 14,
    day: 6,
    title: '家务堆成了小山',
    description: '洗衣篮满了，厨房也需要整理。家人最近同样很忙，你知道这些事情不能一直放着。但透析后的疲惫还没有完全消退。',
    choices: [
      {
        id: '14A',
        text: '全部一次做完',
        effects: { waterLoad: 0, dietRisk: 0, energy: -18, emotionalSupport: 7, lifeParticipation: 12, flowers: 0 },
        feedback: '房间终于恢复整洁，你看着收好的衣物，心里踏实了一些。但坐下之后，你很久都不想再站起来。'
      },
      {
        id: '14B',
        text: '只完成最必要的家务',
        effects: { waterLoad: 0, dietRisk: 0, energy: -8, emotionalSupport: 3, lifeParticipation: 6, flowers: 0 },
        feedback: '你只洗了明天需要穿的衣服，也简单收拾了厨房。事情没有全部完成，但至少明天不会手忙脚乱。'
      },
      {
        id: '14C',
        text: '请家人分担，自己先休息',
        effects: { waterLoad: 0, dietRisk: 0, energy: 10, emotionalSupport: 8, lifeParticipation: -4, flowers: 0 },
        feedback: '家人没有责怪你，只是把家务分成了几份。你躺下休息时，既感到轻松，也有一点愧疚。'
      }
    ]
  },
  {
    id: 8,
    day: 6,
    title: '家人的大补汤',
    description: '周六晚上，家人特意炖了一大碗汤。他们担心你身体虚，认真地说："多喝点，补补身体。"你知道这是爱，但也知道今天的水分需要控制。',
    choices: [
      {
        id: '8A',
        text: '全部喝掉',
        effects: { waterLoad: 20, dietRisk: 10, energy: 0, emotionalSupport: 10, lifeParticipation: 0, flowers: 0 },
        feedback: '你不想让家人失望，于是把汤喝完。家人很开心，但你的水分负担也明显上升了。'
      },
      {
        id: '8B',
        text: '只喝一点',
        effects: { waterLoad: 8, dietRisk: 0, energy: 0, emotionalSupport: 5, lifeParticipation: 0, flowers: 0 },
        feedback: '你喝了一小碗。家人有些疑惑，但你暂时没有解释太多。'
      },
      {
        id: '8C',
        text: '和家人一起学习饮食知识',
        effects: { waterLoad: 0, dietRisk: 0, energy: 0, emotionalSupport: 12, lifeParticipation: 5, flowers: 1 },
        feedback: '你没有直接拒绝，而是和家人一起看了饮食提示。他们第一次意识到，"补身体"也需要适合你的方式。你获得了一朵小红花。'
      }
    ]
  },
  {
    id: 9,
    day: 6,
    title: '周末家庭活动',
    description: '周末，家人想一起出门走走。女儿也期待了很久，她问："爸爸，你今天能和我们一起去吗？"你看着她，心里有些犹豫。',
    choices: [
      {
        id: '9A',
        text: '不出门，在家休息',
        effects: { waterLoad: 0, dietRisk: 0, energy: 10, emotionalSupport: 0, lifeParticipation: -10, flowers: 0 },
        feedback: '你留在家里休息，身体轻松了一点。但你也知道，女儿有些失望。'
      },
      {
        id: '9B',
        text: '短时间参加',
        effects: { waterLoad: 0, dietRisk: 0, energy: -5, emotionalSupport: 8, lifeParticipation: 8, flowers: 0 },
        feedback: '你陪家人出门走了一小段。时间不长，但女儿一路牵着你的手。'
      },
      {
        id: '9C',
        text: '全程参加',
        effects: { waterLoad: 0, dietRisk: 0, energy: -15, emotionalSupport: 12, lifeParticipation: 15, flowers: 0 },
        feedback: '你完整参加了家庭活动。这一天很快乐，但回家后，你明显感觉身体已经透支。'
      }
    ]
  },
  {
    id: 10,
    day: 7,
    title: '新病友的提问',
    description: '周日晚上，透析群里有一位新病友问："我是不是以后什么都不能吃、什么都不能做了？"你想起这一周的自己。',
    choices: [
      {
        id: '10A',
        text: '不回复',
        effects: { waterLoad: 0, dietRisk: 0, energy: 0, emotionalSupport: 0, lifeParticipation: 0, flowers: 0 },
        feedback: '你看到了消息，但没有回复。也许你还没有准备好成为那个安慰别人的人。'
      },
      {
        id: '10B',
        text: '简单回复一句',
        effects: { waterLoad: 0, dietRisk: 0, energy: 0, emotionalSupport: 5, lifeParticipation: 0, flowers: 0 },
        feedback: '你回复："慢慢来，先听医生和护士的建议。"这句话不长，但对刚开始的人来说，也许已经很重要。'
      },
      {
        id: '10C',
        text: '分享自己的这一周',
        effects: { waterLoad: 0, dietRisk: 0, energy: 0, emotionalSupport: 10, lifeParticipation: 10, flowers: 2 },
        feedback: '你认真分享了自己的经验：哪些事情需要遵医嘱，哪些地方可以慢慢调整，哪些时候不要一个人硬撑。你发现，自己也开始有力量照亮别人。你获得了两朵小红花。'
      }
    ]
  },
  {
    id: 15,
    day: 7,
    title: '女儿想去北京',
    description: '女儿的暑假到了。她已经念叨了很久，想去北京看看故宫、长城和课本里的天安门。她把想去的地方画在一张纸上，还特意在最上面写了一句："今年和爸爸妈妈一起去北京。"',
    choices: [
      {
        id: '15A',
        text: '按原计划去北京四天',
        effects: { waterLoad: 12, dietRisk: 14, energy: -18, emotionalSupport: 16, lifeParticipation: 18, flowers: 0 },
        feedback: '当女儿第一次站在故宫红墙前时，她兴奋地拉着你拍了很多照片。这几天，你尽量不让家人看出疲惫。晚上回到酒店后，你却总要一个人坐一会儿，重新计算第二天的饮食、休息和行程。旅行带来了快乐，也让身体承受了更多压力。'
      },
      {
        id: '15B',
        text: '提前协调治疗，把行程缩短为三天',
        effects: { waterLoad: 6, dietRisk: 7, energy: -14, emotionalSupport: 12, lifeParticipation: 13, flowers: 1 },
        feedback: '你提前咨询医护人员，并与家人一起重新安排了行程。长城没有去成，故宫也只走了一部分。女儿起初有些失望，但很快拿出地图说："没关系，剩下的地方我们下次再来。"这不是一次完全自由的旅行，却是全家一起学会配合新生活节奏的开始。你获得一朵"小红花"：共同规划。这朵花不是奖励某个"正确决定"，而是记录你愿意表达需求、家人愿意共同调整的过程。'
      },
      {
        id: '15C',
        text: '这次由妈妈陪女儿去，自己留在家里',
        effects: { waterLoad: -6, dietRisk: -5, energy: 10, emotionalSupport: -10, lifeParticipation: -14, flowers: 1 },
        feedback: '女儿和妈妈去了北京。她每天晚上都会给你打视频电话，给你看故宫的屋檐、长城的台阶和她新买的纪念册。你为她高兴，也认真听她讲完每一个细节。挂断电话后，房间忽然显得很安静。你知道自己保护了身体，也知道有些缺席无法用照片代替。'
      }
    ]
  }
];

export const getEventsForDay = (day: number): GameEvent[] => {
  return events.filter(e => e.day === day);
};

export const DIALYSIS_DAYS = [1, 3, 5];

export const WEEK_DAYS = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
