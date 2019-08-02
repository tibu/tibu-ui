const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#6d6eed",
      "@link-color": "#6d6eed",
      "@body-background": "#F7F8FC",
      "@success-color": "#3BDE86",
      "@warning-color": "#E34F70",
      "@error-color": "#E34F70",
      "@layout-header-background": "#FFF",
      "@layout-body-background": false
    }
  })
);
