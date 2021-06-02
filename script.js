$(document).ready(function(){


     var count = $(".section-icons").children().length;

     $("#target-menu").click(()=> {
          $(".target").toggleClass("menu-active");
     })
     setInterval(() => {

          var icons = $(".section-icons i.change").removeClass("change");

          var i = 2 + icons.index() ;


          if(i <= count){
               icons.next().addClass("change");
          }else{
               i = 2;
               $(".section-icons i").first().addClass( "change" );

          }
     }, 4000)

   });


