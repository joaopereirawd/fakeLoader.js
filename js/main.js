(function ($) {
 
    $.fn.fakeloader = function(options) {


        //This
        var el = $(this);

        //init Styles
        var initStyles = {
            'position':'fixed',
            'width':'100%',
            'height': '100%'
        };
        //Apply styles
        el.css(initStyles);


        /************
         * Defaults
        *************/
        var settings = $.extend({
            pos:'fixed',
            width:'100%',
            height:'100%;',
            zIndex: "999",
            bgColor: "#000",
            loaderIco:'spinner1'
        }, options);


        el.each(function() {
            var a = settings.loaderIco;
            //console.log(a)
                switch (a) {
                    case 'spinner1':
                            el.html('<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>');
                        break;
                    case 'spinner2':
                            el.html('<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>');
                        break;
                    case 'spinner3':
                            el.html('<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>');
                        break;
                    }                    
        });

        /********************
          * Return Styles 
        *********************/
        return this.css({
            'backgroundColor':settings.bgColor,
            'zIndex':settings.zIndex
        });
 
    };
 
        /********************
          * Center Spin 
        *********************/
        function resize() {

            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight();

            console.log(spinnerW);
            console.log(spinnerH);

            $('.fl').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });

        }

        $(document).ready(function(){
                resize();
              $(window).resize(function(){
                resize();
              });
        });


}(jQuery));


$(".fakeloader").fakeloader({
    bgColor:"#2ecc71",
    loaderIco:"spinner1"
});



