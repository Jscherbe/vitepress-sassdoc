import { defineConfig } from 'vitepress';
import { resolve } from "path";
import { createTree, toDefaultTheme } from "@ulu/vitepress-auto-menus";

const pages = createTree({ source: resolve(__dirname, "../") });

export default defineConfig({
  title: "@ulu/vitepress-sassdoc",
  description: "Vitepress site for testing plugin",
  themeConfig: {
    ...toDefaultTheme(pages),
  }
});