$(function(){
  $('article').eq(3).find('a').eq(3).html('Pinterest').attr('href', 'http://pinterest.com');
  $('a[href="#"]').click(function (evento){
    evento.preventDesafult();
  });
  $('.header__main').children('h2').css('font-size', '3em');
});
