import { DefaultTheme } from "vitepress/theme-without-fonts";

const sidebarConfig: DefaultTheme.Sidebar = {
  "/guide/": [
    {
      text: "🎐 千里之行",
      link: "/guide/",
    },
    {
      text: "🌱 新手上路",
      items: [
        {
          text: "💽 初识硬件",
          items: [
            {
              text: "CPU",
              link: "/guide/hw/cpu",
            },
            { text: "GPU", link: "/guide/hw/gpu" },
          ],
        },
      ],
    },
    {
      text: "🛠️ 初识软件",
      items: [
        {
          text: "⚙️ 可选配置",
          items: [
            {
              text: "操作系统",
              link: "/guide/sw/os",
            },
            {
              text: "驱动程序",
              link: "/guide/sw/driver",
            },
          ],
        },
      ],
    },
  ],
  "/todo/": [
    {
      text: "💽 XXX",
      items: [
        {
          text: "📐 A",
          items: [
            { text: "A1", link: "/todo/a1" },
            { text: "A2", link: "/todo/a2" },
          ],
        },
        {
          text: "🎯 B",
          items: [
            { text: "B1", link: "/todo/b1" },
            { text: "B2", link: "/todo/b2" },
          ],
        },
      ],
    },
  ],
};

export default sidebarConfig;
