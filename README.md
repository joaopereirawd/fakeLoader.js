<h1>What is fakeLoader.js</h1>
<p>
    fakeLoader.js is a lightweight jQuery plugin. <br>Allows to create a false loading effect, this prevents DOM display in the rendering process.
</p>
<h3>Check out the <a href="http://joaopereirawd.github.io/fakeLoader.js/demo/demo1.html" target="_blank">Demo</a></h3>
<h1>1. Include in HTML Document</h1>
<p style="margin:0px;">Include in the top of your &lt;body&gt; tag </p>
<pre><p>&lt;div id="fakeLoader"&gt;&lt;/div&gt;</p></pre>
</br></br>
<h1>2. Include styles</h1>
<p>Inside &lt;head&gt; tag </p>
<pre><p>&lt;link rel="stylesheet" href="yourPath/fakeLoader.css"&gt;</p></pre>
<h1>3. Include Folowing Libraries</h1>
<p>JQuery reference and the fakeLoader.js</p>
<pre>
<p>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"&gt;</p><p>&lt;script src="yourPath/fakeLoader.js"&gt;</p>
</pre>
<h1>4. Basic Initialize</h1>
<p>Include in bottom of your  &lt;body&gt; tag</p>
<pre>
<code>
    &lt;script type="text/javascript"&gt;</p>
    
        $(".fakeloader").fakeLoader();</p>
        
    &lt;/script&gt;
</code>
</pre>
<h1>4. Basic Initialize</h1>
<p>Include in bottom of your  &lt;body&gt; tag</p>

<h1>5. Options</h1>
<pre>
<code><p>&lt;script type="text/javascript"&gt;</p>
    $(".fakeloader").fakeLoader({
    
            timeToHide:1200, //Time in milliseconds for fakeLoader disappear</span></p>
            spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
            bgColor:"#2ecc71", //Hex, RGB or RGBA colors</span></p>
            imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
            
     &lt;/script&gt;
</code>
</pre>

