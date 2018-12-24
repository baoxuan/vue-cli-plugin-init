//注入或是修改项目中文件
// rootOptions  是整个的preset
module.exports = (api, options, rootOptions) => {
  api.render('./template')
  //负责具体处理模板项目中的文件
  api.postProcessFiles(files => {
    let main = files['src/main.js']
    if(main){
      const lines = main.split(/\r?\n/g).reverse()
      const lastImportIndex = lines.findIndex(line => line.match(/^import/))

      lines[lastImportIndex] += `\nimport './reset.css'`
      main = lines.reverse().join('\n')
      files['src/main.js'] = main
    }
  })
}