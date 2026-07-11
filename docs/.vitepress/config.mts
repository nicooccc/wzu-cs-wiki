import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',

  title: '温州大学计算机 Wiki',

  description: '温州大学计算机专业学习知识库',

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '学习路线', 
        items:[ 
          {
            text: "计算机学习路线",
            link: '/cmlearn/'
          },
          {
            text: "网络工程学习路线",
            link: '/ilearn/'
          },
          {
            text: "人工智能学习路线",
            link: '/ailearn/'
          },
          {
            text: "大数据学习路线",
            link: '/bigdatalearn/'
          }
        ]
      },
      { text: '计算机基础', link: '/basics/' },
      { text: '编程语言', link: '/language/' },
      { text: '专业课程', link: '/courses/' },
      { text: '校园内容', link: '/campus/' }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/你的GitHub用户名/wzu-cs-wiki'
      }
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2026 温州大学计算机 Wiki'
    }
  }
})