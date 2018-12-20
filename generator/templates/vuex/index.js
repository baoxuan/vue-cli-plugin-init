//注入或是修改项目中文件
module.exports = (api, options, rootOptions) => {
  // 修改 package.json
  // 安装一些基础库
  // api.extendPackage:  负责给初始化项目中的package.json 添加依赖并安装
  api.extendPackage({
    dependcies: {
      "vuex": "^3.0.1"
    }
  })
  // api.render: 负责将模板项目中提取定义好的目录和文件拷贝到初始化项目中
  // 传地址字符串时，render函数会将你所传目录内的所有文件覆盖初始化项目中的src目录下的文件
  api.render('./template');
}