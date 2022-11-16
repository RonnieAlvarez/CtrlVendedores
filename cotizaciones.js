// https://www.youtube.com/watch?v=IAOHydmDrmQ
$("#overlay").fadeIn(300);　
let endpoint = "https://api.binance.com/api/v3/ticker/price";
var data
fetch(endpoint)
  .then((respuesta) => respuesta.json())
    .then((datos) => {
      data=datos
    buscarpar(datos);
    mostrarData(datos);
  })
  .catch((e) => console.log(e));
//const array = (data) => {
//    console.log(e)
//;

const mostrarData = (data) => {
  // console.log(data)
  let dbody = "";
  let esNum = new Intl.NumberFormat( "es-ES",{minimumFractionDigits: 2 ,maximumFractionDigits: 7}); 
  for (let i = 0; i < data.length; i++) {
    dbody += `<tr><td>${data[i].symbol}</td><td>${esNum.format(data[i].price)}</td></tr>`;
    //console.log(dbody)
    document.getElementById("bdatos").innerHTML = dbody;
  }
};
let buscaa = document.getElementById('busca')
buscaa.addEventListener('click',autocompletado)
//let data = datos
var buscar = document.getElementById('buscar-pal');
function buscarpar(array) {
  buscar.addEventListener("onKeyUp", autocompletado);
}
function autocompletado() {
$('table').hide()
  document.getElementById("demo").innerHTML = "";
  var preguntame = data;
  var pal = document.getElementById('buscar-pal').value || 'BTCUSD';
  for (indice in preguntame) {
    var item = preguntame[indice];
    var nombre = item.symbol;
    var price = item.price;
    if (pal.length != 0 && nombre.length != 0) {
      if (nombre.toUpperCase().search(pal.toUpperCase()) != -1) {
        var node = document.createElement("li");
        node.innerHTML =
        "<p>Par: " + nombre + " cotización: " + price + "</p>";
        document.getElementById("demo").appendChild(node);
      }
    }
  }
  let button_limpia = document.createElement('button')
  button_limpia.innerHTML='Regresar'
  document.getElementById("demo").appendChild(button_limpia);
  button_limpia.className += 'busca'
  button_limpia.addEventListener('click',limbiar)
}

function limbiar(){
  while(demo.firstChild){
    demo.removeChild(demo.firstChild)
}
$('table').show()
}

$(function(){

})