$(document).ready(function(){

	//mobile-menu-button
    $('.navbar-toggler').click(function() { 
          $(this).toggleClass('active');
    });

   //navbar-animation
    $(window).scroll(function(){
      if($(document).scrollTop()>50){

          $('.navbar').addClass('navnew');
      }
      else{
          $('.navbar').removeClass('navnew');
      }
        
    });

    //testimonial-slider

    $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots:true,
      speed:1000,
      fade: false,
      autoplaySpeed: 2000
    })

})

	var controller=new ScrollMagic.Controller();


	var tween2 = new TimelineMax ()
		tween2
		.to('#subsbg',0.1,{y:'250'});


	var scene2 = new ScrollMagic.Scene({
		triggerElement: "#subsbg",
		duration:'2000', 
		triggerHook:'onEnter',
		offset: 40
	})
		.setTween(tween2)
		.addTo(controller);