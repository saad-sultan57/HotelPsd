$(document).ready(function(){
    $('.bullet-box ul li').on('click',function(){
       var source=$(this).children().attr('src');
       $('#slider-img').attr('src',source);
       $('.bullet-box ul li').removeClass('active');
       $(this).addClass('active');
    });
//Slider Code For right arrow
    $('#right-arrow').on('click',function(){
        
        nextar();

    });

    function nextar(){
        var activeli=$('.bullet-box').find('.active');
        var activeindex=activeli.index();
        var totallength=$('.bullet-box ul li').length;

        if(activeindex==totallength-1){
        var firstli=$('.bullet-box ul li').first();
        var nextsource=firstli.children().attr('src');
        $('#slider-img').attr('src',nextsource);
        $('.bullet-box ul li').removeClass('active');
        firstli.addClass('active');
       
        }else{
            var nextli=activeli.next();
        var nextsource=nextli.children().attr('src');
        $('#slider-img').attr('src',nextsource);
        $('.bullet-box ul li').removeClass('active');
        nextli.addClass('active');
        }
    }

    setInterval(function(){
        nextar();
    },5000)
    //Slider Code For right arrow
    $('#left-arrow').on('click',function(){
        var activeli=$('.bullet-box').find('.active');
        var activeindex=activeli.index();
        var totallength=$('.bullet-box ul li').length;

        if(activeindex==0){
        var firstli=$('.bullet-box ul li').last();
        var nextsource=firstli.children().attr('src');
        $('#slider-img').attr('src',nextsource);
        $('.bullet-box ul li').removeClass('active');
        firstli.addClass('active');
       
        }else{
            var nextli=activeli.prev();
        var nextsource=nextli.children().attr('src');
        $('#slider-img').attr('src',nextsource);
        $('.bullet-box ul li').removeClass('active');
        nextli.addClass('active');
        }


    });

});