import { DefaultTheme } from "vitepress/theme-without-fonts";

const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "🧭 知识手册",
    items: [
      { text: "🎐 千里之行", link: "/guide/" },
      {
        text: "💽 初识硬件",
        items: [
          { text: "💾 CPU", link: "/guide/hw/cpu" },
          {
            text: "🔩 GPU",
            link: "/guide/hw/gpu",
          },
        ],
      },
      {
        text: "🛠️ 初识软件",
        items: [
          { text: "⚙️ 操作系统", link: "/guide/sw/os" },
          { text: "🌸 驱动程序", link: "/guide/sw/driver" },
        ],
      },
    ],
  },
  {
    text: "📝 计划待办",
    items: [
      {
        text: "💽 A",
        items: [
          { text: "📐 A1", link: "/todo/a1" },
          { text: "🎯 A2", link: "/todo/a2" },
        ],
      },
      {
        text: "🔬 B",
        items: [
          { text: "🎹 B1", link: "/todo/b1" },
          { text: "🖥️ B2", link: "/todo/b2" },
        ],
      },
    ],
  },
  {
    text: "🍰 写在后面",
    items: [
      { text: "贡献者公约", link: "/postface/contributor-covenant" },
      { text: "贡献指南", link: "/postface/contribute" },
      { text: "版权说明", link: "/postface/copyright" },
      { text: "附录", link: "/postface/about" },
    ],
  },
];

export default navConfig;
