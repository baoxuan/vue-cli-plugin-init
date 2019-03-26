//注入或是修改项目中文件
module.exports = (api, options, rootOptions) => {
  // 修改 package.json
  // 安装一些基础库
  // api.extendPackage:  负责给初始化项目中的package.json 添加依赖并安装
  api.extendPackage({
    dependencies: {
      "cssnano": "^4.1.4",
      "cssnano-preset-advanced": "^4.0.2",
      "postcss-aspect-ratio-mini": "0.0.2",
      "postcss-import": "^12.0.0",
      "postcss-px-to-viewport": "0.0.3",
      "postcss-url": "^8.0.0",
      "postcss-write-svg": "^3.0.1"
    },
    postcss: {
      plugins: {
        'postcss-write-svg': {
          utf8: false
        },
        cssnano: {
          preset: 'advanced',
          autoprefixer: false,
          'postcss-zindex': false
        },
        'postcss-px-to-viewport': {
          viewportWidth: 750,
          viewportHeight: 1334,
          unitPrecision: 5,
          viewportUnit: 'vw',
          selectorBlackList: [
            '.ignore',
            '.hairlines'
          ],
          minPixelValue: 1,
          mediaQuery: false
        }
      }
    }
  })
  // api.render: 负责将模板项目中提取定义好的目录和文件拷贝到初始化项目中
  // 传地址字符串时，render函数会将你所传目录内的所有文件覆盖初始化项目中的src目录下的文件
  // api.render('./template');
}