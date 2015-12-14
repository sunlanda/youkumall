/**
 * Created by chengfubei on 2015/11/19.
 */


$(function(){
       $(".pic_click div").mouseenter(function(){
           $(".pic_banner").eq($(this).index()).fadeIn("fast").siblings().fadeOut("fast");
           $(this).addClass("sqr").siblings().removeClass("sqr")
       })
            $(".single_box div").mouseenter(function(){
            $(".single_right div img").eq($(this).index()).slideDown("fast").siblings().slideUp("fast")
            $(this).addClass("single_sqr").siblings().removeClass("single_sqr")

        })



})

