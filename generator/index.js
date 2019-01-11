//注入或是修改项目中文件
// rootOptions  是整个的preset
module.exports = (api, options, rootOptions) => {
  // 修改 package.json
  // 安装一些基础库
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.0",
      "normalize.css": "^8.0.1"
    }
  })

  if (options.vw) {
    require('./vw')(api, options)
  }
  api.render('./template')
  api.postProcessFiles(files => {
    let main = files['src/main.js']
    if (main) {
      const lines = main.split(/\r?\n/g).reverse()
      const lastImportIndex = lines.findIndex(line => line.match(/^import/))

      lines[lastImportIndex] += `\nimport 'normalize.css'`
      main = lines.reverse().join('\n')
      files['src/main.js'] = main
    }
  })

}