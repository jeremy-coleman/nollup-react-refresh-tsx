
const createTildifyConfig = dir => ({
    "@libz":`./${dir}/@libz`,
  })

const TILDIFY_CONFIG = createTildifyConfig('src')

module.exports = {
  presets: ["@babel/preset-react"],
  plugins: [
    ["@babel/plugin-syntax-dynamic-import"],
    ["@babel/plugin-transform-typescript", {isTSX: true, allExtensions: true}],
    ["@babel/plugin-proposal-decorators", {legacy: true}],
    ["@babel/plugin-proposal-class-properties", {loose: true}],
    ["module-resolver", {
      root: ["."],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json'],
      alias: TILDIFY_CONFIG
    }]
    ],
  env: {
    development: {
      plugins: ["react-refresh/babel"]
    }
  }
};
