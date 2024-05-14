function validarFormulario() {
    
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;

   
    var letras = /^[A-Za-z]+$/;
    var numeros = /^[0-9]+$/;
    var correoValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nombre.length > 15 || !nombre.match(letras)) {
      alert("El nombre no es válido");
      return false;
    }

    if (apellidos.length > 40 || !apellidos.match(letras)) {
      alert("Los apellidos no son válidos");
      return false;
    }

    if (telefono.length > 9 || !telefono.match(numeros)) {
      alert("El teléfono no es válido");
      return false;
    }

    if (!correo.match(correoValido)) {
      alert("El correo electrónico no es válido");
      return false;
    }

   
    var condiciones = document.getElementById("condiciones").checked;
    if (!condiciones) {
      alert("Debes aceptar las condiciones de privacidad");
      return false;
    }

    return true;
  }

document.addEventListener('DOMContentLoaded', function() {
    // Accediendo al elemento select y asignando el evento.
    var productoSelect = document.getElementById('producto');
    productoSelect.addEventListener('change', function() {
        mostrarOcultarExtras();
        calcularPresupuesto();
    });

    // Asegura que las funciones se ejecuten al cargar para establecer el estado inicial.
    mostrarOcultarExtras();
    calcularPresupuesto();
});



function calcularPresupuesto() {
  var producto = document.getElementById('producto').value;
  var plazo = parseInt(document.getElementById('plazo').value, 10);

  // Determinar el precio base según el producto seleccionado.
  var precioBase = producto === 'opcion1' ? 100 : producto === 'opcion2' ? 200 : 300;

  // Aplicar descuento según el plazo.
  var descuento = plazo >= 12 ? 0.1 : plazo >= 6 ? 0.05 : 0;
  var precioTotal = precioBase * (1 - descuento);

  // Calcular el precio de los extras seleccionados.
  var precioExtras = 0;
  if (document.getElementById('extras').style.display !== 'none') {
      document.querySelectorAll('input[name="extras"]:checked').forEach(function(extra) {
          precioExtras += extra.value === 'extra1' || extra.value === 'extra2' ? 100 : 150;
      });
  }

  // Calcular el presupuesto final.
  var presupuestoFinal = precioTotal + precioExtras;
  document.getElementById('presupuesto').innerHTML = `Presupuesto final: ${presupuestoFinal.toFixed(2)} €`;
}
function mostrarOcultarExtras() {
  var producto = document.getElementById('producto').value;
  var extrasCheckboxes = document.querySelectorAll('#extras input[type="checkbox"]'); // Selecciona todos los checkboxes dentro del div 'extras'
  
  // Habilita o deshabilita los checkboxes basado en la selección del producto
  if (producto === 'opcion1') {
      extrasCheckboxes.forEach(function(checkbox) {
          checkbox.disabled = true; // Deshabilita los checkboxes
      });
  } else {
      extrasCheckboxes.forEach(function(checkbox) {
          checkbox.disabled = false; // Habilita los checkboxes
      });
  }
}