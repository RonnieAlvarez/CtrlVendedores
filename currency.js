function coti(){
    let burl = "https://api.binance.com";
    let query = '/api/v1/ticker/24hr';
    query += '?symbol=BTCUSDT';
    let url = burl + query;
    
    //let infocruda = document.getElementById('infocruda');
    let isymbol = document.getElementById('symbol');
    let iprice = document.getElementById('coti');
       
    fetch(url)
    .then(res => res.json())
    .then(data => {
     // infocruda.innerHTML = JSON.stringify(data);
     //console.log(isymbol)
     //console.log(data.symbol)
      isymbol.value = data.symbol;
      iprice.value = data.lastPrice;
    })
    }
    function otroapi(){
      var requestURL = 'https://api.exchangerate.host/latest?base=USD';
      var request = new XMLHttpRequest();
      //var base = 'USD';
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
      
      request.onload = function() {
        var response = request.response;
        //response.base='USD'
        console.log(response.base);
        console.log(response.rates.USD)
        console.log(response.rates.BTC)
        console.log(response.rates.CRC)
        
        
      }
    }
    function convetcur(){
      var myHeaders = new Headers();
      myHeaders.append("apikey", "0AFPEpYKx33iExvpbj7lIXIXUOcEE0mJ");
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
      
      fetch("https://api.apilayer.com/exchangerates_data/convert?to=CRC&from=USD&amount=1", requestOptions)
        .then(response => response.json())
        .then( datos => mostrarData(datos))
        //.then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    /*  fetch(endpoint)
        .then( respuesta=> respuesta.json())
        .then( datos => mostrarData(datos))
        .catch( e => console.log(e))*/
      
      const mostrarData = (data)=>{
        console.log(data)
          let colon = data.result
      //    let usa = data
          console.log(colon)
    //      console.log(usa)
     //     console.log(colon*usa)
      //    for (let i=0; i < data.length; i++) {
            //  dbody += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
              //console.log(dbody)
          //    document.getElementById("bdatos").innerHTML = dbody
        //  }
      }
      }
    
    
    function colones(){
    let endpoint = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'
    fetch(endpoint)
      .then( respuesta=> respuesta.json())
      .then( datos => mostrarData(datos))
      .catch( e => console.log(e))
    
    const mostrarData = (data)=>{
      console.log(data)
        let dbody = ''
        let colon = data.eur.crc
        let usa = data.eur.usd
        console.log(colon)
        console.log(usa)
        console.log(colon*usa)
    //    for (let i=0; i < data.length; i++) {
          //  dbody += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
            //console.log(dbody)
        //    document.getElementById("bdatos").innerHTML = dbody
      //  }
    }
    }
    function coti_colones(){
      let burl = "https://api.binance.com";
      let query = '/api/v1/ticker/24hr';
      query += '?symbol=BTCUSDT';
      let url = burl + query;
      
      //let infocruda = document.getElementById('infocruda');
      let isymbol = document.getElementById('symbol');
      let iprice = document.getElementById('coti');
         
      fetch(url)
      .then(res => res.json())
      .then(data => {
       // infocruda.innerHTML = JSON.stringify(data);
       //console.log(isymbol)
       //console.log(data.symbol)
        isymbol.value = data.symbol;
        iprice.value = data.lastPrice;
      })
      }
      
    