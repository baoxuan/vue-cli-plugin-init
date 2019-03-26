//注入或是修改项目中文件
module.exports = (api, options, rootOptions) => {
  // 修改 package.json
  // 安装一些基础库
  // api.extendPackage:  负责给初始化项目中的package.json 添加依赖并安装
  api.extendPackage({
    dependencies: {
      "postcss-px2rem": "^0.3.0",
    },
    postcss: {
      plugins: {
        'postcss-px2rem': {
          remUnit: 100
        }
      }
    }
  })
  api.render('./template')
  // api.injectImports(api.entryFile, `import 'amfe-flexible'`)
}