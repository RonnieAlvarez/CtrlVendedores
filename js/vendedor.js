import { vendedor } from "./clases.js";
import "./utilidades.js";

const codvenVacio = () => codven == "" || vendedor2.codven.length < 3;
const vendedor2 = new vendedor();
let arrayvendedores = [];
const usuario = sessionStorage.getItem("UsuarioActual") || "Visitante";
const element = document.getElementById("agregar");
const element1 = document.getElementById("borrar");
const tablatitulos = document.getElementById("target1");
let value = "001";
let mayor = 0;
tablatitulos.addEventListener("click", vclick);
let codifvend = "";
document.getElementById("digitado").innerHTML = "";
element.addEventListener("click", agregar);
element1.addEventListener("click", borrar);
coti();
fechaactual();
Cambiartexto("encabezausuario", usuario, "Usuario");
almacenamiento();
codIni();
Cambiartexto("cantvend", arrayvendedores.length || 0, "Cant / Vend");
window.onload = document.getElementById("nombreven").focus();
document.getElementById("nombreven").addEventListener("input", (e) => {
  let semilla = document.getElementById("codven").value;
  let element = 0;
  for (let index = 0; index < semilla.length; index++) {
    element += parseInt(semilla[index]);
  }
  let x2 = e.target.value;
  let array = x2.split("");
  document.getElementById("digitado").innerHTML = codifica(array, element);
  codifvend = codifica(array, element);
});
//*-*-*-*-*-*-*-*-*-*-*-*-*-*FUNCIONES*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
function almacenamiento() {
  if (localStorage.getItem("myArray")) {
    arrayvendedores = JSON.parse(localStorage.getItem("myArray"));
    for (const key in arrayvendedores) {
      let tablaven = document.getElementById("target1");
      tablaven.innerHTML += `<tr>
      <td style="width: 20px;">${arrayvendedores[key].codven} </td>
      <td style="width: 40px;">${capitalize(
        arrayvendedores[key].nombreven
      )} </td>
      <td style="width: 20px;">${Number.parseFloat(
        arrayvendedores[key].comisionven
      ).toFixed(2)} </td>
      <td style="width: 20px;">${arrayvendedores[key].nombreclave} </td>
      <td style="width: 20px;">${arrayvendedores[key].fechaingreso} </td>
      <td class="eliminarRow">Eliminar</td>
      </tr>`;
    }
    return true;
  } else {
    return false;
  }
}
function fechaactual() {
  setTimeout(() => {
    const DateTime = luxon.DateTime;
    const ahoraa = DateTime.now();
    document.getElementById("fecha").innerHTML =
      "<b>" + ahoraa.toLocaleString(DateTime.DATE_HUGE) + "</b>";
  }, 3000);
}

function coti() {
  let burl = "https://api.binance.com";
  let query = "/api/v1/ticker/24hr";
  query += "?symbol=BTCUSDT";
  let url = burl + query;
  let isymbol = document.getElementById("symbol");
  let iprice = document.getElementById("coti");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      isymbol.innerHTML = data.symbol;
      iprice.innerHTML = zfill(data.lastPrice, 3);
    });
}
function codIni() {
  let tamano = arrayvendedores.length;
  if (tamano > 0) {
    mayor =
      Number(arrayvendedores[tamano - 1]["codven"]) || arrayvendedores.length;
    value = zfill(mayor + 1, 3);
    value = value || {};
    mayor = parseInt(value);
    if (parseInt(mayor) <= parseInt($("input").value)) {
      value = zfill(mayor + 1, 3);
    }
  } else {
    if (arrayvendedores.length == 0) {
      value = "001";
      mayor = 1;
    }
  }
  $("input").value = value;
}

function borraVendelArray(arr, pos) {
  arr.splice(pos - 1, 1);
  localStorage.setItem("myArray", JSON.stringify(arrayvendedores));
  if (arrayvendedores.length == 0) {
    value = "001";
    mayor = 1;
  }
  modificant(arrayvendedores.length || 0);
}
function vclick(e) {
  // funcion que elimina la fila de la tabla presionando la ultima casilla "eliminar"
  swalWithBootstrapButtons
    .fire({
      title: "Esta Seguro de eliminar este vendedor?",
      text: "No se podra recuperar la información de este Vendedor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        if (e.target.matches(".eliminarRow")) {
          let tindex = e.target.parentNode.rowIndex;
          tablatitulos.deleteRow(tindex);
          borraVendelArray(arrayvendedores, tindex);
          codIni();
        }
        swalWithBootstrapButtons.fire(
          "Borrado!",
          "Los datos del vendedor fueron eliminados.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "Los datos del vendedor se conservan :)",
          "error"
        );
      }
    });
  document.getElementById("nombreven").focus();
}

function codifica(array, element) {
  // codifica el nombre del vendedor agregarndo la sumatoria de los valores
  // de cada caracter del codigo al valor ascii de cada letra del nombre
  let aux = [];
  for (let index = 0; index < array.length; index++) {
    aux[index] = String.fromCharCode(array[index].charCodeAt(0) + element);
  }
  return aux.join("");
}

function agregar() {
  let resbusquedavend = existevendedor(document.getElementById("codven").value);
  if (resbusquedavend != false) {
    document.getElementById("nombreven").value = "";
    document.getElementById("comisionven").value = 0;
    return false;
  }
  let codven = document.getElementById("codven").value;
  let nombreven = document.getElementById("nombreven").value;
  let comisionven = document.getElementById("comisionven").value;
  nombreven = capitalize(nombreven);
  vendedor2.codven = codven;
  vendedor2.nombreven = capitalize(nombreven);
  let campocomision = comisionven.trim();
  if (campocomision === "") {
    vendedor2.comisionven = 0.0;
  } else {
    vendedor2.comisionven = Number.parseFloat(comisionven).toFixed(2);
  }
  vendedor2.nombreclave = codifvend;
  vendedor2.fechaingreso = fechar();
  if (codvenVacio()) {
    document.getElementById("nombreven").focus();
  } else {
    let vended = new vendedor(
      codven,
      nombreven,
      comisionven,
      codifvend,
      fechar()
    );
    arrayvendedores.push(vended);
    ordenarray();
    localStorage.setItem("myArray", JSON.stringify(arrayvendedores));
    modificant(arrayvendedores.length || 0);
    lineaven();
  }
}
function ordenarray() {
  arrayvendedores.sort(function (a, b) {
    if (a.codven > b.codven) {
      return 1;
    }
    if (a.codven < b.codven) {
      return -1;
    }
    return 0;
  });
}
function capitalize(word) {
  let respuesta = word.charAt(0).toUpperCase() + word.slice(1);
  return respuesta;
}

function Cambiartexto(id, texto, etiqueta) {
  // Agrega el nombre del usuario actual a encabezado y cantidad de vendedores
  let textoanterior = document.getElementById(id).innerHTML;
  let nuevotexto = `${textoanterior} <font color= "cd0808"> <small> ${etiqueta}: ${texto} </small></font>`;
  document.getElementById(id).innerHTML = nuevotexto;
}

function modificant(texto) {
  let nuevotexto = `<font color= "cd0808"> <small> Cant / Vend: ${texto} </small></font>`;
  document.getElementById("cantvend").innerHTML = nuevotexto;
}

function lineaven() {
  let tablaven = document.getElementById("target1");
  tablaven.innerHTML += `<tr>
  <td style="width: 20px;">${vendedor2.codven} </td>
  <td style="width: 40px;">${capitalize(vendedor2.nombreven)} </td>
  <td style="width: 20px;">${Number.parseFloat(vendedor2.comisionven).toFixed(
    2
  )} </td>
  <td style="width: 20px;">${vendedor2.nombreclave} </td>
  <td style="width: 20px;">${vendedor2.fechaingreso} </td>
  <td class="eliminarRow">Eliminar</td>
  </tr>`;
  codIni();
  document.getElementById("nombreven").value = "";
  document.getElementById("comisionven").value = 0.0;
}

function borrar() {
  //  document.querySelector(param) remplazado por funcion personal de ${param} ubicada en utilidades.js
  $("form-vendedor").reset();
}

function fechar() {
  //formato "K291022"
  let d = new Date();
  let dia = new Array(7);
  let anio = d.getFullYear().toString();
  anio = anio.substring(anio.length - 2, anio.length);
  dia[0] = "D";
  dia[1] = "L";
  dia[2] = "K";
  dia[3] = "M";
  dia[4] = "J";
  dia[5] = "V";
  dia[6] = "S";
  let dial = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  let mes = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();

  return dia[d.getDay()] + dial + mes + anio;
}

function existevendedor(codven) {
  const result = arrayvendedores.find((el) => el.codven === codven);
  if (result == undefined) {
    return false;
  } else {
    return result;
  }
}
function zfill(number, width) {
  let numberOutput = Math.abs(number);
  let length = number.toString().length;
  let zero = "0";
  if (width <= length) {
    if (number < 0) {
      return "-" + numberOutput.toString();
    } else {
      return numberOutput.toString();
    }
  } else {
    if (number < 0) {
      return "-" + zero.repeat(width - length) + numberOutput.toString();
    } else {
      return zero.repeat(width - length) + numberOutput.toString();
    }
  }
}

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

export { vendedor2 as vendedor2 };
