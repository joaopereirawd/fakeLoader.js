/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
-----------------------------------------------------------------------*/

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    $.fn.fakeLoader = function(options) {

        // Defaults
        var settings = $.extend({
            timeToHide:1200, // Default Time to hide fakeLoader
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '10000000',  // Default zIndex 
            bgColor: '#25aae1', // Default background color
            spinner:'spinner7', // Default Spinner
            imagePath:'', // Default Path custom image
            brandLogo: false
        }, options);

        // TODO: perhaps setting static settings like this (to be publicly available on the plugin's instance) is not really best practice.
        //       Because what happens when we initialize more than one $.fn.fakeLoader plugin on the same screen?
        //       Maybe I'm wrong, but I think we need to figure out a better way to do it - to store some values for each initialized plugin.
        //       The fact is that for each initialized $.fn.fakeLoader we need some unique settings to be available when
        //       calling $(window).resize() - look at the bottom of the file     
        $.fn.fakeLoader.settings = settings;

        // The final html content is yet to be defined, thus empty at the beginning
        var htmlContent = '';

        // The brand logo is not set yet until the user wants it to be set in the pkugin's initialization settings 
        var brandLogo = '';

        // Customized Spinners
        var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl spinner4"></div>'; 
        var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
        var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
        var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 

        // The target
        var el = $(this);

        // Init spinner styles
        var initSpinnerStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };
        
        // If the brand logo is defined in the plugin's initialization settings, add the brand logo to the empty htmlContent
        if (settings.brandLogo && settings.brandLogo.css) {
            brandLogo = '<div class="brand-logo"></div>';            
            htmlContent += brandLogo; 
        }

        // Apply spinner styles
        el.css(initSpinnerStyles);

        // Each 
        el.each(function() {

            var a = settings.spinner;

            //console.log(a)

            // Decide which type of spinner is to be added to htmlContent
            switch (a) {
                case 'spinner1':
                    htmlContent += spinner01;                            
                    break;
                case 'spinner2':
                    htmlContent += spinner02;                        
                    break;
                case 'spinner3':
                    htmlContent += spinner03;
                    break;
                case 'spinner4':
                    htmlContent += spinner04;
                    break;
                case 'spinner5':
                    htmlContent += spinner05;
                    break;
                case 'spinner6':
                    htmlContent += spinner06;
                    break;
                case 'spinner7':
                    htmlContent += spinner07;
                    break;
                default:
                    htmlContent += spinner01;
            }

            // Add customized loader image if defined in settings (overrides htmlContent)
            if (settings.imagePath !='') {
                htmlContent = '<div class="fl"><img src="' + settings.imagePath+ '"></div>';
            }

            // Finally place the htmlContent result into the plugin's placeholder
            el.html(htmlContent);

            // if brand logo is defined, set its CSS styles and center it
            if (brandLogo) {
                $(".brand-logo").css(settings.brandLogo.css);
                centerBrandLogo(settings.brandLogo.verticalOffsetFromCenter);
            }

            centerLoader();
        });

        //Time to hide fakeLoader
        setTimeout(function(){
            $(el).fadeOut();
        }, settings.timeToHide);

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });
 
    }; // End Fake Loader
 

    //Center Spinner
    function centerLoader() {

        var winW = $(window).width();
        var winH = $(window).height();

        var spinnerW = $('.fl').outerWidth();
        var spinnerH = $('.fl').outerHeight();

        $('.fl').css({
            'position':'absolute',
            'left':(winW/2)-(spinnerW/2),
            'top':(winH/2)-(spinnerH/2)
        });

    }

    function centerBrandLogo(verticalOffsetFromCenter) {

        if (!verticalOffsetFromCenter)
            verticalOffsetFromCenter = 0;

        var winW = $(window).width();
        var winH = $(window).height();

        var logoW = $('.brand-logo').outerWidth();
        var logoH = $('.brand-logo').outerHeight();

        $('.brand-logo').css({
            'position':'absolute',
            'left':(winW/2)-(logoW/2),
            'top':(winH/2)-(logoH/2)  + verticalOffsetFromCenter
        });

        $('.brand-logo').fadeIn();

    }

    $(window).load(function(){
        centerBrandLogo($.fn.fakeLoader.settings.brandLogo.verticalOffsetFromCenter);
        centerLoader();
        $(window).resize(function(){
            centerBrandLogo($.fn.fakeLoader.settings.brandLogo.verticalOffsetFromCenter);
            centerLoader();                
        });
    });

})( jQuery, window, document );


