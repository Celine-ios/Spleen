
function reproducir() {



//Elemento DOM de la pelicula

	   var medio = document.getElementById('medio');

	   // condicional que evalua si la pelicula no esta parada

	     if (!medio.paused) {

	     	   medio.pause();

				$('.btn-primary').text("Play");	     		

	     } else {

	     		medio.play();



	      //Establecer el valor del boton en "Pause"

	        $('.btn-primary').text("Pause");


	     }

	      

}

$(document).ready(function() {


			$('.btn-primary').click(reproducir);


});