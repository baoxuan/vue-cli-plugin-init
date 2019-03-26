# vue-cli-plugin-init
## use
安装在创建好的项目中

`
vue add init
`
### `prompts.js`  

用于插件初始化时调用， 用于导出一个用inquirer.js问题的数组， 这些答案对象会作为options参数被传递到插件`generator`
### `gengrator.js`
`gengrator`导出一个函数，这个函数接收三个参数:

`gengratorApi`

`api.extendPackage`  // 修改 `package.json` 里的字段
`api.render`   // 复制并用 ejs 渲染 `./template` 内所有的文件
`api.injectImports` // import 引用
