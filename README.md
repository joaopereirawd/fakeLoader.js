# What is fakeLoader.js

fakeLoader.js is a lightweight jQuery plugin that helps you create an animated spinner with a fullscreen loading mask to simulate the page preloading effect.

Check out the [demo](http://joaopereirawd.github.io/fakeLoader.js)

### 1. Importing 
```js 
yarn add jq-fakeloader
or
npm i jq-fakeloader
```

### 2. Include CSS
```css
<link rel="stylesheet" href="../node_modules/dist/fakeLoader.min.css">
```

### 3. Include `fakeLoader` placeholder in the HTML Document 
```
<div class="fakeLoader"></div>
```

### 4. Include `jQuery` dependency 
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js">
```

### 5. Include `fakeLoader.min.js`
```js
<script src="../node_modules/dist/fakeLoader.min.js">
```

### 6. Basic Initialize
```js
<script>
   $.fakeLoader();
</script>
```

### 7. Options

```js
<script>
    $.fakeLoader(
        {
          timeToHide:1200,    //Time in milliseconds for fakeLoader disappear
          spinner:"spinner1", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
          bgColor:"#2ecc71",  //Hex, RGB or RGBA colors
        }
    );
</script>

```
