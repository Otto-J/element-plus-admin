const data = require('./data.json')

// todo 后续从 env 文件里读取
const repoName = 'element-plus-admin'
module.exports = {
  title: 'element-plus-admin',
  description: 'Always the element-plus latest version of admin project.',
  base: `/${repoName}`, // 请根据 readme 修改该参数
  lang: 'zh-CN',
  themeConfig: {
    repo: `Otto-J/${repoName}`, // 请修改此处指向
    docsDir: 'docs',

    sidebar: {
      '/': data,
    },
  },
}
