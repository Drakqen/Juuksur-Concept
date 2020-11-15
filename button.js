$(function() {
    $('.dropbtn').on('click', function(){
      $('.dropbtn').not($(this)).removeClass('scaled');
      $(this).toggleClass('scaled');
    });
  });

  $(function() {
    $('.dropbtn').on('click', function(){
      $('.dropdown-content').not($(this)).addClass('show');
      $(this).toggleClass('show');
    });
  });