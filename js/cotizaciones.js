let endpoint = "https://api.binance.com/api/v3/ticker/price";
var data;
fetch(endpoint)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    data = datos;
    buscarpar(datos);
    mostrarData(datos);
  })
  .catch((e) => console.log(e));

const mostrarData = (data) => {
  let dbody = "";
  let esNum = new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 7,
  });
  /* data.length */
  for (let i = 0; i < 120; i++) {
    dbody += `<tr><td style="text-align:center width:50px">${
      data[i].symbol
    }</td><td style="text-align:rigth width:50px">${esNum.format(
      data[i].price
    )}</td></tr>`;
    document.getElementById("bdatos").innerHTML = dbody;
  }
  document.getElementById("overlay").style.display = "none";
};
let buscaa = document.getElementById("busca");
buscaa.addEventListener("click", autocompletado);
var buscar = document.getElementById("buscar-pal");

function buscarpar(array) {
  buscar.addEventListener("onKeyUp", autocompletado);
}

function autocompletado() {
  document.querySelector("table").style.display = "none";
  document.getElementById("demo").innerHTML = "";
  var preguntame = data;
  var pal = document.getElementById("buscar-pal").value || "BTCUSD";
  let button_limpia = document.createElement("button");
  button_limpia.innerHTML = "Regresar";
  document.getElementById("botbus").appendChild(button_limpia);
  button_limpia.className += "busca";
  button_limpia.addEventListener("click", limbiar);

  for (indice in preguntame) {
    var item = preguntame[indice];
    var nombre = item.symbol;
    var price = item.price;
    if (pal.length != 0 && nombre.length != 0) {
      if (nombre.toUpperCase().search(pal.toUpperCase()) != -1) {
        var node = document.createElement("li");
        node.innerHTML = "<p>Par: " + nombre + " cotización: " + price + "</p>";
        document.getElementById("demo").appendChild(node);
      }
    }
  }
}

function limbiar() {
  while (demo.firstChild) {
    demo.removeChild(demo.firstChild);
  }
  botbus.removeChild(botbus.lastChild);
  document.querySelector("table").style.display = "block";
}
