$(function(){
  $('li').eq(3).append('<ul><li><a href="#">link 4.a</a></li></ul>').before('<li><a href="#">link 3.5</a></li>');
  $('.navbar>ul>li').eq(6).prepend('😎').after('🙂');

})
