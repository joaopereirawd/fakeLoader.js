# What is fakeLoader.js

fakeLoader.js is a lightweight jQuery plugin that helps you create an animated spinner with a fullscreen loading mask to simulate the page preloading effect.

Check out the demo [http://joaopereirawd.github.io/fakeLoader.js/](http://joaopereirawd.github.io/fakeLoader.js)

## Current Version 
`V2.0.0`

### 1. Installing 
```js 
yarn add jq-fakeloader
or
npm i jq-fakeloader
```

### 2. Include CSS
```css
<link rel="stylesheet" href="../node_modules/dist/fakeLoader.min.css">
```

### 3. Include `javascript` dependencies
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js">
<script src="../node_modules/dist/fakeLoader.min.js">
```

### 4. Include `fakeLoader` placeholder in the HTML Document 
```
<div class="fakeLoader"></div>
```

### 5. Basic Initialize
```js
<script>
   $.fakeLoader();
</script>
```

### 6. Options


`timeToHide` //Time in milliseconds for fakeLoader disappear

`spinner` //'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'

`bgColor`  //Hex, RGB or RGBA colors

### Support
If you encounter an issue or want to request a feature, you can create an [issue](https://github.com/joaopereirawd/fakeLoader.js/issues)



