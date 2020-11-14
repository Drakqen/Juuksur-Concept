$(function() {
    $('.dropbtn').on('click', function(){
      $('.dropbtn').not($(this)).removeClass('scaled');
      $(this).toggleClass('scaled');
    });
  });