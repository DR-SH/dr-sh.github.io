$(function(){$preloader=$("#loader"),$loader=$preloader.find(".load"),$loader.fadeOut("fast"),$preloader.fadeOut("fast"),$("#wrapper").show(),$("ul .nav").smartmenus({subMenusSubOffsetX:1,subMenusSubOffsetY:-8}),$("#home .owl-carousel").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:8e3,autoplaySpeed:500,navSpeed:500,dotsSpeed:500,items:1,nav:!0,navText:["<i class='fa fa-angle-double-left'</i>","<i class='fa fa-angle-double-right'</i>"]}),$("#home .inner-carousel").bind("mouseover",function(e){$(this).stop().animate({"background-position-x":"55%","background-position-y":"55%"},2e3)}),$("#home .inner-carousel").bind("mouseout",function(e){$(this).stop().animate({"background-position-x":"50%","background-position-y":"50%"},2e3)}),$("#home .owl-carousel .active").find(".inner-carousel-text").css("display","block"),$("#home .owl-carousel").on("changed.owl.carousel",function(e){var o=e.item.index,n=$(this).find(".owl-item:eq("+o+")");n.siblings().find(".inner-carousel-text").hide(),n.find(".inner-carousel-text").fadeIn(1300)}),$(".services-bg").bind("mouseenter",function(e){var o=$(this).find(".services-icon"),n=0;void 0!==o.attr("style")&&(n=o.attr("style").replace(/[^-\d\.]/g,"")),n=parseInt(n),n+=360,o.attr("style","transform: rotate("+n+"deg)"),$(this).attr("style","transform: scale(1.05)")}),$(".services-bg").bind("mouseleave",function(e){$(this).attr("style","transform: scale(1)")}),$("#services .owl-carousel").owlCarousel({loop:!1,autoplay:!1,nav:!1,margin:30,responsive:{0:{items:1},600:{items:2},992:{items:3},1200:{items:4}}}),$("#about .owl-carousel").owlCarousel({loop:!0,autoplay:!1,autoplayTimeout:3e3,autoplaySpeed:1e3,slideTransition:"ease",nav:!1,margin:0,slideBy:1,center:!0,responsive:{0:{items:1},768:{items:3}}}),$("#about .owl-carousel").on("changed.owl.carousel",function(e){var o=e.page.count,n=e.page.index;console.log(o-n);var t=$(this).find(".owl-item:eq(2)");o-n==1?t.addClass("cur"):t.removeClass("cur")}),$("#halfcircle1").circliful({percent:50,animateInView:!0,animation:.4,animationStep:2,backgroundBorderWidth:20,foregroundBorderWidth:20,halfCircle:1,backgroundColor:"#76c7c0",foregroundColor:"#e2534b",noPercentageSign:!0,fontColor:"#7f8c8c",text:"Suspendisse",percentageTextSize:34,textStyle:"font-size: 20px",textColor:"#7f8c8c",textY:150}),$("#halfcircle2").circliful({percent:70,animateInView:!0,animation:.4,animationStep:2,backgroundBorderWidth:20,foregroundBorderWidth:20,halfCircle:1,backgroundColor:"#76c7c0",foregroundColor:"#e2534b",noPercentageSign:!0,fontColor:"#7f8c8c",text:"Maecenas",percentageTextSize:34,textStyle:"font-size: 20px",textColor:"#7f8c8c",textY:150}),$("#halfcircle3").circliful({percent:80,animateInView:!0,animation:1,animationStep:4,backgroundBorderWidth:20,foregroundBorderWidth:20,halfCircle:1,backgroundColor:"#76c7c0",foregroundColor:"#e2534b",noPercentageSign:!0,fontColor:"#7f8c8c",text:"Aliquam",percentageTextSize:34,textStyle:"font-size: 20px",textColor:"#7f8c8c",textY:150}),$("#halfcircle4").circliful({percent:100,animateInView:!0,animation:1,animationStep:2,backgroundBorderWidth:20,foregroundBorderWidth:20,halfCircle:1,backgroundColor:"#76c7c0",foregroundColor:"#e2534b",noPercentageSign:!0,fontColor:"#7f8c8c",text:"Habitasse",percentageTextSize:34,textStyle:"font-size: 20px",textColor:"#7f8c8c",textY:150});var o=$("#clients-carousel .owl-carousel"),n=o.find(".inner-carousel").length,e=function(){return 768<$(window).width()?6:3},t=e();$(window).resize(function(){t=e()}),o.owlCarousel({loop:!0,autoplay:!1,autoplayTimeout:3e3,autoplaySpeed:1e3,slideTransition:"ease",nav:!0,dots:!1,margin:30,navText:["<span><i class='fa fa-angle-left'</i></span>","<span><i class='fa fa-angle-right'</i></span>"],responsive:{0:{items:3},768:{items:6}}});var a=!0;$(".js-range-slider").ionRangeSlider({type:"single",skin:"round",min:1,max:n,from:1,grid:!1,hide_min_max:!0,hide_from_to:!0,onChange:function(e){a=!1,console.log("666"),o.trigger("to.owl.carousel",e.from-1,!0)},onFinish:function(){a=!0}});$("#clients-carousel").find(".owl-nav").bind("hover",void o.on("changed.owl.carousel",function(e){if(a){var o=e.item.index+1-n/2;o<1&&(o=n),Math.ceil(o/t),$(".js-range-slider").data("ionRangeSlider").update({from:o})}}))});