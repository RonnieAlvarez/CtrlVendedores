function saltar(e, id) {
    // Obtenemos la tecla pulsada
    (e.keyCode) ? k = e.keyCode : k = e.which;
    // Si la tecla pulsada es enter (codigo ascii 13)
    if (k == 13) {
        // Si la variable id contiene "submit" enviamos el formulario
        if (id == "submit") {
          //  console.log('submit')
            document.forms[0].submit();
        } else {
            // nos posicionamos en el siguiente input
            document.getElementById(id).focus();
        }
    }
}
function seleccionafila(x) {
    let elementos = document.getElementById('target1').
        getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.background = 'white';
    }

    x.style.background = "#F1F1F1";
}

function $(param){
    return document.querySelector(param)
}
