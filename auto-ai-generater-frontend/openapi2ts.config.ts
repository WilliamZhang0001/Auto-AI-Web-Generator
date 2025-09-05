// 根据后端接口生成前端请求和 TS 模型代码
/*
export default {
  requestLibPath: "import request from '@/request'",
  schemaPath: 'http://localhost:8123/api/v3/api-docs', // 使用本地文件，避免网络依赖
  serversPath: './src',
}
*/

export default {
  schemaPath: 'https://petstore.swagger.io/v2/swagger.json',
  serversPath: './servers',
}
