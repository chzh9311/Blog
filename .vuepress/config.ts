import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "焦白",
  description: "我从冲浪还被叫做冲浪的时候就开始冲浪了",
  bundler: viteBundler(),
  base: '/Blog/',
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/icon.png",
    author: "CabbaFi",
    authorAvatar: "/icon.png",
    lastUpdatedText: "",
	markdown: {
		math: {
			type: "mathjax",
		}
	},
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Categories", link: "/categories/lilunbiji/1.html" },
      { text: "Tags", link: "/tags/CV/1.html" },
      { text: "Gallery", link: "/gallery/"
        // children: [
        //   { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
        //   { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        // ],
      },
    ],
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
