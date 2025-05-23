export {};
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  target: "bun",
  minify: true,
  sourcemap: "external",
  external: ["@appsignal/nodejs"],
});

await Bun.write("./dist/package.json", Bun.file("./package.json"));
await Bun.write("./dist/appsignal.cjs", Bun.file("./appsignal.cjs"));
