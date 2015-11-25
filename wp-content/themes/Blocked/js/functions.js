function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{1,4})?$/;
    if( !emailReg.test( email ) ) {
        return false;
    } else {
        return true;
    }
}
function validateContactNumber(number) {
    var numberReg = /^((\+)?[1-9]{1,3})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}$/;
    if( !numberReg.test( number ) ) {
        return false;
    } else {
        return true;
    }
}
jQuery(document).ready(function( $ ) {    
    
        
    $("#twtr-widget-1 .twtr-tweet a").removeAttr("style");
    
    $("#portfolio-single-left-arrow, #portfolio-single-right-arrow").css("top", ( $("#portfolio-single").height() / 2 ) + "px");
    
    $(window).resize(function() {
      if ( $("section").width() == 661 ) { 
            $(".slider-images li").each(function(index){
                if( $(this).attr("id") != "selected-slider-image" ) {
                    $(this).css("display","none");
                }
      });
      } 
        
    
      if ( $("section").width() == 315 ) { 
            $(".slider-images li").each(function(index){
                if( $(this).attr("id") != "selected-slider-image" ) {
                    $(this).css("display","none");
                }
      }); 
        
        
    }
    
    
});
    
    
    $(".comments").click( function () {
      
        var scroll = $(".comment-number-title").offset().top - 10;
        $('html,body').animate({scrollTop: scroll},'slow');
    });
    
    
    if( $(".slider-headings li").length != 1 ) {
		$(window).scroll(function () { 
	
			clearTimeout(timeout);
	
		}, function(){
	
			clearTimeout(timeout);
	
			timeout = setTimeout(sliderMove, settings['timeout']);
	
		});
	}
        var navWidth = 0;
	$('.menu li').bind('mouseenter',function() {
            if ( $(".no-slider").width() >= 967 || $(".slider").width() >= 967 || $(".slider-small").width() >= 967 ) {
                var numberOfChildren = $(this).children("ul").children("li").length;  
                $(this).children("ul").stop(true)
                .animate({ 'height': ( (numberOfChildren *  $(this).children("ul").children("li").height() ) - 1 ) + "px" },400,'easeOutBack', function(){ $(this).css("overflow","visible") });
            }
	});
        
        
        $('.menu li').unbind('click').bind('click',function() {
            if ( ($(".no-slider").width() < 967 && $(".no-slider").width() != null )  || 
                 ($(".slider").width() < 967 && $(".slider").width() != null)    || 
                 ($(".slider-small").width() < 967 && $(".slider-small").width() != null ) ) {
                 if( $(this).hasClass("submenu-parent")) {
                        var returnValue = false;
                        if ( $(this).children("ul").length == 0 || $(this).children("ul").height() != 0 ) {
                            returnValue = true;
                        }
                        
                        
                        if ( $(this).children("ul").height() == 0 ) {
                            var numberOfChildren = $(this).children("ul").children("li").length;  
                            //alert("dsa1");
                            $(this).children("ul").stop(true)
                            .animate({ 'height': ( (numberOfChildren *  $(this).children("ul").children("li").height() ) - 1 ) + "px" },400,'easeOutBack', function(){ $(this).css("overflow","visible") });
                        }
                        return returnValue;
                 }
            }
        });
        $('.menu li li').unbind('click').bind('click', function() {
            if ( ($(".no-slider").width() < 967 && $(".no-slider").width() != null )  || 
                 ($(".slider").width() < 967 && $(".slider").width() != null)    || 
                 ($(".slider-small").width() < 967 && $(".slider-small").width() != null ) ) {
                    if( $(this).hasClass("submenu-parent")) {
                        var returnValue = false;
                        if ( $(this).children("ul").height() != 0 ) {
                            returnValue= true;
                        }
                        $(this).parent(".sub-menu").css("overflow","visible");
                        var numberOfChildren = $(this).children("ul").children("li").length; 
                        $(this).children("ul").removeClass("sub-menu");
                        $(this).children("ul").css( "position", "static" );
                        $(this).children("ul").css( "box-shadow", "none" );
                        var sect =  parseInt($('nav li li a').css("padding-bottom")) + parseInt($('nav li li a').css("padding-top")) + $('nav li li a').height();
                        
                        if ( $(this).children("ul").height() == 0 ) {
                            //alert("dsa2");
                            $(this).parent(".sub-menu").height (( $(this).parent(".sub-menu").height() + 5 + ( $(this).children("ul").children("li").length  * sect )) );
                        
                            $("nav li ul li ul li:last-child hr").css("display","block");
                            $(this).children("ul").stop(true)
                            .animate({ 'height': ( (numberOfChildren *  $(this).children("ul").children("li").height() )) + "px" },400,'easeOutBack');
                        }
                        return returnValue;
                }
            }
        });
        
	$('.menu li li').unbind('mouseenter').bind('mouseenter', function() {
            if( $('.menu li li').hasClass("submenu-parent")) {
       
                if ( $(".no-slider").width() >= 967 || $(".slider").width() >= 967  || $(".slider-small").width() >= 967 ) {
                $(this).children("ul").css( "position", "absolute" );
                $(this).children("ul").css( "box-shadow", "0 0 2px 0px rgba(0, 0, 0, 0.13)" );
                
                $(this).parent(".sub-menu").css("overflow","visible");
                var numberOfChildren = $(this).children("ul").children("li").length; 
                $(this).children("ul").removeClass("sub-menu");
                
                        $(this).children("ul").css( "left", $(this).width() + "px" );
                        $(this).children("ul").stop(true)
                        .animate({ 'height': ( (numberOfChildren *  $(this).children("ul").children("li").height() ) - 1 ) + "px" },400,'easeOutBack');
                }
                
            }
        });
        
        
                
	$('.menu li').bind('mouseleave',function(){
                $(this).children("ul").stop(true)
                .animate({ 'height':'0px' }, 200, function(){$(this).css("overflow","hidden")});
                
                 if ( ($(".no-slider").width() < 967 && $(".no-slider").width() != null )  || 
                 ($(".slider").width() < 967 && $(".slider").width() != null)    || 
                 ($(".slider-small").width() < 967 && $(".slider-small").width() != null ) ) {
                    
                    $('.menu li ul li ul').css("height","0px");
                   
                }
	});
	$('.menu li ul li').unbind('mouseleave').bind('mouseleave',function() {
            if ( $(".no-slider").width() >= 967  || $(".slider").width() >= 967  || $(".slider-small").width() >= 967 ) {
                $(this).children("ul").stop(true)
                .animate({ 'height':'0px' }, 200, function(){$(this).css("overflow","hidden")});
            }
	});
	
  /*
  $('.menu li').hover(function () {
       $(this).children("ul").stop().slideDown(100);
  }, function(){
       $(this).children("ul").stop().slideUp(100, function(){navAnimation = true;});
  });
    
	*/
	 /* $('.menu li').bind('mouseenter',function(){
		  var $elem = $(this);
		  $elem.find('img')
			   .stop(true)
			   .animate({
				  'width':'170px',
				  'height':'170px',
				  'left':'0px'
			   },400,'easeOutBack')
			   .andSelf()
			   .find('.sdt_wrap')
			   .stop(true)
			   .animate({'top':'140px'},500,'')
			   .andSelf()
			   .find('.sdt_active')
			   .stop(true)
			   .animate({'height':'170px'},300,function(){
			  var $sub_menu = $elem.find('.sdt_box');
			  if($sub_menu.length){
				  var left = '170px';
				  if($elem.parent().children().length == $elem.index()+1)
					  left = '-170px';
				  $sub_menu.show().animate({'left':left},200);
			  }	
		  });
	  }).bind('mouseleave',function(){
		  var $elem = $(this);
		  var $sub_menu = $elem.find('.sdt_box');
		  if($sub_menu.length)
			  $sub_menu.hide().css('left','0px');
		  
		  $elem.find('.sdt_active')
			   .stop(true)
			   .animate({'height':'0px'},300)
			   .andSelf().find('img')
			   .stop(true)
			   .animate({
				  'width':'0px',
				  'height':'0px',
				  'left':'85px'},400)
			   .andSelf()
			   .find('.sdt_wrap')
			   .stop(true)
			   .animate({'top':'25px'},500);
	  });
  */
	
  var navAnimation = true;
  var prevNav = -1;
        /*Preload function*/
	$.fn.preload = function() {
         this.each(function(){
        	$('<img/>')[0].src = this;
   	 	});
	}
	
	/*Preload images in slider*/
	$([$(".slider-images li img").eq(0).attr('src'), $(".slider-images li img").eq(1).attr('src'), $(".slider-images li img").eq(2).attr('src')]).preload();
        if ( $(".slider-headings li").length != 1) {
            var timeout = setTimeout(sliderMove, settings['timeout']);
        }
	var animationInProgress = true;
        
        //prepares images for fade in and fade out (this remove error with first showing)
        $(".slider-images li").hide();
        $(".slider-images li").first().show();
        
        $(".slider-images li").css("visibility","visible");
        /*Main slider function*/
        function sliderMove( direction ) {
            if( $(".slider-small").html() != null) {
                    var movementSize = 1200;
                    
                    switch( $(".slider").width() ) {
                        case 967: 
                                        movementSize = 1200;
                            break;
                        case 721: 
                                        movementSize = 900;
                            break;
                                case 420: 
                                        sliderMover( 380, 1 ); 
                                        break;
                                case 300:
                                        sliderMover( 300, 1 ); 
                                        break;
                    }
                    var index = $(".slider-headings li#selected-slider-heading").index();
                    $(".slider-headings li").removeAttr("id");
                    
                    $('.slider-headings li').eq(index).css({'display':'block','position':'absolute','left':'0px','top':'0px'});
                    if ( $(".slider-headings li").length == 3) {
                        if( index == 0 ) {
                            $('.slider-headings li').eq(1).css({'display':'block','position':'absolute','left':'-' + movementSize + 'px','top':'0px'});
                            $('.slider-headings li').eq(2).css({'display':'block','position':'absolute','left':'' + movementSize + 'px','top':'0px'});
                        } else if( index == 1 ) {
                            $('.slider-headings li').eq(2).css({'display':'block','position':'absolute','left':'-' + movementSize + 'px','top':'0px'});
                            $('.slider-headings li').eq(0).css({'display':'block','position':'absolute','left':'' + movementSize + 'px','top':'0px'});
                        } else if( index == 2 ) {
                            $('.slider-headings li').eq(0).css({'display':'block','position':'absolute','left':'-' + movementSize + 'px','top':'0px'});
                            $('.slider-headings li').eq(1).css({'display':'block','position':'absolute','left':'' + movementSize + 'px','top':'0px'});
                    }
                    } else if ( $(".slider-headings li").length == 2 ) {
                        if ( direction == "forward" || direction == undefined ) {
                            if( index == 0 ) {
                                $('.slider-headings li').eq(1).css({'display':'block','position':'absolute','left':'-' + movementSize + 'px','top':'0px'});
                            } else if( index == 1 ) {
                                $('.slider-headings li').eq(0).css({'display':'block','position':'absolute','left':'-' + movementSize + 'px','top':'0px'});
                            }
                        } else {
                            if( index == 0 ) {
                                $('.slider-headings li').eq(1).css({'display':'block','position':'absolute','left':'' + movementSize + 'px','top':'0px'});
                            } else if( index == 1 ) {
                                $('.slider-headings li').eq(0).css({'display':'block','position':'absolute','left':'' + movementSize + 'px','top':'0px'});
                            }
                        }
                        
                    }
                    
                    
                    /*Check what direction the slider should go*/
                    if ( direction == "forward" ) {
                            index++;	
                            direction = "forward";
                    } else if ( direction == "backward" ) {
                            index--;
                    } else {
                            index++;	
                            direction = "forward";
                    }
                    /*Check if slider gets out of range*/
                    
                    if ( $(".slider-headings li").length == 3) {
                        if(index == 3) {
                                index = 0;	
                        } else if ( index == -1 ) {
                                index = 2;	
                        }
                    } else if ( $(".slider-headings li").length == 2 ) {
                        if(index == 2) {
                                index = 0;	
                        } else if ( index == -1 ) {
                                index = 1;	
                        }
                    }
                    
                    $(".slider-headings li").eq(index).attr("id","selected-slider-heading"); 
                
                
                    animationInProgress = false;
                    
                    var checkDirection = "+";
                    
                    if ( direction == "backward" ) {
                        checkDirection = "-";
                    }
                    
                    $('.slider-headings li').animate({
                                easing: "swing",
                                left: checkDirection + '=' + movementSize
                    }, settings['speedMoveSmall'], function() {
                        animationInProgress = true;
                        clearTimeout(timeout); timeout = setTimeout(sliderMove, settings['timeout']);
                    });
                    
                    $(".bottom-controls div").removeAttr("id");
                    $(".bottom-controls div").eq(index).attr("id", "control-selected"); 
                
                
            } else {
            
            var index = $(".slider-headings li#selected-slider-heading").index();
            clearTimeout(timeout);
            
            /*Check what direction the slider should go*/
            if ( direction == "forward" ) {
                    index++;	
                    direction = "forward";
            } else if ( direction == "backward" ) {
                    index--;
            } else {
                    index++;	
                    direction = "forward";
            }
            /*Check if slider gets out of range*/
            if ( $(".slider-images li").length == 2 ) {
                if(index == 2) {
                        index = 0;	
                } else if ( index == -1 ) {
                        index = 1;	
                }
            } else {
                if(index == 3) {
                        index = 0;	
                } else if ( index == -1 ) {
                        index = 2;	
                }
            }
		
                animationInProgress = false;
                
                $(".slider-headings-wrapper").animate({
                    right: '-=600'
                }, settings['speedMoveRight'], function() {
                    
                 
                    $(".slider-headings li").removeAttr("id");
                    $(".slider-headings li").eq(index).attr("id","selected-slider-heading");
                    
                    $(".slider-headings-wrapper").animate({
                        right: '+=600'
                    }, settings['speedMoveLeft'], function(){
                        clearTimeout(timeout); timeout = setTimeout(sliderMove, settings['timeout']);
                        animationInProgress = true;
                    });
                    //alert(index);
                    
                    $(".bottom-controls div").removeAttr("id");
                    $(".bottom-controls div").eq(index).attr("id", "control-selected");
                    
                }); 
                
                
                if( $(".slider-images li img, .slider-images li iframe").eq(index).attr("src") != $(".slider-images li#selected-slider-image img, .slider-images li#selected-slider-image iframe").attr("src") && $(".slider-images li#selected-slider-image img, .slider-images li#selected-slider-image iframe").attr("src") && $(".slider-images li img, .slider-images li iframe").eq(index).attr("src")){
                
                
                       if($.browser.version == "8.0" || $.browser.version == "7.0") {
           $(".slider-images li#selected-slider-image").css("display","none");
 $(".content .small-menu-heading").eq(0).css({"border" : "none !important","border-style" : "none !important"});
                                           $(".slider-images li").removeAttr("id");
                                    $(".slider-images li").eq(index).attr("id","selected-slider-image");
           
           
           $(".slider-images li").eq(index).css("display","block");
       } else {
                    $(".slider-images li#selected-slider-image").fadeOut( settings['speedFadeOut'], function() {
                                    var index = $(".slider-images li#selected-slider-image").index();
                                    $(".slider-images li").removeAttr("id");
                                    /*Check what direction the slider should go*/
                                    if ( direction == "forward" ) {
                                            index++;	
                                    } else if ( direction == "backward" ) {
                                            index--;
                                    }
                                    /*Check if slider gets out of range*/
                                    //alert( index );
                                    if ( $(".slider-images li").length == 2 ) {
                                        if(index == 2) {
                                                index = 0;	
                                        } else if ( index == -1 ) {
                                                index = 1;	
                                        }
                                    } else {
                                        if(index == 3) {
                                                index = 0;	
                                        } else if ( index == -1 ) {
                                                index = 2;	
                                        }
                                    }
                                    $(".slider-images li").eq(index).attr("id","selected-slider-image");
                                    $(".slider-images li").eq(index).fadeIn(settings['speedFadeIn'], function() {} );
                    });
       }
                }
                }
	}
        
        /*Stop and start slider when mouse is over*/
        $(".slider, .slider-small").mouseover(function(){
            clearTimeout(timeout);
        });
        if ( $(".slider-headings li").length != 1) {
            $(".slider, .slider-small").mouseout(function(){
                clearTimeout(timeout);
                timeout = setTimeout(sliderMove, settings['timeout']);
            });
        }
        
        /*Stop and start when window focus*/
         if ( $(".slider-headings li").length != 1) {
            $(window).blur(function() {
                clearTimeout(timeout);
            });
         }
         if ( $(".slider-headings li").length != 1) {
            $(window).focus(function() {
                clearTimeout(timeout);
                timeout = setTimeout(sliderMove, settings['timeout']);
            });
         }
         
         /*Controls*/
	$("#control-right").click(function() {
		if ( animationInProgress ) {
			clearTimeout(timeout);
			sliderMove("forward");
		}
	});
	
	$("#control-left").click(function() {
		if ( animationInProgress ) {
			clearTimeout(timeout);
			sliderMove("backward");	
		}
	});
        
        $(".bottom-controls div").click(function(){
            if ( animationInProgress ) {
                var index = $(".bottom-controls div").index(this);
                if($(".bottom-controls div").eq(index).attr("id")!="control-selected") {
                    
                    var index2 = $(".slider-headings li#selected-slider-heading").index();
                    
                    if(( index == 1 && index2 == 0) || (index == 2 &&  index2 == 1) || (index == 0 &&  index2 == 2) ) {
                        clearTimeout(timeout);
                        sliderMove("forward"); 
                    } else {
                        clearTimeout(timeout);
                        sliderMove("backward");
                    }
                    
                    $(".bottom-controls div").removeAttr("id");
                    $(".bottom-controls div").eq(index).attr("id", "control-selected");
                }
            }
        });
    $('nav').find('li:has(ul)').addClass('submenu-parent');
        /* end if slider */
    
    $('.mobile-menu').change(function(){
        window.location = $('.mobile-menu :selected').val();
    })
    if ( $.browser.msie ) {
        
        
        
        
        if($.browser.version == "8.0") {
            $("nav li ul li:last-child hr").css("display","none");
            $("footer ul").css("margin","0  70px 0 0");
            $("footer ul").eq(5).css("margin","0");
            $(".readmore-wrapper a:before").eq(0).css("left", "+=5px");
            $(".readmore-wrapper a").eq(2).css("width", "+=1");
            $(".readmore-wrapper a").eq(2).css("width", "+=1");
            $(".readmore-wrapper article").eq(2).css("border", "0px");
            $(".readmore-wrapper a.footer-a").eq(0).css("left", "150px");
            $(".readmore-wrapper a.footer-a").eq(2).css("left", "750px");
            
            
            $(".recent-projects-wrapper a").hover(function(){
                $(this).children(".magnifier").css({"background-color":"#000","opacity":"0.4"});
            }, function() {
                $(this).children(".magnifier").css({"background-color":"none","opacity":"0"});
            });
            
            $(".single-project a").hover(function(){
                $(this).children(".magnifier").css({"background-color":"#000","opacity":"0.4"});
            }, function() {
                $(this).children(".magnifier").css({"background-color":"none","opacity":"0"});
            });
            
        }
        if($.browser.version == "8.0" || $.browser.version == "7.0"){
            $('.banner-slide-images').find("li").eq(0).css("display","block");
            $('#content article:last').css("border","none");
            $('.recent-projects-wrapper a:nth-child(3n+1)').css("margin","36px 0 0 0");
            $('.recent-projects-wrapper a:nth-child(3n)').css("margin","36px 0 0 0");
            $('#banner-small #banner-headings ul li').eq(0).css({display : "block"});
            $('#banner-small #banner-headings ul li').eq(1).css({left : "-1500px", display : "block"});
            $('#banner-small #banner-headings ul li').eq(2).css({left : "1600px", display : "block"});
            $('.project-wrapper .single-project:nth-child(3n+1)').css("margin","36px 0 0 0");
            $('.project-wrapper .single-project:nth-child(3n)').css("margin","36px 0 0 0");
            $('.posts').children(".post:first-child").children(".image").css({background : "url(img/blog/firstPost.png)", backgroundColor: "#d64c00", backgroundPosition: "14px", backgroundRepeat: "no-repeat"});
            $('.posts').children(".post:nth-child(2)").children(".image").css({background : "url(img/blog/secondPost.png)", backgroundColor: "#fff", backgroundPosition: "18px", backgroundRepeat: "no-repeat"});
            $('.posts').children(".post:last-child").children(".image").css({background : "url(img/blog/thirdPost.png)", backgroundColor: "#d60000", backgroundPosition: "13px", backgroundRepeat: "no-repeat"});
        }
    }
    
    
    if($.browser.msie){
        
		
    }
    
    
    
  /*Hides all except the first content in a content with menu*/
    $("#menu-content-2").css("display", "none");
    $("#menu-content-3").css("display", "none");
    $("#menu-content-4").css("display", "none");
    
    $('.content-menu li').click(function(){
        
        if(this.id != 'selected-submenu' && this.id != 'selected-submenu-2') {
        $(this).parent().children('.content-menu li').removeAttr('id');
        $(this).parent().parent().children('.small-menu-heading').removeAttr('id');
        $('.content-menu-over').remove();
        $('.content-menu-shadow-right').remove();
        $('.content-menu-shadow-left').remove();
        
        $('.content-menu li:first-child').css("border-style","solid");
        
        $(this).parent().parent().children("#menu-content-1").hide();
        $(this).parent().parent().children("#menu-content-2").hide();
        $(this).parent().parent().children("#menu-content-3").hide();
        $(this).parent().parent().children("#menu-content-4").hide();
        
        var clickedIndex = $(this).parent().children('.content-menu li').index(this);
        $(this).parent().parent().children('.small-menu-heading').eq(clickedIndex).attr("id","selected-small-heading");
        
        clickedIndex++;
        
        $(this).parent().parent().children("#menu-content-"+clickedIndex).fadeIn();
                    
        if($(this).is(':last-child'))
        {
            this.id='selected-submenu-2';
            $(this).parent().children("#selected-submenu-2").append("<div class='content-menu-over'>"+$("#selected-submenu-2").html()+"</div>");
            $(this).parent().children("#selected-submenu-2").append("<div class='content-menu-shadow-left'></div>");
            
        }else if($(this).is(':first-child')){
            this.id='selected-submenu';
            $(this).parent().children("#selected-submenu").append("<div class='content-menu-over'>"+$("#selected-submenu").html()+"</div>");
            $(this).parent().children("#selected-submenu").append("<div class='content-menu-shadow-right'></div>");
        }else{
            this.id='selected-submenu';
            $(this).parent().children("#selected-submenu").append("<div class='content-menu-over'>"+$("#selected-submenu").html()+"</div>");
            $(this).parent().children("#selected-submenu").append("<div class='content-menu-shadow-left'></div>");
            $(this).parent().children("#selected-submenu").append("<div class='content-menu-shadow-right'></div>");
        }
        }
    });
    
    $('.small-menu-heading').click(function(){
        
        
        if(this.id != 'selected-small-heading') {
        
        
        var clickedIndex = $(this).parent().children('.small-menu-heading').index(this);
        
        $(this).parent().children(".content-menu").children("li").removeAttr("id");
        $(this).parent().children(".content-menu").children("li").children('.content-menu-over').remove();
        $(this).parent().children(".content-menu").children("li").children('.content-menu-shadow-right').remove();
        $(this).parent().children(".content-menu").children("li").children('.content-menu-shadow-left').remove();
        
        if($(this).parent().children(".content-menu").children("li").eq(clickedIndex).is(':last-child'))
        {
            $(this).parent().children(".content-menu").children("li").eq(clickedIndex).attr("id","selected-submenu-2");
            $(this).parent().children(".content-menu").children("#selected-submenu-2").append("<div class='content-menu-over'>"+$("#selected-submenu-2").html()+"</div>");
            $(this).parent().children(".content-menu").children("#selected-submenu-2").append("<div class='content-menu-shadow-left'></div>");
            
        }else if($(this).parent().children(".content-menu").children("li").eq(clickedIndex).is(':first-child')) {
            $(this).parent().children(".content-menu").children("li").eq(clickedIndex).attr("id","selected-submenu");
            $(this).parent().children(".content-menu").children("#selected-submenu").append("<div class='content-menu-over'>"+$("#selected-submenu").html()+"</div>");
            $(this).parent().children(".content-menu").children("#selected-submenu").append("<div class='content-menu-shadow-right'></div>");
        }else {
            $(this).parent().children(".content-menu").children("li").eq(clickedIndex).attr("id","selected-submenu");
            $(this).parent().children(".content-menu").children("#selected-submenu").append("<div class='content-menu-over'>"+$("#selected-submenu").html()+"</div>");
            $(this).parent().children(".content-menu").children("#selected-submenu").append("<div class='content-menu-shadow-left'></div>");
            $(this).parent().children(".content-menu").children("#selected-submenu").append("<div class='content-menu-shadow-right'></div>");
        }
        
        
        $(this).parent().children(".content-menu").children("li:first-child").css("border-style","solid");
        
        
        
        
        
        
        
        
        
        $(this).parent().children('.small-menu-heading').removeAttr("id","selected-small-heading");
        $(this).parent().children('.small-menu-heading').eq(clickedIndex).attr("id","selected-small-heading");
        
        $("#menu-content-1").slideUp();
        $("#menu-content-2").slideUp();
        $("#menu-content-3").slideUp();
        $("#menu-content-4").slideUp();
        
        $("#menu-content-" + (clickedIndex + 1)).slideDown();
        $(this).parent().children('.small-menu-heading').eq(clickedIndex).attr();
        }
    });
    
	
        
        
        
        
if ($(".slider iframe").length > 0){
	
	$('.slider iframe, .slider').hover(function() {
		clearTimeout(timeout);
		animation = false;
	});
	
	var iframe = $('#player1')[0],
		player = $f(iframe),
		status = $('.status');
	
	// When the player is ready, add listeners for pause, finish, and playProgress
	player.addEvent('ready', function() {
		status.text('ready');
		
		player.addEvent('pause', onPause);
		player.addEvent('finish', onFinish);
		player.addEvent('playProgress', onPlayProgress);
	});
	
	// Call the API when a button is pressed
	$('button').bind('click', function() {
		player.api($(this).text().toLowerCase());
	});
	
	function onPause(id) {
            clearTimeout(timeout);
            animation = true;
	}
	
	function onFinish(id) {
            clearTimeout(timeout);
            animation = true;
	}
	
	function onPlayProgress(data, id) {
            clearTimeout(timeout);
            animation = false;
	}
}       
        
        $(".lb-close img").attr("src", $("#theme-path").val() + $(".lb-close img").attr("src"))
        $(".lb-cancel img").attr("src", $("#theme-path").val() + $(".lb-cancel img").attr("src"))
        
        
        
        
        
        
        
        
    /*Contact */
   
   
   $('input[type="text"]').map(function() {
        this.value= this.title;
        if( $(this).hasClass("required") ){
            $(this).parent().append("<div id='errorMessage' class='errorMessageInput'>" + fieldNotSet + " "+this.value+"</div>");
            this.value += "*";
        }
        if($(this).hasClass('phone')){
            $(this).parent().append("<div id='errorMessage' class='errorMessageInput'>" + fieldNotSet + " "+this.value+"</div>");
        }
    });
    $('textarea').map(function() {
        this.value= this.title;
        if( $(this).hasClass("required") ){
            $(this).parent().append("<div id='errorMessage' class='errorMessageTextarea'>" + fieldNotSet + " "+this.value+"</div>");
            this.value += "*";
        }
    });
    $('input[type="text"], textarea').click(function(){
        if((this.value == this.title) || (this.value == this.title+"*" && $(this).hasClass("required"))){
            this.value = "";
        } 
    })
    $("input, textarea").blur(function(){
        if(this.value == ""){
            this.value = this.title;
            if( $(this).hasClass("required") ){
                $(this).addClass("errorInput");
                $(this).parent().children("#errorMessage").html(fieldNotSet + this.value);
                $(this).parent().children("#errorMessage").css("display","block"); 
                this.value += "*";
            }else {
               $(this).removeClass("errorInput"); 
               $(this).parent().children("#errorMessage").css("display","none"); 
            }
        } else {
                if( $(this).hasClass('email') ) {
                    if(this.value == this.title || this.value == this.title+"*"){
                        $(this).parent().children("#errorMessage").html("" + fieldNotSet + this.title);
                        $(this).parent().children("#errorMessage").css("display","block");
                    }
                    if(validateEmail(this.value)){
                        $(this).removeClass("errorInput");
                        $(this).parent().children("#errorMessage").css("display","none");
                    }
                    else{
                        $(this).addClass("errorInput");
                        $(this).parent().children("#errorMessage").html(fieldNotValid + this.title);
                        $(this).parent().children("#errorMessage").css("display","block");
                    }
                }
                 else if( $(this).hasClass('phone') ) {
                    if(this.value == this.title || this.value == this.title+"*"){
                        $(this).parent().children("#errorMessage").css("display","none"); 
                    }
                    else if(validateContactNumber(this.value)){
                        $(this).removeClass("errorInput");
                    }
                    else {
                        $(this).addClass("errorInput");
                    }
                } 
                else {
                    $(this).removeClass("errorInput");
                    $(this).parent().children("#errorMessage").css("display","none"); 
                }
        }
    })
    $('input, textarea').bind('keydown', function() { 
        if( $(this).hasClass('email') ) {
            if(validateEmail(this.value)){
                $(this).removeClass("errorInput");
                $(this).parent().children("#errorMessage").css("display","none");
                if( $(this).css("padding-right") == "125px" ){
                    $(this).css("padding-right","10px");
                    $(this).width($(this).width() + 115);
                }
            }
            else{
                $(this).parent().children("#errorMessage").html(fieldNotValid + this.title);
                $(this).parent().children("#errorMessage").css("display","block");
                if( $(this).css("padding-right") != "125px" ){
                $(this).css("padding-right","125px");
                $(this).width($(this).width() - 114);
                }
                $(this).addClass("errorInput");
            }
        }
        if( $(this).hasClass('phone') ) {
                if(validateContactNumber(this.value)){
                $(this).removeClass("errorInput");
                $(this).parent().children("#errorMessage").css("display","none");
            }
            else{
                $(this).addClass("errorInput");
                $(this).parent().children("#errorMessage").html(fieldNotValid + this.title);
                $(this).parent().children("#errorMessage").css("display","block");
            }
        } 
        else {
            $(this).removeClass("errorInput");
            $(this).parent().children("#errorMessage").css("display","none"); 
        }
    });
    $('input[type="button"]').click(function(){
        if(this.name=='reset') {
            $('input[type="text"], textarea').map(function() {
                this.value = this.title;
                $(this).removeClass("errorInput");
                $(this).parent().children("#errorMessage").css("display","none");
                if( $(this).hasClass("required") ){
                    this.value += "*";
                }
            });
        }
        
        if(this.name=='send-comment') {
            var noErrors = true;
            
            
            $('input[type="text"], textarea').map(function() {
                if(this.value == this.title+"*"  && $(this).hasClass("required") ){
                    $(this).addClass("errorInput");
                    $(this).parent().children("#errorMessage").css("display","block");
                    noErrors = false;
                }
                if($(this).parent().children("#errorMessage").css("display") == "block"){
                    noErrors = false;
                }
            });
            
            if ( noErrors ) {
                
                $('#submit').click();
                
            }
            
            
        }
        
        
        
        if(this.name=='send') {
            
            var noErrors = true;
            
            $('input[type="text"], textarea').map(function() {
                if(this.value == this.title+"*"  && $(this).hasClass("required") ){
                    $(this).addClass("errorInput");
                    $(this).parent().children("#errorMessage").css("display","block")
                    noErrors = false;
                }
                if($(this).parent().children("#errorMessage").css("display") == "block"){
                    noErrors = false;
                }
            });
if(noErrors){
                $.ajax({
                type: "POST",
                url: $("#theme-path").val() + "/mailer/contact-us.php",
                data: $("#contact-form").serialize(),
                success: function(msg) {
                    if ( $("section").width() == 898 ) {
                        $(".success").fadeIn(100);
                    } else {
                        $(".success-2").fadeIn(100);
                    }
                    
                    
                }
                });
            }
        }
        if(this.name=='follow') {
            
            var noErrors = true;
            
            if(noErrors){
                $.ajax({
                type: "POST",
                url: $("#theme-path").val() + "/mailer/follow-us.php",
                data: $("#followForm").serialize(),
                success: function(msg) {
                }
                });
            }
        }
    });
        
        
      $(".sidebar-texts .arrowRight").click(function() {
        var index =  $('.sidebar-texts p').index($("p[id='selected']"));
        $('.sidebar-texts #selected').fadeOut(100);
        $('.sidebar-texts #selected').removeAttr('id');
        index++;
        if($('.sidebar-texts p').eq(index).html()==null){
            index = 0;
        }
        $('.sidebar-texts p').eq(index).attr('id','selected');
        $('.sidebar-texts p').eq(index).fadeIn(100);
    })
        
    $(".sidebar-texts .arrowLeft").click(function() {
        var index =  $('.sidebar-texts p').index($("p[id='selected']"));
        $('.sidebar-texts #selected').fadeOut(100);
        $('.sidebar-texts #selected').removeAttr('id');
        index--;
        if($('.sidebar-texts p').eq(index).html()==null){
            index = 0;
        }
        $('.sidebar-texts p').eq(index).attr('id','selected');
        $('.sidebar-texts p').eq(index).fadeIn(100);
    });
    
      
        
        $('.thumbnail').click(function(){
        $('.thumbnail').removeAttr('id');
        $('.portfolioFullImage').fadeOut(100,function(){
            $('.portfolioFullImage').css("background","url("+$(".portfolioFullImage img").eq(clickedIndex).attr("src")+")");
            $('.portfolioFullImage').fadeIn(100);
        });
        this.id = 'selected';   
        var clickedIndex = $('.thumbnail').index(this);
    });  
        
        
        
        
    /*SERVICES*/
var servicesAnimation = true;
$('.slider-arrow-right').click(function(){
	//alert($(".slider-wrapper").width());
	var items = 3;
	switch( $(".slider").width() ) {
        case 967: items = 3; break;
		case 721: items = 2; break;
		case 420: items = 1; break;
		case 300: items = 1; break;
	}
	var count = "-"+(($("#slider article").length - items ) * $(".slides article").width());
        //alert($('#slider').position().left);
	if($('#slider').position().left>count&&servicesAnimation){
    var step = $(".slides article").width();
    servicesAnimation = false;
    $('#slider').stop().animate({left: '-='+step+'px'}, 400, function(){
            servicesAnimation = true;
        });      
	}
});      
$('.slider-arrow-left').click(function(){
    if(parseInt($('#slider').css('left'))<0&&servicesAnimation) {
    	var step = $(".slides article").width();
        servicesAnimation = false;
        $('#slider').stop().animate({left: '+='+step+'px'}, 400, function(){
            servicesAnimation = true;
        });        
    }
});
        
$(".services-photo-hover").each(function (index){
    $(".services-photo-hover").eq(index).css("margin-left", - ($(".services-photo-hover").eq(index).width() /2 ) + "px");
});
function sliderMover( distance, items ) {
	  var sliding = parseInt($('#slider').css('left'));
	  
          //alert($(".slides article").width());
          
	  var broken = sliding % distance;
	  var count = "-"+(($("#slider article").length - items ) * $(".slides article").width());
	  
	  		  
	  if (!( (parseInt($('#slider').css('left')) - broken) >=count )) {
		  
		  $('#slider').stop().animate({left: count}, 400, function(){
					  servicesAnimation = true;
		  }); 
		  
	  }
	  
	  
	  if ( broken != 0 ) {
		  
		  
		  if (!( (parseInt($('#slider').css('left')) - broken) >=count )) {
			  
			  $('#slider').stop().animate({left: count}, 400, function(){
						  servicesAnimation = true;
			  }); 
			  
		  } else {
		  
			  $('#slider').stop().animate({left: '+='+(-broken)+'px'}, 400, function(){
						  servicesAnimation = true;
			  }); 
		  
		  }
	  }
}
/*Check window size for columns 30.09.2012*/
var sliderWidth = 0;
if ($(".no-slider").width() != null ) {
    sliderWidth = $(".no-slider").width();
} else if ($(".slider").width() != null ) {
    sliderWidth = $(".slider").width();
} else if ($(".slider-small").width() != null) {
    sliderWidth = $(".slider-small").width();
}
switch( sliderWidth ) {
    case 721: 
    if ( $('#type-of-column').attr("title") == "two-column" ) {
        $(".project-wrapper .single-project").removeClass("two-column");
    } else if ( $('#type-of-column').attr("title") == "four-column" ) {
        $(".project-wrapper .single-project").removeClass("four-column");
    }
    break;
    case 420: 
    if ( $('#type-of-column').attr("title") == "two-column" ) {
        $(".project-wrapper .single-project").removeClass("two-column");
    } else if ( $('#type-of-column').attr("title") == "four-column" ) {
        $(".project-wrapper .single-project").removeClass("four-column");
    }
    $('section').eq(0).removeClass("sidebar");
    $('section').eq(0).removeClass("left-sidebar");
    break;
    case 300:
    if ( $('#type-of-column').attr("title") == "two-column" ) {
        $(".project-wrapper .single-project").removeClass("two-column");
    } else if ( $('#type-of-column').attr("title") == "four-column" ) {
        $(".project-wrapper .single-project").removeClass("four-column");
    }
    $('section').eq(0).removeClass("sidebar");
    $('section').eq(0).removeClass("left-sidebar");
    break;
}
$(window).resize(function() {
    var selector = $(".selected-filter").attr('data-filter');
    var count_filter = 0;
    if( selector != "*" ) {
        selector = "." + selector;
    }
    /*PORTFOLIO WITH 3 ELEMENTS*/
    if ( ($(".no-slider").width() == 967 && $(".no-slider").width() != null )  || 
                 ($(".slider").width() == 967 && $(".slider").width() != null)    || 
                 ($(".slider-small").width() == 967 && $(".slider-small").width() != null) ) {
        if( selector != "*" ) {
            $(".project-wrapper div." + selector).each(function(index){
                count_filter++;
                if ( count_filter == 2) {
                    $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 30px");
                } else if ( count_filter == 3) {
                    $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 30px");
                    count_filter = 0;
                } else {
                    $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 0");
                }
            }); 
        } else {
                $(".project-wrapper .single-project").each(function(index){
                        count_filter++;
                        if ( count_filter == 2) {
                            $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 30px");
                        } else if ( count_filter == 3) {
                            $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 30px");
                            count_filter = 0;
                        } else {
                            $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 0");
                        }
                }); 
        }
        
        
    }
    
    
    
    /*WHEN SIZE IS 721*/
    if ( ($(".no-slider").width() == 721 && $(".no-slider").width() != null )  || 
                 ($(".slider").width() == 721 && $(".slider").width() != null)    || 
                 ($(".slider-small").width() == 721 && $(".slider-small").width() != null) ) {
        
        $(".project-wrapper .single-project").css("margin","36px 0 0 34px");
        
    }
    
    if ( ($(".no-slider").width() == 420 && $(".no-slider").width() != null )  || 
                 ($(".slider").width() == 420 && $(".slider").width() != null)    || 
                 ($(".slider-small").width() == 420 && $(".slider-small").width() != null) ) {
        
        $(".project-wrapper .single-project").css("margin","36px 0 0 18px");
        
    }
    var sliderWidth = 0;
    if ($(".no-slider").width() != null ) {
        sliderWidth = $(".no-slider").width();
    } else if ($(".slider").width() != null ) {
        sliderWidth = $(".slider").width();
    } else if ($(".slider-small").width() != null) {
        sliderWidth = $(".slider-small").width();
    }
    
    
    switch( sliderWidth ) {
        case 967: 
            
            if ( $('#type-of-column').attr("title") == "two-column" ) {
                $(".project-wrapper .single-project").addClass("two-column");
                
                $(".project-wrapper .single-project").css("margin","36px 0 0 0");
                $(".project-wrapper .single-project:nth-of-type(2n)").css("margin","36px 0 0 36px");
            } else if ( $('#type-of-column').attr("title") == "four-column" ) {
                $(".project-wrapper .single-project").addClass("four-column");
                
                $(".project-wrapper .single-project").css("margin","36px 0 0 0");
                $(".project-wrapper .single-project:nth-of-type(2n)").css("margin","36px 25px 0 25px");
                $(".project-wrapper .single-project:nth-of-type(4n)").css("36px 0 0 25px");
            }
            if ( $('#sidebar-exists').length !=0 ) {
                $('section').eq(0).addClass("sidebar");
            }
            if ( $('#left-slider-exists').length !=0 ) {
                $('section').eq(0).addClass("sidebar");
                $('section').eq(0).addClass("left-sidebar");
            }
            sliderMover( 299, 3 );
            
            break;
        case 721: 
                if ( $('#type-of-column').attr("title") == "two-column" ) {
                    $(".project-wrapper .single-project").removeClass("two-column");
                } else if ( $('#type-of-column').attr("title") == "four-column" ) {
                    $(".project-wrapper .single-project").removeClass("four-column");
                }
			
		   $(".project-wrapper .single-project").css("margin","36px 0 0 34px");
	
                if ( $('#sidebar-exists').length !=0 ) {
                    $('section').eq(0).addClass("sidebar");
                }
                if ( $('#left-slider-exists').length !=0 ) {
                    $('section').eq(0).addClass("sidebar");
                    $('section').eq(0).addClass("left-sidebar");
                }
                sliderMover( 330, 2 );
            break;
		case 420: 
                    
                if ( $('#type-of-column').attr("title") == "two-column" ) {
                    $(".project-wrapper .single-project").removeClass("two-column");
                } else if ( $('#type-of-column').attr("title") == "four-column" ) {
                    $(".project-wrapper .single-project").removeClass("four-column");
                }
                    
        	$(".project-wrapper .single-project").css("margin","36px 0 0 18px");
                
                $('section').eq(0).removeClass("sidebar");
                $('section').eq(0).removeClass("left-sidebar");
		sliderMover( 310, 1 ); 
			break;
		case 300:
                    
                    if ( $('#type-of-column').attr("title") == "two-column" ) {
                        $(".project-wrapper .single-project").removeClass("two-column");
                    } else if ( $('#type-of-column').attr("title") == "four-column" ) {
                        $(".project-wrapper .single-project").removeClass("four-column");
                    }
                
			$(".project-wrapper .single-project").css("margin","36px 0 0 0");
                        
                    $('section').eq(0).removeClass("sidebar");
                    $('section').eq(0).removeClass("left-sidebar");
			sliderMover( 300, 1 ); 
			break;
         
    }
    
    
}); 
        $('.avatar').removeAttr('width')
        $('.avatar').removeAttr('height');
if($.browser.safari && parseInt($.browser.version.substr(0,3))<534){
            $('.banner-slide-images').find("li").eq(0).css("display","block");
            $('#content article:last').css("border","none");
            $('.recent-projects-wrapper a:nth-of-type(3n+1)').css("margin","36px 0 0 0");
            $('.recent-projects-wrapper a:nth-child(3n)').css("margin","36px 0 0 0");
            $('#banner-small #banner-headings ul li').eq(0).css({display : "block"});
            $('#banner-small #banner-headings ul li').eq(1).css({left : "-1500px", display : "block"});
            $('#banner-small #banner-headings ul li').eq(2).css({left : "1600px", display : "block"});
            $('.project-wrapper .single-project:nth-child(3n+1)').css("margin","36px 0 0 0");
            $('.project-wrapper .single-project:nth-child(3n)').css("margin","36px 0 0 0");
            $('.posts').children(".post:first-child").children(".image").css({background : "url(img/blog/firstPost.png)", backgroundColor: "#d64c00", backgroundPosition: "14px", backgroundRepeat: "no-repeat"});
            $('.posts').children(".post:nth-child(2)").children(".image").css({background : "url(img/blog/secondPost.png)", backgroundColor: "#fff", backgroundPosition: "18px", backgroundRepeat: "no-repeat"});
            $('.posts').children(".post:last-child").children(".image").css({background : "url(img/blog/thirdPost.png)", backgroundColor: "#d60000", backgroundPosition: "13px", backgroundRepeat: "no-repeat"});  
}
    
    
    
$('#s').wrap("<div class='search-wrapper' />");
$('#searchsubmit').appendTo(".search-wrapper");
$('#searchsubmit').css("display","block");
$('#searchsubmit').val(" ");
var pageNumber = 1;
var $container = $('.project-wrapper');
$container.isotope({
    itemSelector: '.single-project',
    layoutMode : 'fitRows',
    filter : '.page-1',
    animationOptions: {
     duration: 500,
     easing: 'linear',
     queue: false
   }
});
/* When a users clicks on a category */
    $('#filters a').click(function(){
    
    var selector = $(this).attr('data-filter');
    var selector_no = $(this).attr('data-filter');
    var count_filter = 0;
    pageNumber = 1;
    
    $("#back").addClass("no-link");
    $("#next").removeClass("no-link");
    
    /*PORTFOLIO WITH 3 ELEMENTS*/
    if ( ($(".no-slider").width() == 967 && $(".no-slider").width() != null )  || 
                 ($(".slider").width() == 967 && $(".slider").width() != null)    || 
                 ($(".slider-small").width() == 967 && $(".slider-small").width() != null) ) {
        if( selector != "*" ) {
            $(".project-wrapper div." + selector).each(function(index){
                count_filter++;
                if ( count_filter == 2) {
                    if ( $(".two-column").length !=0 ) {
                        $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 36px");
                        count_filter = 0;
                    } else if ( $(".four-column").length !=0 ) {
                         $(".project-wrapper div." + selector).eq(index).css("margin","36px 25px 0 25px");
                    } else {
                        $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 30px");
                    }
                } else if ( count_filter == 3) {
                    if ( $(".two-column").length !=0 ) {
                        $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 0");
                    } else if ( $(".four-column").length !=0 ) {
                         $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 0");
                    } else {
                        $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 30px");
                        count_filter = 0;
                    }
                } else if ( count_filter == 4) {
                    $(".project-wrapper div." + selector).eq(index).css("margin","36px 25px 0 25px");
                    count_filter = 0;
                } 
                else {
                     if ( $(".two-column").length !=0 ) {
                        $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 0");
                     } else {
                         $(".project-wrapper div." + selector).eq(index).css("margin","36px 0 0 0");
                     }
                }
            }); 
        } else {
                $(".project-wrapper .single-project").each(function(index){
                        count_filter++;
                        if ( count_filter == 2) {
                            if ( $(".two-column").length !=0 ) {
                                $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 36px");
                                count_filter = 0;
                            }else if ( $(".four-column").length !=0 ) {
                                $(".project-wrapper .single-project").eq(index).css("margin","36px 25px 0 25px");
                            } else {
                                $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 30px");
                            }
                        } else if ( count_filter == 3) {
                            if ( $(".two-column").length !=0 ) {
                                $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 0");
                            } else if ( $(".four-column").length !=0 ) {
                               $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 0");
                            }else {
                                $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 30px");
                                count_filter = 0;
                            }
                        }else if ( count_filter == 4) {
                            $(".project-wrapper .single-project").eq(index).css("margin","36px 25px 0 25px");
                            count_filter = 0;
                        } 
                        
                        
                        else {
                            if ( $(".two-column").length !=0 ) {
                                $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 0");
                            } else {
                                $(".project-wrapper .single-project").eq(index).css("margin","36px 0 0 0");
                            }
                        }
                }); 
        }
        
        
    }
    
    
    
    /*WHEN SIZE IS 721*/
    if ( ($(".no-slider").width() == 721 && $(".no-slider").width() != null )  || 
                 ($(".slider").width() == 721 && $(".slider").width() != null)    || 
                 ($(".slider-small").width() == 721 && $(".slider-small").width() != null) ) {
        
        $(".project-wrapper .single-project").css("margin","36px 0 0 34px");
        
    }
    
	
	
	/*WHEN SIZE IS 420*/
    if ( ($(".no-slider").width() == 420 && $(".no-slider").width() != null )  || 
                 ($(".slider").width() == 420 && $(".slider").width() != null)    || 
                 ($(".slider-small").width() == 420 && $(".slider-small").width() != null) ) {
        
        $(".project-wrapper .single-project").css("margin","36px 0 0 18px");
        
    }
    
	
	
	
	
    
    var postsPerPage = $(".pagination-data").attr("data-max-pages");
    var numberOfPosts = $(".pagination-data").attr("data-post-number");
    var cur_num = 1;
    var cur_count = 1;
    $(".single-project").each(function(index){
        for ( var i = 1; i <= numberOfPosts; i++ ) {
            $(".single-project").eq(index).removeClass("page-" + i);
        }
        
        if ( selector_no == "*") {
            selector_no = "";
        }
        
        if( $(".single-project").eq(index).hasClass(selector_no) ) {
            $(".single-project").eq(index).addClass("page-" + cur_num);
            
            if ( cur_count++ == postsPerPage ) {
                cur_count = 1;
                cur_num++;
            }
        }
        
    });
    
    $(".pagination-data").html("");
        
    if ( selector_no == "" ) {
        selector_no = "single-project";
    }
        
    var numberOfCurrent = Math.ceil( $( "." + selector_no ).length / postsPerPage );
    
    
    if( numberOfCurrent == 1 ) {
        $("#next").addClass("no-link");
    } else {
        $("#next").removeClass("no-link");
    }
        
    for ( var i = 1; i <= numberOfCurrent; i++ ) {
        if ( i == 1 ) {
            $(".pagination-data").html( $(".pagination-data").html() + '<a class="pagination-value" id="selected">' + i + '</a>' );
        } else {
            $(".pagination-data").html( $(".pagination-data").html() + '<a class="pagination-value">' + i + '</a>' );
        }
        
        $(".pagination-data a").bind("click", function() {
        
            if ( $(this).attr("id") != "selected" ) {
                    $(".pagination-value").removeAttr("id");
                    $(this).attr("id", "selected");
                    var selector = $(".selected-filter").attr('data-filter');
                    if( selector != "*" ) {
                        selector = "." + selector;
                    }
                    pageNumber = $(this).html();
                    if( pageNumber - 1 != 0 ) {
                        $("#back").removeClass("no-link");
                    } else {
                        $("#back").addClass("no-link");
                    }
                    if( pageNumber == $(".pagination-data a").length ) {
                        $("#next").addClass("no-link");
                    } else {
                        $("#next").removeClass("no-link");
                    }
                    $container.isotope({ filter: selector + '.page-' + pageNumber },function(){});
                }
        });
        
    }
    
    if( selector != "*" ) {
        selector = "." + selector;
    }
    
    $("#filters li").each(function(index){
        $("#filters li").eq(index).children("a").removeClass("selected-filter");
        
        var new_selector = $("#filters li").eq(index).children("a").attr('data-filter');
        
        if( new_selector != "*" ) {
            new_selector = "." + new_selector;
        }
        
        if ( new_selector == selector  ) {
            $("#filters li").eq(index).children("a").addClass("selected-filter");
        }
    }); 

    $container.isotope({ filter: selector + '.page-' + pageNumber },function(){});
    
    return false;
    
});
$(".pagination-value").click(function(){
        
    if ( $(this).attr("id") != "selected" ) {
            
        $(".pagination-value").removeAttr("id");
        $(this).attr("id", "selected");
        
        
        
        var selector = $(".selected-filter").attr('data-filter');
        if( selector != "*" ) {
            selector = "." + selector;
        }
        
        pageNumber = $(this).html();
        
        if( pageNumber - 1 != 0 ) {
            $("#back").removeClass("no-link");
        } else {
            $("#back").addClass("no-link");
        }
        
        if( pageNumber == $(".pagination-data a").length ) {
            $("#next").addClass("no-link");
        } else {
            $("#next").removeClass("no-link");
        }
                
        $container.isotope({ filter: selector + '.page-' + pageNumber },function(){});
        
    }
});
$("#back").click(function(){
    
    if( ! $("#back").hasClass("no-link") ) {
        
        $("#next").removeClass("no-link");
        var val = $(".pagination-data a#selected").index();
        $(".pagination-data a").removeAttr("id");
        $(".pagination-data a").eq( val - 1 ).attr("id", "selected");
        
        var selector = $(".selected-filter").attr('data-filter');
        if( selector != "*" ) {
            selector = "." + selector;
        }
        
        pageNumber--;
        $container.isotope({ filter: selector + '.page-' + pageNumber },function(){});
        
        if( pageNumber == 1 ) {
            $("#back").addClass("no-link");
        }
    }
   
});
$("#next").click(function(){
    
    if( ! $("#next").hasClass("no-link") ) {
        
        $("#back").removeClass("no-link");
        var val = $(".pagination-data a#selected").index();
        $(".pagination-data a").removeAttr("id");
        $(".pagination-data a").eq( val + 1 ).attr("id", "selected");
        
        var selector = $(".selected-filter").attr('data-filter');
        if( selector != "*" ) {
            selector = "." + selector;
        }
        
        pageNumber++;
        $container.isotope({ filter: selector + '.page-' + pageNumber },function(){});
        if( pageNumber == $(".pagination-data a").length ) {
            $("#next").addClass("no-link");
        }
    }
   
});
 });
 