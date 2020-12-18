const { override, fixBabelImports, addLessLoader } = require('customize-cra')
// const { getThemeVariables } = require('antd/dist/theme'); // 配置暗黑主题
module.exports = override(
    // 按需打包: 使用 babel-plugin-import
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true // 自动打包相关的样式 , true是编译源码的意思
    }),
    addLessLoader({
        lessOptions: {
            modifyVars:{
                '@primary-color': '#1DA57A' 
            },
            javascriptEnabled: true,
        },
    })
)