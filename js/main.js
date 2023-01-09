// Codigo para pasar los pasos en "Publicar" del paso 1 -> paso 2 -> paso 3 -> paso 1 (con alerta de que se "publico correctamente")
function myFunction(idButton) {
    var producto1 = document.querySelector('.publica');
    var producto2 = document.querySelector('.publica-2');
    var producto3 = document.querySelector('.publica-3');
  
   switch(idButton) {
   case 1:
            producto1.style.display = 'none';
            producto2.style.display = 'flex';
            producto3.style.display = 'none';
      break;
  
   case 2:
            producto1.style.display = 'none';
            producto2.style.display = 'none';
            producto3.style.display = 'flex';
      break;
  
   case 3:
            alert("¡Felecidades su publicacion ah sido publicada!")
            producto1.style.display = 'flex';
            producto2.style.display = 'none';
            producto3.style.display = 'none';
      break;
  
  default:
            alert("hay un problema: No existe el producto.")
          }
}

// Aparecer Register



// Aparecer Login
