# documentation
a quick guide on how to use **imgrgba** as a library.

## basic usage
```html
<script src='https://often.github.io/imgrgba/lib.js'></script>
<script>
   const img = document.createElement('img')
   img.src = '...'
   // img.crossOrigin = ''
   // ^ you might want to do this, read more here: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
   
   img.addEventListener('load', () => {
      console.log(img.getRgba()) // => [r, g, b, a]
      // console.log(getRgba(img))
      // ^ or like so
      // ...
   })
</script>
```

## ESM usage
```js
import { getRgba } from 'https://often.github.io/imgrgba/lib.esm.js'

// from here, use the `getRgba` function
// ...
```
