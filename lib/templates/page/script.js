export default ({ group, options }) => {
  const groupData = createGroupData(group);
  const { previewStyles, previewHead, previewScripts } = options;
  const previewOptions = { previewStyles, previewHead, previewScripts };
  return `
<script>

  import SassdocPreview from "@ulu/vitepress-sassdoc/lib/assets/components/SassdocPreview.vue";
  import SassdocDetails from "@ulu/vitepress-sassdoc/lib/assets/components/SassdocDetails.vue";
  const sassdocGroup = ${ JSON.stringify(groupData) };
  export default {
    components: {
      SassdocPreview,
      SassdocDetails
    },
    provide: {
      getSassdocItem(uid) {
        return sassdocGroup.find(item => item.uid === uid);
      },
      getSassdocGroup() {
        return sassdocGroup;
      },
      sassdocPreviewOptions: JSON.parse(
        decodeURIComponent(
          \`${ encodeURIComponent(JSON.stringify(previewOptions)) }\`
        )
      )
    }
  }

</script>  
  `;
}

function createGroupData(group) {
  return group.map((item) => { 
    const data = { ...item };
    // Create map of previews by orginal example index (used by preview component)
    // if (options.previewEnabled) {
      data.previewsByIndex = item.data.example?.reduce((acc, example, index) => {
        if (example.modifier === "preview") {
          acc[index] = example.code;
        }
        return acc;
      }, {});
    // }
    // Remove unneeded data (orginal sassdoc data)
    delete data.data;
    return data;
  });
}