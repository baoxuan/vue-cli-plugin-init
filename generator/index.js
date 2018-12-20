//注入或是修改项目中文件
module.exports = (api, options, rootOptions) => {
  // 修改 package.json
  // 安装一些基础库
  api.extendPackage({
    dependcies: {
      "axios": "^0.18.0"
    }
  })

  if (options.vuex) {
    require('./vuex')(api, options)
  }
}