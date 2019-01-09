// Deberemos detener la propagación del evento para que no se siga gatillando la misma acción en elementos interiores.
// Para este ejercicio es necesario crear las acciones de click para ambos botones que se encuentran en la franja blanca.
// Botón con clase social__like debe hacer un toggle de la clase social__like--clicked.
// Es decir, que si la tiene, la debe eliminar y si no agregarla.
// El botón con clase social__link debe mostrar un alert con el alt de la imagen en donde se encuentra.
// Eso significa que por medio de traversing vas a acceder a esa información.
// Tip: recuerda que son dos botones, uno dentro de otro. Por ende es posible gatillar las acciones de ambos botones en vez de solo una.

$(function(){
  $('.social__like').click(function(){
    alert($(this).toggleClass('.social__like--clicked'));
  });
  $('.social__link').click(function(){
    alert($('img').attr('alt'));
  });
});
