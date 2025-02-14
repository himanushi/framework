import { resolve } from "path";
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.types.json",
      outDir: "./dist",
    }),
  ],
  resolve: {
    alias: { "~/": `${__dirname}/lib/` },
  },
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, "lib/symphony-components.ts"),
      name: "symphony-components",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
        preserveModules: true,
        inlineDynamicImports: false,
        preserveModulesRoot: "lib",
        entryFileNames: ({ name: fileName }) => `${fileName}.js`,
      },
      treeshake: {
        preset: "smallest",
        annotations: true,
        moduleSideEffects: true,
        correctVarValueBeforeDeclaration: true,
        propertyReadSideEffects: true,
        tryCatchDeoptimization: true,
        unknownGlobalSideEffects: true,
      },
    },
  },
});
