// Codigo para pasar los pasos en "Publicar" del paso 1 -> paso 2 -> paso 3 -> paso 1 (con alerta de que se "publico correctamente")
function myFunction(idButton) {
    var producto1 = document.querySelector('.grid-container-publicar');
    var producto2 = document.querySelector('.grid-container-publicar-2');
    var producto3 = document.querySelector('.grid-container-publicar-3');
  
   switch(idButton) {
   case 1:
            producto1.style.display = 'none';
            producto2.style.display = 'grid';
            producto3.style.display = 'none';
      break;
  
   case 2:
            producto1.style.display = 'none';
            producto2.style.display = 'none';
            producto3.style.display = 'grid';
      break;
  
   case 3:
            alert("¡Felecidades su publicacion ah sido publicada!")
            producto1.style.display = 'grid';
            producto2.style.display = 'none';
            producto3.style.display = 'none';
      break;
  
  default:
            alert("hay un problema: No existe el producto.")
          }
}

// Aparecer filter

let mostrar = document.querySelector(".filter") 

function mostrarFilter(){
      mostrar.style.display = "block"
}

// Desaparecer filter

function ocultarFilter(){
      mostrar.style.display = "none"
}


// Aparecer maps

let mostrarMaps = document.querySelector(".map") 

function mostrarMap(){
      mostrarMaps.style.display = "block"
}

function ocultarMap(){
      mostrarMaps.style.display = "none"
}

