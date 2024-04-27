
const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const VueSetupExtend =
  require("unplugin-vue-setup-extend-plus/webpack").default;
const port = process.env.port || process.env.npm_config_port || 8080; //npm run dev --port=8000

const globalSass = (config) => {
  const oneOfsMap = config.module.rule("scss").oneOfs.store;
  oneOfsMap.forEach((item) => {
    item
      .use("sass-resources-loader")
      .loader("sass-resources-loader")
      .options({
        resources: "./src/assets/style/global.scss", //相对路径
      })
      .end();
  });
};

module.exports = defineConfig({
  publicPath: "./",
  devServer: {
    open: true,
    proxy: "https://172.31.141.202:8818",
  },
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler: true, // 支持运行时模板方式编译
  productionSourceMap: process.env.NODE_ENV === "development" ? true : false, // 开发环境会开启sourceMap
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      VueSetupExtend({
        enableAutoExpose: true,
      }),
    ],
  },
  chainWebpack(config) {
    //打包去掉console
    config.optimization.minimizer("terser").tap((args) => {
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });
    //引入scss 全局变量
    globalSass(config);
    // 添加可视化工具 - 查看打包后的文件大小！npm run build --report
    config.when(
      process.env.NODE_ENV === "production" && process.env.npm_config_report,
      (config) => {
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
          .end();
        config.plugins.delete("prefetch");
      }
    );
  },
});
