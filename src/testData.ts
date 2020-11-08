// 类型断言
// 好处就是后面写代码时，可以自动补全
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '这是第一篇文章',
    content: '受到疫情的影响，2019/20赛季，NBA整体收入已经大幅下降，这也导致2020/21赛季工资帽下降。2020/21赛季情况依旧无法改观，因为联盟还无法保证球迷能入场看球。联盟推算下赛季将损失超过40亿美元。如果新赛季延后到明年一月开打，甚至有可能再多损失5-10亿美元。',
    image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-11-02 12:30:10',
    columnId: 1
  },
  {
    id: 2,
    title: '这是第二篇文章',
    content: 'NBA为了应对损失，也在不停地想办法，也做出许多止损方案。近期甚至传出联盟准备将托管球员薪资，从10%上调到40%。如此真的执行的话，库里下一季将损失超过1720万美元的薪资，折合人民币，将近1.2亿元。',
    createdAt: '2020-11-02 12:30:10',
    columnId: 2
  },
  {
    id: 3,
    title: '这是第三篇文章',
    content: '根据劳资协议，球员年薪的10%将作为托管数额缴纳给联盟。若该年收入超支，这些钱将全数退还，但如果亏损或是收入不如预期，则这些金额将全归联盟所有。在萧华的经营下，联盟这些年来通过电视巨额转播合约，收入相当可观，各球队和球员也因此受益，薪资上限和合约都有显著成长。不过今年因为疫情，不开放球迷进场，也让整个联盟都陷入了巨大的经济危机，损失超过10亿美元。',
    image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-11-02 12:30:10',
    columnId: 3
  }
]
