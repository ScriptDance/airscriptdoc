
import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      title: 'AirScript',
      description: 'AirScript开发文档,Python自动化,Python脚本,Python游戏脚本',
    },
  },
  plugins: [
    docsearchPlugin({
      appId: "HD4DKOIMRS",
      apiKey: "0f31a30dff80c279f251176d11d718f9",
      indexName: "airscript"
    }),
    //   searchPlugin()
  ],
  theme: defaultTheme({
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
        text: '共享',
        children:[
          {
            text: 'Pip拓展',
            link: '/pipmodule',
          },
          {
          text: 'UI模版',
          link: '/resource',
          }
        ]
      },
      {
        text: '教程',
        link: '/video',
      },
      {
        text: '贡献者',
        link: '/hero',
      },
      {
        text: '官网',
        link: 'https://www.airscript.cn',
      }
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
                '/airapi/model.md',
                '/airapi/base.md',
                '/airapi/code.md',
                '/airapi/action.md',
                '/airapi/node.md',
                '/airapi/screen.md',
                '/airapi/ui.md',
                '/airapi/tunner.md',
                '/airapi/data.md',
                '/airapi/intent.md',
                '/airapi/shell.md',
                '/airapi/file.md',
                '/airapi/media.md',
                '/airapi/system.md',
                '/airapi/control.md'
                
            ],
          },
        ]
      },
  }),
}