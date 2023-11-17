---
title: Test-function
sassdocGroupName: test-function
---


# Test-function





## Functions




###  global-test() <Badge text="function" type="tip" vertical="top" />  {#function-global-test} 

  

This is a global test aiming at testing:
- `@access`
- `@author`
- `@deprecated`
- `@example`
- `@group`
- `@ignore`
- `@link`
- `@requires`
- `@see`
- `@since`
- `@todo`

    
    

::: warning Deprecated

This is a *deprecation* message.

:::
  


<SassdocDetails summaryText="Meta Information">

- **File:** _sassdoc.scss
- **Group:** test-function
- **Type:** function
- **Lines (comments):** 12-62
- **Lines (code):** 64-64
- **Author:** Pascal **Duez**,Valérian **Galliat**,Kitty **Giraudel**,Fabrice **Weinberg**

</SassdocDetails>
    
    

#### Examples

Example description      


``` scss
$test: function-global-test();
```
  



      

#### Related Links

- [Google](http://google.com)
- [http://sassdoc.com](http://sassdoc.com)

    

#### Since

- `2.0.0` - Major refacto
- `1.0.0` - Other stuff


    

#### Todos

- Nothing to do here.
- My people need me.
    

#### See

- [function-specific-test()](/sass/test/#function-function-specific-test)
  

#### Require

- [function-specific-test()](/sass/test/#function-function-specific-test) - This is a description with a dash.
- [mixin-specific-test()](/sass/test/#mixin-mixin-specific-test) - This is a description with no dash.
- [$variable-specific-test](/sass/test/#variable-variable-specific-test)
- [%placeholder-specific-test](/sass/test/#placeholder-placeholder-specific-test) - This is a description and a link. http://sassdoc.com
- `this::is::an::external::dependancy` - External dependency with double colon http://github.com
- `this:is:an:external:dependancy` - External dependency with single colon http://github.com
- `this/is/an/external/dependancy` - External dependency with slash http://github.com
- `this.is.an.external.dependancy` - External dependency with dot http://github.com
  
  


<script>

  import SassdocPreview from "@ulu/vitepress-sassdoc/lib/assets/components/SassdocPreview.vue";
  import SassdocDetails from "@ulu/vitepress-sassdoc/lib/assets/components/SassdocDetails.vue";
  const sassdocGroup = [{"groupName":"test-function","id":"function-global-test","uid":"test-function-function-global-test","title":"global-test()","groupPath":"/sass/test-function/","path":"/sass/test-function/#function-global-test","previewsByIndex":{}}];
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
          `%7B%22previewStyles%22%3A%22%5Cn%20%20%20%20height%3A%2020em%3B%5Cn%20%20%20%20width%3A%20100%25%3B%5Cn%20%20%20%20border%3A%20none%3B%5Cn%20%20%20%20background-color%3A%20%23f9f9f9%3B%5Cn%20%20%20%20border-radius%3A%206px%3B%5Cn%20%20%20%20padding%3A%2012px%3B%5Cn%20%20%20%20margin%3A%201.5em%200%3B%5Cn%20%20%22%2C%22previewHead%22%3A%22%5Cn%20%20%20%20%3Ctitle%3ESassdoc%20Example%3C%2Ftitle%3E%20%5Cn%20%20%20%20%3Cmeta%20charset%3D%5C%22utf-8%5C%22%3E%20%5Cn%20%20%20%20%3Cmeta%20name%3D%5C%22viewport%5C%22%20content%3D%5C%22width%3Ddevice-width%2C%20initial-scale%3D1%5C%22%3E%20%5Cn%20%20%20%20%3Clink%20rel%3D%5C%22stylesheet%5C%22%20href%3D%5C%22%2Fsassdoc-preview.css%5C%22%3E%5Cn%20%20%22%2C%22previewScripts%22%3A%22%5Cn%20%20%20%20%3Cscript%20src%3D%5C%22%2Fsassdoc-preview.js%5C%22%3E%3C%2Fscript%3E%5Cn%20%20%22%7D`
        )
      )
    }
  }

</script>  
  
  