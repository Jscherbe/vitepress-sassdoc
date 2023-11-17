/**
 * Defaults (this library only)
 */
export const defaults = {
  /**
   * Enable iframe previews of item's (ie. mixin) that have examples of the "html" type (default see previewExampleTypes to set custom types (ie. such as "html"))
   * - Used in order to see the markup in action (ie. applied to stylesheet)
   * - See 'previewMeta'
   */
  previewEnabled: true,
  /**
   * Styles applied to the iframe element
   */
  previewStyles: `
    height: 20em;
    width: 100%;
    border: none;
    background-color: #f9f9f9;
    border-radius: 6px;
    padding: 12px;
    margin: 1.5em 0;
  `,
  /**
   * Meta/Head of the iframe that is generated to display the example
   * - Use this to link stylesheet/scripts etc
   */
  previewHead: `
    <title>Sassdoc Example</title> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link rel="stylesheet" href="/sassdoc-preview.css">
  `,
  previewScripts: `
    <script src="/sassdoc-preview.js"></script>
  `,
}