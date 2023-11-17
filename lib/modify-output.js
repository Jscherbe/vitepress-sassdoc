export function modifyOutput({ pages }) {
  pages.forEach(page => {
    page.frontmatter.outline = "deep";
  }); 
}