const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // rules: [
  //   {
  //     test: /\.s[ac]ss$/i,
  //     use: [
  //       // Creates `style` nodes from JS strings
  //       "style-loader",
  //       // Translates CSS into CommonJS
  //       "css-loader",
  //       // Compiles Sass to CSS
  //       "sass-loader",
  //     ],
  //   },
  // ],
  
})
// module.exports = {
 

//   css: {
//     loaderOptions: {
      
//       scss: {
//         additionalData: `@import "./assets/style.scss"`
        
//       },
//   }}
// }
// module.exports = {
  
//     rules: [
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//           // Compiles Sass to CSS
//           "sass-loader",
//         ],
//       },
//     ],
// };