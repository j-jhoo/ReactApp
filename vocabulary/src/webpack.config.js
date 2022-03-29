module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "./dist/bundle.js",
  },

  // 웹팩의 출력을 디버깅하기 위해 소스 맵을 활성화합니다.
  devtool: "source-map",

  resolve: {
    // 확인 가능한 확장으로 '.ts'및 '.tsx'를 추가합니다.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      // '.ts'또는 '.tsx'확장자를 가진 모든 파일은 'ts-loader'에 의해 처리됩니다.
      { test: /\.tsx?$/, loader: "ts-loader" },

      // 모든 출력 '.js'파일에는 'source-map-loader'에 의해 재 처리 된 모든 소스 맵이 있습니다.
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },

  // 다른 옵션...
};
