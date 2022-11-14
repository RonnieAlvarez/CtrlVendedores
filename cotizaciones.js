// https://www.youtube.com/watch?v=IAOHydmDrmQ
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
  for (let i = 0; i < data.length; i++) {
    dbody += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`;
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
  //console.log("ya");

  document.getElementById("demo").innerHTML = "";
  // data.symbol  data.price
  var preguntame = data;
  var pal = document.getElementById('buscar-pal').value || 'BTCUSD';
  //var tam = pal.length;
  console.log(pal);
  for (indice in preguntame) {
    var item = preguntame[indice];
    console.log(item);
    //console.log(data)
    var nombre = item.symbol;
    var price = item.price;
//    console.log(nombre);
    if (pal.length != 0 && nombre.length != 0) {
      if (nombre.toUpperCase().search(pal.toUpperCase()) != -1) {
        var node = document.createElement("li");
        node.innerHTML =
        "<p>" + nombre + " price: " + price + "</p>";
//          "<a href=" + nombre + ">" + nombre + " price: " + price + "</a>";
        document.getElementById("demo").appendChild(node);
      }
    }
  }
}
