// babel.config.js
module.exports = {
  presets: [
    // Converte JavaScript moderno
    ["@babel/preset-env", { targets: { node: "current" } }],

    // Converte JSX e adiciona o runtime automático do React
    ["@babel/preset-react", { runtime: "automatic" }],

    // Converte TypeScript
    "@babel/preset-typescript",
  ],
};