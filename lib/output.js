import { outputPages } from "@ulu/sassdoc-to-markdown";
import defaults from "./defaults.js";

export async function output(options) {
  const merged = Object.assign({}, defaults, options);
  try {
    return await outputPages(merged);
  } catch (error) {
    console.error(":: Vitepress Sassdoc encountered an error when converting ::")
    console.error(error);
  }
}