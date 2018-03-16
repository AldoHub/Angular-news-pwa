let SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

//export the config file
module.exports = {
    navigateFallback : "/index.html",
    stripPrefix: "dist",
    root: "dist/",
    plugins: [
        new SWPrecacheWebpackPlugin({
          cacheId: 'angular-news',
          filename: 'service-worker.js',
          staticFileGlobs: [
            'dist/index.html',
            'dist/**.js',
            'dist/**.css'
          ],
          stripPrefix: 'dist/assets/', // stripPrefixMulti is also supported
          mergeStaticsConfig: true, // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config
          staticFileGlobsIgnorePatterns: [/\.map$/], // use this to ignore sourcemap files
        }),
      ]

}