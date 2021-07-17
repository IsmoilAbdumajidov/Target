$(document).ready(function(){
    $(".carousel").owlCarousel({
        margin:  10,
        loop:true,
        // autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true ,
        items:1,
        // animateOut:"fadeOut",    
        speed:8000,
        
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            200:{
                items:1,
                nav:false
            },
            300:{
                items:1,
                nav:false
                
            },
            400:{
                items:1,
                nav:false
            },
            700:{
                items:1,
                nav:true
            },
            1200:{
                items:1,
                nav:true,
                
            }
        }
    });
    let scrol = $(".scrolTop");
    $(".scrolTop").hide();
    $(window).scroll(function(){
        
        let scroltop=$("html").scrollTop();
        console.log(scroltop);
        
        if (scroltop>=200) {
            scrol.show()
        }
        else{
            scrol.hide()
        }
        
    });
    $(".scrolTop").click(function(){
        $("html").animate({
          scrollTop:"0" 
            
        },1000)
    })
})
