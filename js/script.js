$(function (){

    $(".glitch-img" ).mgGlitch({
        destroy :false,
        scale:false,
        blend :false,
        blendModeType :'color-dodge',
        glitch2TimeMin : 150,
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        arrows:false,
    });

	$('.tool-area').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:true,
		vertical:true,
		centerMode: true,
		centerPadding: '0px',
		prevArrow:".tool-s-top",
		nextArrow:".tool-s-bottom",
    });

	$('.counter').counterUp({
		delay: 10,
		time: 1500
	});


    // $('.product-glitch') .hover (function(){
    //     $(this) .addClass ('glitch-p')
    // });


    $(window).on('scroll', function(){
        var stiCky = $(this).scrollTop()
        if(stiCky > 100) {
            $('.navbar') .addClass('sticky-menu')
        }
        else{
            $('.navbar') .removeClass('sticky-menu')
        }
    });

    

        //scroll-spy & Smooth-scrolling
    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click',function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top-80},1000);
    });


    $(window).on('scroll',function(){
        var scrollTop = $(this).scrollTop();
        scrollLink.each(function(){
        var sectionhead = $(this.hash).offset().top-85;
        if(scrollTop >= sectionhead) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
        });
      });
     
      $(window).scroll(function(){
       var sticky = $(this).scrollTop();
       if(sticky > 300){
         $('.navbar ').addClass('sticky-menu');
       }
       else{
         $('.navbar ').removeClass('sticky-menu');
       }
      });

});


    // var navLink = document.querySelectorAll('.nav-item');
    // var Active = location.href;
    // for( var i =0; i<navLink.length; i++){
    //     if( navLink[i] .href===Active ){
    //         navLink[i].className='active';
    //     }
    // }


      

    // var lastID,
    //     topMenu = $('#navarea'),
    //     topMenuHeight = topMenu.outerHeight()+1,
    //     menuItems = topMenu.find('a'),
    //     scrollItems = menuItems.map(function(){
    //         var item = $($(this).attr('href'));
    //         if(item.length){
    //             return item;
    //         }
    //     });

    //     menuItems.click(function(e){
    //         var href = $(this).attr('href'),
    //         offsetTop = href === '#' ? 0 : $(href).offset().top-topMenuHeight+1;
    //         $('html, body').stop().animate({
    //             scrollTop:offsetTop
    //         }, 850);

    //         e.preventDefault();
    //     });

    //     $(window).scroll(function(){
    //         var fromTop = $(this).scrollTop()+topMenuHeight;
    //         var cur = scrollItems.map(function(){
    //             if ($(this).offset().top < fromTop)
    //             return this;
    //         });

    //         cur = cur [cur.length-1];
    //         var id = cur && cur.length ? cur[0]. id : '';
    //         if(lastID !== id){
    //             lastID = id;
    //             menuItems
    //             .parent().removeClass('active')
    //             .end().filter("[href=#"+id+")").parent().addClass('active');
    //         }
    //     });




    // (function() {
    //     'use strict';
      
    //     var section = document.querySelectorAll(".section");
    //     var sections = {};
    //     var i = 0;
      
    //     Array.prototype.forEach.call(section, function(e) {
    //       sections[e.id] = e.offsetTop;
    //     });
      
    //     window.onscroll = function() {
    //       var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      
    //       for (i in sections) {
    //         if (sections[i] <= scrollPosition) {
    //           document.querySelector('.active').setAttribute('class', ' ');
    //           document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
    //         }
    //       }
    //     };
    //   })();



    
      
      