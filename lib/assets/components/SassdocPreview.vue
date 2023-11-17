<template>
  <div class="SassdocPreview"></div>
</template>

<script>
  export default {
    name: 'SassdocPreview',
    inject: ["getSassdocItem", "sassdocPreviewOptions"],
    props: {
      uid: {
        type: String,
        required: true
      },
      exampleIndex: {
        type: [Number, String],
        required: true
      }
    },
    data() {
      return {
        iframe: null
      };
    },
    methods: {
      previewHtml(markup) {
        const { previewHead, previewScripts } = this.sassdocPreviewOptions;
        console.log('this.sassdocPreviewOptions:\n', this.sassdocPreviewOptions);
        return `<html lang="en"><head>${ previewHead }</head><body>${ markup }${ previewScripts }</body></html>`;
      },
      createPreview() {
        const { previewStyles } = this.sassdocPreviewOptions;
        const iframe = document.createElement('iframe');
        this.$el.appendChild(iframe);
        const doc = iframe.contentWindow.document;
        const markup = this.getSassdocItem(this.uid).previewsByIndex[this.exampleIndex];
        iframe.setAttribute("style", previewStyles);
        doc.open();
        doc.write(this.previewHtml(markup)); 
        doc.close();
        this.iframe = iframe;
      }
    },
    mounted() {
      if (!this.$isServer) {
        this.createPreview();
      }
    },
    destroy() {
      if (this.iframe) {
        this.$el.removeChild(this.iframe);
      }
    }
  }
</script>