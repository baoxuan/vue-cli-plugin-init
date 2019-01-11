module.exports = {
  baseUrl: '.',
  devServer: {
    proxy: {
      '/': {
        target: '/',
        ws: false,
        changOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
      }
    }
  }
}