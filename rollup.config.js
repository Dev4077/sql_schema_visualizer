import { defineConfig } from "rollup";
import typrscript from "@rollup/plugin-typescript";
import json  from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss"

export default defineConfig({
    input: "src/index.tsx",
    output: {
        dir: "dist",
        format: "es",
        name: "sql_schema_visualizer",
    },
    external: ["react", "react-dom", "reactflow", "history", "gh-pages", "markdown-it", "markdown-it-emoji", "twemoji", "web-vitals", "typescript", "react-is", "react-scripts"],
    plugins: [typrscript({tsconfig: "tsconfig.json"}),
    json(), postcss({
        extract: true,
        minimize: true
      }),],
})