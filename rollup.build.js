const config = require("./package.json");

const rollup = require("rollup");
const minify = require("rollup-plugin-minify-es");
const babel = require("rollup-plugin-babel");

const source = {
  input: "./lib/index.js",
  plugins: [babel({ exclude: "node_modules/**" }), minify()],
};

const umd = {
  file: config.main,
  format: "umd",
  name: config.global,
  exports: "named",
};

const esm = {
  file: config.module,
  format: "esm",
};

async function build() {
  const bundle = await rollup.rollup(source);

  [umd, esm].forEach((build) => {
    bundle.generate(build);
    bundle.write(build);
  });
}

build().then(() => {
  console.log("Done");
});
