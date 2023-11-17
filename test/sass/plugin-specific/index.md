---
title: Plugin-specific
sassdocGroupName: plugin-specific
---


# Plugin-specific


<div class="sassdoc-intro">
  
These are extended features provided by this library
  
</div>
    


## Mixins




###  print-color() <Badge text="mixin" type="tip" vertical="top" />  {#mixin-print-color} 

  

In addition to the code block example this example will show the compiled result. Note the  {compile} modifier on the example. It also uses the compiler annotation to load the module for the compiled example. Content in the compiler annotation are prepended to the compiled code for the item or group if at file-level)
    
    


<SassdocDetails summaryText="Meta Information">

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** mixin
- **Lines (comments):** 7-11
- **Lines (code):** 13-17

</SassdocDetails>
    
    

#### Examples

This example will be compiled      


::: code-group



```scss [SCSS]
@include specific.print-color(red);
```
  

```css [CSS]
.test {
  color: red;
}
```
  

:::
  



      


###  some-mixin() <Badge text="mixin" type="tip" vertical="top" />  {#mixin-some-mixin} 

  

In addition to the html example this will also be previewed in an iframe. Note the {preview} modifier. Settings are available to add stylesheet and javascript to iframe. Iframe used for isolation from docs styles. 
    
    


<SassdocDetails summaryText="Meta Information">

- **File:** _specific.scss
- **Group:** plugin-specific
- **Type:** mixin
- **Lines (comments):** 19-21
- **Lines (code):** 23-23

</SassdocDetails>
    
    

#### Examples

This example will be previewed      


``` html
<span class="test">This is a test</span>
```
  


##### Preview


<SassdocPreview uid="plugin-specific-mixin-some-mixin" :exampleIndex="0" />
  

  

      
  


<script>

  import SassdocPreview from "@ulu/vitepress-sassdoc/lib/assets/components/SassdocPreview.vue";
  import SassdocDetails from "@ulu/vitepress-sassdoc/lib/assets/components/SassdocDetails.vue";
  const sassdocGroup = [{"groupName":"plugin-specific","id":"mixin-print-color","uid":"plugin-specific-mixin-print-color","title":"print-color()","groupPath":"/sass/plugin-specific/","path":"/sass/plugin-specific/#mixin-print-color","previewsByIndex":{}},{"groupName":"plugin-specific","id":"mixin-some-mixin","uid":"plugin-specific-mixin-some-mixin","title":"some-mixin()","groupPath":"/sass/plugin-specific/","path":"/sass/plugin-specific/#mixin-some-mixin","previewsByIndex":{"0":"<span class=\"test\">This is a test</span>"}}];
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
          `%7B%22previewStyles%22%3A%22%5Cn%20%20%20%20height%3A%2020em%3B%20%5Cn%20%20%20%20width%3A%20100%25%3B%20%5Cn%20%20%20%20border%3A%20none%3B%20%5Cn%20%20%20%20background-color%3A%20%23ccc%3B%5Cn%20%20%20%20border-radius%3A%206px%3B%5Cn%20%20%20%20padding%3A%206px%3B%20%5Cn%20%20%20%20margin%3A%201.5em%200%3B%5Cn%20%20%22%2C%22previewHead%22%3A%22%5Cn%20%20%20%20%3Ctitle%3ESassdoc%20Example%3C%2Ftitle%3E%20%5Cn%20%20%20%20%3Cmeta%20charset%3D%5C%22utf-8%5C%22%3E%20%5Cn%20%20%20%20%3Cmeta%20name%3D%5C%22viewport%5C%22%20content%3D%5C%22width%3Ddevice-width%2C%20initial-scale%3D1%5C%22%3E%20%5Cn%20%20%20%20%3Clink%20rel%3D%5C%22stylesheet%5C%22%20href%3D%5C%22%2Fsassdoc-preview.css%5C%22%3E%5Cn%20%20%22%2C%22previewScripts%22%3A%22%5Cn%20%20%20%20%3Cscript%20src%3D%5C%22%2Fsassdoc-preview.js%5C%22%3E%3C%2Fscript%3E%5Cn%20%20%22%7D`
        )
      )
    }
  }

</script>  
  
  