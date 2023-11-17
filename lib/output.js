import { outputPages } from "@ulu/sassdoc-to-markdown";
import { defaults } from "./defaults.js";
import { 
  annotations as annTemplates, 
  page as pageTemplates 
} from "./templates/index.js";

export async function output(options = {}) {
  const templates = {
    pageTemplates: Object.assign({}, pageTemplates, options.pageTemplates),
    annotationTemplates: Object.assign({}, annTemplates, options.annotationTemplates),
  };
  const user = { ...options };

  // Remove properties we are setting
  delete user.annotationTemplates;
  delete user.pageTemplates;

  const merged = Object.assign({}, defaults, user, templates);
  try {
    return await outputPages(merged);
  } catch (error) {
    console.error(":: Vitepress Sassdoc encountered an error when converting ::")
    console.error(error);
  }
}