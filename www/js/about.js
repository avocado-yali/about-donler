console.log('DOMstart load.');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
}, false);


function testAnim(x) {
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
};

$(document).ready(function() {
    //initialize swiper when document ready  
    console.log('jquery loaded.');
    $('.swiper-container').show();
    $('.loading').fadeOut();


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: false,
        nextButton: '.swiper-button-next',
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
            swiper.myactive = 0;
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper);
        },
        onProgress: function(swiper) {
            for (var i = 0; i < swiper.slides.length; i++) {
                var slide = swiper.slides[i];
                var progress = slide.progress;
                var translate, boxShadow;

                translate = progress * swiper.height * 0.8;
                scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
                boxShadowOpacity = 0;

                slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';

                if (i == swiper.myactive) {
                    es = slide.style;
                    es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
                    es.zIndex = 0;


                } else {
                    es = slide.style;
                    es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = '';
                    es.zIndex = 1;

                }

            }

        },


        onTransitionEnd: function(swiper, speed) {
            for (var i = 0; i < swiper.slides.length; i++) {
                //	es = swiper.slides[i].style;
                //	es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = '';

                //	swiper.slides[i].style.zIndex = Math.abs(swiper.slides[i].progress);


            }

            swiper.myactive = swiper.activeIndex;

        },
        onSetTransition: function(swiper, speed) {

            for (var i = 0; i < swiper.slides.length; i++) {
                //if (i == swiper.myactive) {

                es = swiper.slides[i].style;
                es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
                //}
            }

        }

    })

    mySwiper.on('SlideChangeEnd', function() {
        swiperAnimate(swiper);
    });

    function r() {
        t.show(), e.play(), t.removeClass("music-open").addClass("music-close")
    }

    function i() {
        e.pause(), t.removeClass("music-close").addClass("music-open")
    }
    var e = $("#audio")[0],
        t = $(".music"),
        n = this;
    t.on("click", function(e) {
        var t = $(this);
        t.is(".music-open") ? r() : i(), e.preventDefault()
    }), window.onblur = function() {
        i()
    }, this.play = r, this.stop = i


});


// window.onload = function () {
//     //initialize swiper when document ready  
//     var mySwiper = new Swiper ('.swiper-container', {
//       // Optional parameters
//       direction: 'vertical',
//       loop: false,
//       nextButton: '.swiper-button-next'

//     });
//     mySwiper.on('SlideChangeEnd', function () {
// 	    console.log('slide change end');
// 	});


//   };