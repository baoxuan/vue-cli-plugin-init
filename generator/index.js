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
  api.render('./template')
  //负责具体处理模板项目中的文件
  api.postProcessFIles(files => {
    const main = files['src/main.js']
    if(main){
      const lines = main.split(/\r?\n/g).reverse()
      const lastImportIndex = lines.findIndex(line => line.match(/^import/))

      lines[lastImportIndex] += `\nimport './reset.css'`
      main = lines.reverse().join('\n')
    }
  })
}