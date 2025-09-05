// 根据后端接口生成前端请求和 TS 模型代码
export default {
  requestLibPath: "import request from '@/request'",
  schemaPath: './api-docs.json', // 使用本地文件，避免网络依赖
  serversPath: './src',
}
