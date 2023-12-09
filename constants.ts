// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Modest SYJun",
  description:
    "I am a student filled with passion for programming, hoping to write code as poetic as verse.",
  siteUrl: "https://syjun.vip/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop software",
  "I develop modern frontend apps",
  "I fall love in programming",
  "I design dynamic user experience",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/Java-S12138",
  bilibili: "https://space.bilibili.com/10995709",
  weibo: "https://weibo.com/u/5488111561",
  tiktok: "https://www.douyin.com/user/MS4wLjABAAAAR24LSFDX40Np9U7chM-8LZu0cRNHZ-qbIM84HBEPL3I",
  // medium: "https://alphaayush.medium.com/",
  instagram: "https://www.instagram.com/modestsyjun/",
  facebook: "https://www.facebook.com/profile.php?id=61552889498196",
  // dribbble: "https://dribbble.com/alphaayush",
  // behance: "https://www.behance.net/alphaayush/",
  twitter: "https://twitter.com/Java_S12138",
  // topmate: "https://www.topmate.io/alphaayush/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}


export const PROJECTS: IProject[] = [
  {
    name: "League of Legends Assistant",
    image: "/projects/typecho/frank.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "A software named Frank by SYJun",
    gradient:["#1F6582", "#86E1E4"],
    url: "https://www.yuque.com/java-s/frank",
    tech: [],
  },
  {
    name: "GoLang+BeeGo Copy mi.com",
    image: "/projects/typecho/beego.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "The practice of an enterprise-level project by using golang.",
    gradient:["#1F6582", "#86E1E4"],
    url: "https://java-syj.feishu.cn/wiki/D70kwV4YYi6WA3kKZ60cLQL2ndh?from=from_copylink",
    tech: [],
  },
  {
    name: "Web attack and defense contest",
    image: "/projects/typecho/antiSpider.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "The actual combat practice of anti-spider.",
    gradient:["#4188CE", "#9EDAE4"],
    url: "https://java-syj.feishu.cn/wiki/QuJ3wTPEhivRibkTKGFcD0D5nRe?from=from_copylink",
    tech: [],
  },
  {
    name: "LPL Match Data Show",
    image: "/projects/typecho/lplS.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "An algorithm for traversing or searching a tree or graph.",
    gradient:["#1F6582", "#86E1E4"],
    url: "https://java-syj.feishu.cn/wiki/LcxYw8VWeiteuEkwQOwcXNH2nhb?from=from_copylink",
    tech: [],
  },
  {
    name: "Binary Search",
    image: "/projects/typecho/binaryS.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "Find the middle element and judge its relation with the target.",
    gradient:["#b24c4c", "#ff6666"],
    url: "https://java-syj.feishu.cn/wiki/BrQ4w49O7ipUrqkybtgc1ok2njB?from=from_copylink",
    tech: [],
  },
  {
    name: "Depth First Search",
    image: "/projects/typecho/dfsA.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "An algorithm for traversing or searching a tree or graph.",
    gradient:["#1F6582", "#0288D1"],
    url: "https://java-syj.feishu.cn/wiki/LcxYw8VWeiteuEkwQOwcXNH2nhb?from=from_copylink",
    tech: [],
  },
  {
    name: "Greedy algorithm in Python practice",
    image: "/projects/typecho/targetSum.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "Break down the problem into several small problems.",
    gradient:["#142D46", "#2E4964"],
    url: "https://java-syj.feishu.cn/wiki/Mnf3wA9frihkg9k0igmc9owOnmb?from=from_copylink",
    tech: [],
  },
  {
    name: "Anti-Spider and its Countermeasures",
    image: "/projects/typecho/antiCrawl.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "Common anti-spider measures and solutions are sorted out.",
    gradient:["#685506", "#FFCB4C"],
    url: "https://java-syj.feishu.cn/wiki/K24JwsEUQihLlwkHtGdcFgQrnxb?from=from_copylink",
    tech: [],
  },
  {
    name: "Python analysis 5000+ Tik Tok",
    image: "/projects/typecho/analysisTiktok.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "Found that everyone likes this kind of video.",
    gradient:["#1F6582", "#86E1E4"],
    url: "https://java-syj.feishu.cn/wiki/OriPwE4gciDaRvkIU0ScBbtlnMe?from=from_copylink",
    tech: [],
  },
  {
    name: "Practice in data analysis",
    image: "/projects/typecho/movie.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "Screen out top 100 movies from 1 million pieces of data.",
    gradient:["#3A0000", "#771E1E"],
    url: "https://java-syj.feishu.cn/wiki/DCBIwei4ZizPkVkFeKfc1IIznHU?from=from_copylink",
    tech: [],
  },
  {
    name: "The Note Of Learning Pandas",
    image: "/projects/typecho/pandas.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "High-performance data analysis tools for the Python.",
    gradient:["#245B57", "#004741"],
    url: "https://java-syj.feishu.cn/wiki/BExWwHt3PirvZ6kF4r6caHNOnmc?from=from_copylink",
    tech: [],
  },
  {
    name: "Advanced Python Programming",
    image: "/projects/typecho/python_advanced.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "Life is short, you need Python. --- Guido van Rossum",
    gradient: ["#A5B2BC", "#1E1E1E"],
    url: "https://java-syj.feishu.cn/wiki/SqzZwyXYbiY63ekdvFlcCN6CnUe?from=from_copylink",
    tech: [],
  },
  {
    name: "Music-Download By Python",
    image: "/projects/typecho/music_download.png",
    blurImage: "/projects/blur/gateway-blur.jpg",
    description: "Netease, QQ, Kugou Music play online and Download.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://java-syj.feishu.cn/wiki/DBqIwuJ1ji228ike4necim4cnDg?from=from_copylink",
    tech: ["netease", "QQM", "kugou","python"],
  }
]

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Engineer 2 (Current)",
    size: ItemSize.SMALL,
    subtitle: "Frontend Engineering @ core team",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/hotstar.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motion Graphics (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch 🚀",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/akgec.svg",
    slideImage: "/timeline/farewell.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/ims-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/js-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/abes-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/ims-16.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-start.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";

export const tabContent = {
  me:
    "Hello, friends of the Internet! I am YuJun Sun from Chongqing, and go by SYJun. \n" +
    "I am a student filled with passion for programming, hoping to write code as poetic as verse.\n"+
    "I don't harbor grand ambitions, but merely wish to pursue endeavors which ignite my passion, and live a life aligned with my own desires.\n"+
    "\n\nWhy choose programming?\n"+
    "Authentic Happiness."+
    "\n\nProgramming as I understand it  o.O?\n"+
    "Some people regard programming as the key to open the career door.\n" +
    "Some people regard programming as an escalator for promotion and salary increase.\n" +
    "Others are just afraid of falling behind this era and passively accept programming.\n" +
    "Actually, the thing about Coding is not so complicated and mysterious.\n" +
    "Of course, it's not that simple.\n" +
    "Programming is just a tool to create and express yourself.\n" +
    "Just like musicians' music scores, painters' colors and writers' words.\n" +
    "However, there has never been a creative tool.\n" +
    "Can be as powerful and free as programming.\n" +
    "There has never been a tool like programming.\n" +
    "Chengde carries us wild and unconstrained style\n" +
    "Interest is to please your own existence.\n" +
    "Perhaps this is the meaning of learning programming.\n" +
    "She is not the golden key to her career, nor the escalator for promotion and salary increase.\n" +
    "She is the age of information explosion.\n" +
    "Give us science people a gift to express themselves and look into the distance.\n" +
    "\n" +
    "Once riding the strong wind as wished, breaking through ten thousand miles,\n" +
    "Then, one can unfurl the cloud sail directly, crossing the vast sea.",
  romance:"A very poor man lived with his wife. \n" +
    "One day, his wife, who had very long hair, asked him to buy her a comb for her hair to grow well and to be well groomed. \n" +
    "The man felt very sorry and said no. \n" +
    "He explained that he did not even have enough money to fix the strap of his watch he had just broken. \n" +
    "She did not insist on her request. \n" +
    "The man went to work and passed by a watch shop, sold his damaged watch at a low price, and went to buy a comb for his wife. \n" +
    "He came home in the evening with the comb in his hand, ready to give to his wife. \n" +
    "He was surprised when he saw his wife with a very short haircut. \n" +
    "She had sold her hair and was holding a new watch band. \n" +
    "Tears flowed simultaneously from their eyes, not for the futility of their actions, but for the reciprocity of their love. \n" +
    "Moral of the story To love is nothing. \n" +
    "To be loved is something but to love and to be loved by the one you love, that is everything. \n" +
    "Never take love for Granted. \n",
  friendship:"Six months ago, my neighbor asked me for the WiFi password. \n" +
    "I gave it to him because it didn't cost me anything, and because I got along with him. \n" +
    "Yesterday, I was walking home, and he was at the door. \n" +
    "I stopped to talk a bit, as usual, and he happily told me he now had Netflix. \n" +
    "At that I jokingly said, I work hard, barely have time to watch TV, but it's great if you could lend me your password to watch some shows.\n" +
    "I'd appreciate it. \n" +
    "A voice was heard in the distance. It was his wife sitting in the car. \n" +
    "We can't give it to him, because I'm the one who pays and I can't share it. \n" +
    "The most total silence reigned. The man hurriedly apologized. \n" +
    "I said there was no problem. \n" +
    "We kept talking about other things as they went in, he stayed out doing his stuff. \n" +
    "Shortly thereafter, his wife came out to call him. \n" +
    "She seemed very nervous. Said the television wasn't working. \n" +
    "My neighbor came into the house. I looked out the window. \n" +
    "After a few minutes, he and his wife came to call me and told me the WiFi wasn't working, that the password wasn't going in. \n" +
    "I looked at them and said, I changed my password because it's me paying and I can't share it. \n" +
    "The wife turned red and tried to say something, but I said, ma'am, I have my network, and you have your Netflix. \n" +
    "Everything is fine. Everyone is happy. \n" +
    "They turned around and left, closing the door. They never spoke to me again. \n" +
    "Here's the lesson I learned from it. \n" +
    "\n" +
    "Friendship must be mutual.\n" +
    "Love must be mutual. \n" +
    "Affection must be mutual. \n" +
    "Sharing must be mutual. \n",
  gorwth:"Father saw that his eleven year old son was crying silently, he asked him.\n" +
    "What's the matter? Son? \n" +
    "The young boy replied. My rich classmates mocked called me son of a gardener. \n" +
    "They said that my father lives only on the money he earns from watering and feeding plants for people. \n" +
    "The father paused for a moment, then said, come with me, son. \n" +
    "Let's plant some flowers. It might cheer you up. \n" +
    "He held his hand and walked him to the garden. \n" +
    "Then he took out some flower seeds and said, let's carry out an experiment. \n" +
    "We will plant two flowers separately. I will care for one, and you will care for the other. \n" +
    "I will water mine with clean water from the lake, but you will water yours with dirty water from the pond. \n" +
    "We shall see the outcome in the weeks to come. \n" +
    "The son was delighted as he joined his father in planting the flowers. \n" +
    "It took them some days to finally germinate the flower seeds. \n" +
    "They cared for them respectively and watched them. \n" +
    "Later on, the father brought his son to the garden and said to him, look at the two flowers and tell me your observation. \n" +
    "The boy responded, my flower looks better and healthier than yours. \n" +
    "How is that even possible when your water is clean? \n" +
    "The father smiled and said, that's because dirty water doesn't stop a plan from growing.\n" +
    "Rather, it serves as organic fertilizer to help it flourish. \n" +
    "You see, some there are some people who put you down in life, mock your dreams and throw dirt on you. \n" +
    "Always remember that there's nothing wrong with you. It is their ego they have to satisfy. \n" +
    "So don't let the harsh words from people affect you. \n" +
    "Instead, let it encourage you into being a better person, and doing so. \n" +
    "You will be like the plant, and will flourish even in the midst of dirt, like negativity in harsh words.\n",
  introspection:"A young man asked his grandfather, grandpa, how did you live in the past, without technology, without computers, without drones, without bitcoins, without Internet connection, without tvs, without air conditioners, without cars, without mobile phones?\n" +
    "Grandpa answered, just as your generation lives today, no prayers, no compassion, no respect, no good manners and right conduct, no real education, poor personality. \n" +
    "There is no human kindness. There is no shame. There is no modesty. There is no honesty. \n" +
    "We, the people born between the years 1930 to 1980, were the blessed ones. \n" +
    "Our lives are a living proof. While playing and riding a bike, we have never worn a helmet. \n" +
    "After school, we did our homework ourselves, and we always played in meadows until sunset. \n" +
    "We played with real friends, not virtual friends. \n" +
    "If we were thirsty, we would drink from the fountain, from the waterfalls, faucet water, not mineral water. \n" +
    "We never worried and get sick, even as we shared the same cup or plate with our friends. \n" +
    "We never gained weight by eating bread and pasta every day. \n" +
    "Nothing happened to our feet despite walking barefoot. \n" +
    "We never used food supplements to stay healthy. \n" +
    "We used to make our own toys and play with them. \n" +
    "Our parents were not rich. They gave us love, not material gifts. \n" +
    "We never had a cell phone, dvd psp game console, x-box, video games, pc, laptop, internet chat. \n" +
    "But we had true friends. \n" +
    "We visited our friends without being invited, and shared and enjoyed the food with their family. \n" +
    "Parents live nearby to take advantage of family time. \n" +
    "We may have had black and white photos, but you can find colorful memories in these photos. \n" +
    "We are a unique and the most understanding generation, because we are the last generation that listen to their parents, and we are also the 1st ones who are forced to listen to their children. \n" +
    "We are limited edition, take advantage of us, learn from us. \n" +
    "We are a treasure destined to disappear soon. \n"
}
