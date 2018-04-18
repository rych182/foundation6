$(document).foundation()

//El parametro (ev) recibe todos los parametros del evento, donde se hizo click etc
$('[data-toggle-dia]').click(function (ev) {
//se puso toggleDia porque ya viene implícito el "data" y el primer gúión se le quita
	const panel = $(this).data('toggleDia')
//Queremos obtener el #lineup-tabs que es donde están todos nuestros elementos(fotos de artistas por día)
//Con foundation activamos el panel donde se hizo click en el menú superior
//Panel es solo para decir que quieres activar un panel	
	$('#lineup-tabs').foundation('selecTab',panel)


})


//Cerrar el menú responsivo offCanvas cuando se de click
//Es muy utilizado usar variables con "$" en JQuery

const $offCanvas = $('#offCanvas')
$offCanvas.find('li').click(function (ev){
	//que llame a foundation y cierre
	$offCanvas.foundation('close')
}) 

/*Por si lo necesitas
"setTimeout" es una función que tienen todos los navegadores, lo que primero recibe es una función
y luego un Delay, Ejemplo:
setTimeout(function(){
	$sticky.css('left','0px')
},300)

*/