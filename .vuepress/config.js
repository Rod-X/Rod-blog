module.exports = {
  "title": "Rod",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
    // 引入jquery
    // ["script", {
    //   "language": "javascript",
    //   "type": "text/javascript",
    //   "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    // }],
    // 引入鼠标点击脚本
    // ["script", {
    //   "language": "javascript",
    //   "type": "text/javascript",
    //   "src": "/js/MouseClickEffect.js"
    // }]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [{
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Notes",
        "icon": "reco-message",
        "link": "/docs/theme-reco/"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
          "text": "GitHub",
          "link": "https://github.com/rod-x",
          "icon": "reco-github"
        },
        { text: '掘金', link: 'https://juejin.cn/user/1196687670914888', icon: 'reco-juejin' },
      ]
      },
    ],
    // valineConfig: {
    //   appId: 'xxx', // your appId
    //   appKey: 'xxx', // your appKey
    // },
    "sidebar": {
      "/docs/theme-reco/": [{
          title: 'HTML&CSS',
          collapsable: true,
          children: [{
            title: 'BFC及其应用',
            path: '/docs/theme-reco/html&css/bfc'
          }, ]
        },
        {
          title: 'JS',
          collapsable: true,
          children: [{
            title: 'jsBFC及其应用',
            path: '/docs/theme-reco/js/bfc'
          }, ]
        },
        {
          title: 'Vue',
          collapsable: true,
          children: [{
            title: 'jsBFC及其应用',
            path: '/docs/theme-reco/vue/bfc'
          }, ]
        },
        {
          title: '前端工程化',
          collapsable: true,
          children: [{
            title: 'jsBFC及其应用',
            path: '/docs/theme-reco/engineering/bfc'
          }, ]
        },
        {
          title: '网络知识',
          collapsable: true,
          children: [{
            title: 'jsBFC及其应用',
            path: '/docs/theme-reco/network/bfc'
          }, ]
        },
        {
          title: '算法',
          collapsable: true,
          children: [{
            title: 'jsBFC及其应用',
            path: '/docs/theme-reco/algorithm/bfc'
          }, ]
        },
        {
          title: '其他',
          collapsable: true,
          children: [{
            title: 'jsBFC及其应用',
            path: '/docs/theme-reco/more/bfc'
          }, ]
        },
      ],

    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": false,
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Rod",
    "authorAvatar": "/avatar.png",
    "record": "",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    // [
    //   '@vuepress-reco/vuepress-plugin-bgm-player',{
    //    audios: [
    //       // 本地文件示例
    //       {
    //         name: '장가갈 수 있을까',
    //         artist: '咖啡少年',
    //         url: '/bgm/1.mp3',
    //         cover: '/bgm/1.jpg'
    //       },
    //       // 网络文件示例
    //       {
    //         name: '강남역 4번 출구',
    //         artist: 'Plastic / Fallin` Dild',
    //         url: 'https://assets.smallsunnyfox.com/music/2.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
    //       },
    //       {
    //         name: '用胳膊当枕头',
    //         artist: '최낙타',
    //         url: 'https://assets.smallsunnyfox.com/music/3.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
    //       }
    //     ] 
    //   }
    // ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    // [
    //   'vuepress-plugin-helper-live2d', {
    //     // 是否开启控制台日志打印(default: false)
    //     log: false,
    //     live2d: {
    //       // 是否启用(关闭请设置为false)(default: true)
    //       enable: true,
    //       // 模型名称(default: hibiki)>>>取值请参考：
    //       // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
    //       model: 'koharu',
    //       display: {
    //         position: "right", // 显示位置：left/right(default: 'right')
    //         width: 135, // 模型的长度(default: 135)
    //         height: 300, // 模型的高度(default: 300)
    //         hOffset: 65, //  水平偏移(default: 65)
    //         vOffset: 0, //  垂直偏移(default: 0)
    //       },
    //       mobile: {
    //         show: false // 是否在移动设备上显示(default: false)
    //       },
    //       react: {
    //         opacity: 0.8 // 模型透明度(default: 0.8)
    //       }
    //     }
    //   }
    // ]
  ]
}