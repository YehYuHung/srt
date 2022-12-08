const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/srt/",
  // Compile Error
  // https://cli.vuejs.org/config/#runtimecompiler
  runtimeCompiler: true,
})
