$(function(){

  $(".toggle_btn").click(function(){

    if($("#header").hasClass("open")){


      $("#header").removeClass("open");


    }else{

      $("#header").addClass("open");
    }


  });

//背景押すと元に戻る
$("#mask").click(
  
  function(){
      $("header").removeClass("open");
  });





});