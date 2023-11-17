export function badge(text, type = "tip", vertical = "top") {
  return `<Badge text="${ text }" type="${ type }" vertical="${ vertical }" />`;
}
export function codeGroupBlock(markup, type, title) {
  return `
\`\`\`${ type } [${ title }]
${ markup }
\`\`\`
  `;
}
export function codeGroup(markup) {
  return `
::: code-group

${ markup }

:::
  `;
}
export function container(type,  title, content) {
  return `
::: ${ type } ${ title }

${ content }

:::
  `;
}
export function preview(uid, index) {
  return  `
<SassdocPreview uid="${ uid }" :exampleIndex="${ index }" />
  `;
}