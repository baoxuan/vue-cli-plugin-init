//注入或是修改项目中文件
// rootOptions  是整个的preset
module.exports = (api, options, rootOptions) => {
  // 修改 package.json
  // 安装一些基础库
  api.extendPackage({
    dependcies: {
      "axios": "^0.18.0"
    }
  })

  if (options.vw) {
    require('./vw')(api, options)
  }
  if (options.reset) {
    require('./reset')(api, options)
  }
  api.render('./template')

}