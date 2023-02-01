
 $ (function() {

 	let header = $("#header");    
	let intro = $("#intro"); 
	let introH = intro.innerHeight();            
	let scrollPos = $(window).scrollTop();    

/* Fixed Header */
	$(window).on("scroll",function() {      
		 scrollPos = $(this).scrollTop();    
   if(scrollPos > introH) {      
		header.addClass("fixed");    
        }else{
		header.removeClass("fixed");  
		}
	});             
	

/* Smooth scroll */
	$("[data-scroll]").on("click", function(event) {    
		event.preventDefault()    
		
		let elementId = $(this).data('scroll');   
		let elementOffset = $(elementId).offset().top;  
		
		$("html,body").animate ( {      
			scrollTop: elementOffset - 50    
		} ,500);     
	});
	 
 
/* Nav Toggle */
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	
	navToggle.on("click", function(event) {
		event.preventDefault()
			nav.toggleClass("show")   
	});

/* Reviews */
	let slider = $("#reviewsSlider");	
	
   /* from  https://kenwheeler.github.io/slick */  
	 
	slider.slick ({            
        infinite: true,     
        slidesToShow: 1,     
        slidesToScroll: 1,    
        fade: true,           
		arrows:false,         	
		dots:true,            
		autoplay:true       
	});		

});
