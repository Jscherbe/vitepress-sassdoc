import scriptTemplate from "./script.js";
export default (pageData, markup) => {
  const { title, info, groupName } = pageData;
  const groupDescription = info?.groupDescriptions?.[groupName];
  const description = !groupDescription ? "" : `
<div class="sassdoc-intro">
  
${ groupDescription }
  
</div>
    `;

  return `
# ${ title }

${ description }

${ markup }

${ scriptTemplate(pageData) }
  `;
}


