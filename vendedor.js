import { vendedor } from "./clases.js";
let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
  .then( respuesta=> respuesta.json())
  .then( datos => mostrarData(datos))
  .catch( e => console.log(e))

const mostrarData = (data)=>{
  console.log(data)
}

// https://www.youtube.com/watch?v=IAOHydmDrmQ
//minutos 12:19
// https://www.youtube.com/watch?v=IAOHydmDrmQ



const codvenVacio = () => codven == "" || vendedor2.codven.length < 3;
const vendedor2 = new vendedor();
let arrayvendedores = [];
const usuario = sessionStorage.getItem("UsuarioActual");
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
fechaactual()
Cambiartexto("encabezausuario", usuario,"Usuario");
almacenamiento()
codIni();
Cambiartexto("cantvend",(arrayvendedores.length || 0),"Cant / Vend");
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
  // verificar si existe el arreglo
  if (localStorage.getItem("myArray")) {
    //localStorage.setItem("myArray", JSON.stringify(arrayvendedores));
    //cargar el arreglo
    arrayvendedores = JSON.parse(localStorage.getItem("myArray"));
    //deplegar el arreglo
    for (const key in arrayvendedores) {
     // console.log(arrayvendedores[key].codven);
      let tablaven = document.getElementById("target1");
      tablaven.innerHTML += `<tr>
      <td style="width: 70px;">${arrayvendedores[key].codven} </td>
      <td style="width: 150px;">${arrayvendedores[key].nombreven} </td>
      <td style="width: 70px;">${Number.parseFloat(arrayvendedores[key].comisionven).toFixed(2)} </td>
      <td style="width: 70px;">${arrayvendedores[key].nombreclave} </td>
      <td style="width: 50px;">${arrayvendedores[key].fechaingreso} </td>
      <td class="eliminarRow">Eliminar</td>
      </tr>`;
    }
    return true
    //establece el codigo inicial
    //codIni()
  } else {return false}
}
function fechaactual(){
  // coloca la fecha en color azul debajo del titulo Listado de vendedores de forma ASINCRONA 5 segundo despues de cargado el titulo
setTimeout(()=>{  
const DateTime = luxon.DateTime
const ahoraa = DateTime.now()
document.getElementById('fecha').innerHTML= '<b>' + ahoraa.toLocaleString(DateTime.DATE_HUGE) +'</b>'
},5000)
}
function codIni() {
  //verifica el codigo del vendedor y agregar ceros a la izq en zfill
  let tamano=arrayvendedores.length
  if (tamano > 0) {
   // if (arrayvendedores.hasOwnProperty("codven")){
     //console.log(arrayvendedores[tamano-1]["codven"])
     mayor= Number(arrayvendedores[tamano-1]["codven"]) || arrayvendedores.length
  //} else {mayor = tamano}
  //console.log(mayor);
    value = zfill(mayor + 1, 3);
    value = value || {};
    mayor = parseInt(value);
    if (parseInt(mayor) <= parseInt(document.querySelector("input").value)) {
      value = zfill(mayor + 1, 3);
    }
  } else {
    if (arrayvendedores.length == 0) {
      value = "001";
      mayor = 1;
    }
  }
  document.querySelector("input").value = value;
}

function borraVendelArray(arr, pos) {
  arr.splice(pos - 1, 1);
  localStorage.setItem("myArray", JSON.stringify(arrayvendedores));
  if (arrayvendedores.length == 0) {
    value = "001";
    mayor = 1;
  }
  modificant((arrayvendedores.length || 0));
}
function vclick(e) {
  // funcion que elimina la fila de la tabla presionando la ultima casilla "eliminar"
  if (e.target.matches(".eliminarRow")) {
    let tindex = e.target.parentNode.rowIndex;
    tablatitulos.deleteRow(tindex);
    borraVendelArray(arrayvendedores, tindex);
    codIni();
    document.getElementById("nombreven").focus();
  }
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
  // agregar los nuevos registros actualiza la informacion almacenada en la sessionstorage
  let resbusquedavend = existevendedor(document.getElementById("codven").value);
  //console.log("resbusqueda");
  if (resbusquedavend != false) {
    document.getElementById("nombreven").value = "";
    document.getElementById("comisionven").value = 0;
    return false;
  }
  let codven = document.getElementById("codven").value;
  let nombreven = document.getElementById("nombreven").value
  let comisionven = document.getElementById("comisionven").value;
  //console.log("comisionven");
  vendedor2.codven = codven;
  vendedor2.nombreven = capitalize(nombreven)
  let campocomision = $.trim($('#comisionven').val())
    if (campocomision==="") {
    vendedor2.comisionven = 0.00;
  } else {vendedor2.comisionven = Number.parseFloat(comisionven).toFixed(2);}
  //console.log("vendedor2.comisionven = Number.parseFloat(comisionven).toFixed(2)");
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
      ordenarray()
      localStorage.setItem("myArray", JSON.stringify(arrayvendedores));
      modificant((arrayvendedores.length || 0));
      lineaven();
    }
/*     console.log(vendedor2.comisionven);
    console.log(Number.parseFloat(comisionven).toFixed(2));
    console.log(comisionven);
 */}
function ordenarray(){
  arrayvendedores.sort(function(a,b){
    if (a.codven > b.codven) {
      return 1;
    }
    if (a.codven < b.codven) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })

}
function capitalize(word) {
 // console.log(word[0].toUpperCase() + word.slice(1));
  return word[0].toUpperCase() + word.slice(1);
}

function Cambiartexto(id, texto,etiqueta) {
  // Agrega el nombre del usuario actual a encabezado y cantidad de vendedores
  let textoanterior = document.getElementById(id).innerHTML;
  let nuevotexto = `${textoanterior} <font color= "cd0808"> <small> ${etiqueta}: ${texto} </small></font>`;
  document.getElementById(id).innerHTML = nuevotexto;
}

function modificant(texto) {
  
  let nuevotexto = `<font color= "cd0808"> <small> Cant / Vend: ${texto} </small></font>`;
  document.getElementById('cantvend').innerHTML = nuevotexto;
}



function lineaven() {
  //crea cada linea de la tabla con informacion digitada
  let tablaven = document.getElementById("target1");
  tablaven.innerHTML += `<tr>
  <td style="width: 70px;">${vendedor2.codven} </td>
  <td style="width: 150px;">${vendedor2.nombreven} </td>
  <td style="width: 70px;">${Number.parseFloat(vendedor2.comisionven).toFixed(2)} </td>
  <td style="width: 70px;">${vendedor2.nombreclave} </td>
  <td style="width: 50px;">${vendedor2.fechaingreso} </td>
  <td class="eliminarRow">Eliminar</td>
  </tr>`;
  codIni();
  document.getElementById("nombreven").value = "";
  document.getElementById("comisionven").value = 0.00;
}

function borrar() {
  // borra los inputs de captura de datos
   document.querySelector("form-vendedor").reset();
}

function fechar() {
  //crea la fecha en formato "K291022"
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
  let numberOutput = Math.abs(number); /* Valor absoluto del número */
  let length = number.toString().length; /* Largo del número */
  let zero = "0"; /* String de cero */

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


export { vendedor2 as vendedor2 };
