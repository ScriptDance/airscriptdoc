import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'


export default {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      title: 'AirScript',
      description: 'AirScript开发文档,Python自动化,Python脚本,Python游戏脚本',
    },
  },
  theme: defaultTheme({
    // 默认主题配置
    logo: '/img/logo.svg',
    colorMode:'auto',
    colorModeSwitch:true,
    home:'/',
    lastUpdated:true,
    lastUpdatedText:"更新日期",
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '新手引导',
        link: '/guide',
      },
      {
        text: '编程工具',
        link: '/tools',
      },
      {
        text: '开发文档',
        link: '/airapi',
      },
      {
        text: '教程',
        link: '/video',
      },
    ],
    sidebar: {
        '/guide': [
          {
            text: '新手任务',
            children: ['/guide/first.md','/guide/python.md',"/guide/api.md","/guide/appshop.md"],
          },
        ],
        '/tools': [
            {
              text: '',
              children: ['/tools/webide.md','/tools/pycharm.md',"/tools/vscode.md","/tools/open.md"],
            },
          ],
        '/airapi': [
          {
            text: '开发文档',
            children: [
                '/airapi/base.md',
                '/airapi/code.md',
                '/airapi/action.md',
                '/airapi/node.md',
                '/airapi/screen.md',
                '/airapi/tunner.md',
                '/airapi/data.md',
                '/airapi/intent.md',
                '/airapi/shell.md',
                '/airapi/file.md',
                '/airapi/system.md',
                '/airapi/control.md'
                
            ],
          },
        ]
      },
  }),
}