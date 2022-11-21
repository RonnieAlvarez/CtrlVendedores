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

const mostrarData = (data) => {
  let dbody = "";
  let esNum = new Intl.NumberFormat( "es-ES",{minimumFractionDigits: 2 ,maximumFractionDigits: 7}); 
  for (let i = 0; i < data.length; i++) {
    dbody += `<tr><td style="text-align:center width:50px">${data[i].symbol}</td><td style="text-align:rigth width:50px">${esNum.format(data[i].price)}</td></tr>`;
    document.getElementById("bdatos").innerHTML = dbody;
  }
  document.getElementById('overlay').style.display='none'
};
let buscaa = document.getElementById('busca')
buscaa.addEventListener('click',autocompletado)
var buscar = document.getElementById('buscar-pal');

function buscarpar(array) {
  buscar.addEventListener("onKeyUp", autocompletado);
}

function autocompletado() {
document.querySelector('table').style.display='none'
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
document.querySelector('table').style.display='block'
}


/*function fadePropia(selector){
  var s = document.getElementById(selector).style;
  s.opacity = 1;
  (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();
  }
  */
    function fadeIn() {
      const element = document.getElementById('overlay');
      element.style.display = 'none';
    }
  