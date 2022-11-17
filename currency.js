/*const currencies = {
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  INR: "Indian Rupee",
  JPN: "Japanese Yen",
  USD: "United States Dollar",
  ZAR: "South African Rand",
};*/


const array = [["AED","UAE Dirham"],["AFN","Afghan Afghani"],["ALL","Albanian Lek"],["AMD","Armenian Dram"],["ANG","Netherlands Antillian Guilder"],["AOA","Angolan Kwanza"],["ARS","Argentine Peso"],["AUD","Australian Dollar"],["AWG","Aruban Florin"],["AZN","Azerbaijani Manat"],["BAM","Bosnia and Herzegovina Convertible Mark"],["BBD","Barbados Dollar"],["BDT","Bangladeshi Taka"],["BGN","Bulgarian Lev"],["BHD","Bahraini Dinar"],["BIF","Burundian Franc"],["BMD","Bermudian Dollar"],["BND","Brunei Dollar"],["BOB","Bolivian Boliviano"],["BRL","Brazilian Real"],["BSD","Bahamian Dollar"],["BTN","Bhutanese Ngultrum"],["BWP","Botswana Pula"],["BYN","Belarusian Ruble"],["BZD","Belize Dollar"],["CAD","Canadian Dollar"],["CDF","Congolese Franc"],["CHF","Swiss Franc"],["CLP","Chilean Peso"],["CNY","Chinese Renminbi"],["COP","Colombian Peso"],["CRC","Costa Rican Colon"],["CUP","Cuban Peso"],["CVE","Cape Verdean Escudo"],["CZK","Czech Koruna"],["DJF","Djiboutian Franc"],["DKK","Danish Krone"],["DOP","Dominican Peso"],["DZD","Algerian Dinar"],["EGP","Egyptian Pound"],["ERN","Eritrean Nakfa"],["ETB","Ethiopian Birr"],["EUR","Euro"],["FJD","Fiji Dollar"],["FKP","Falkland Islands Pound"],["FOK","Faroese Króna"],["GBP","Pound Sterling"],["GEL","Georgian Lari"],["GGP","Guernsey Pound"],["GHS","Ghanaian Cedi"],["GIP","Gibraltar Pound"],["GMD","Gambian Dalasi"],["GNF","Guinean Franc"],["GTQ","Guatemalan Quetzal"],["GYD","Guyanese Dollar"],["HKD","Hong Kong Dollar"],["HNL","Honduran Lempira"],["HRK","Croatian Kuna"],["HTG","Haitian Gourde"],["HUF","Hungarian Forint"],["IDR","Indonesian Rupiah"],["ILS","Israeli New Shekel"],["IMP","Manx Pound"],["INR","Indian Rupee"],["IQD","Iraqi Dinar"],["IRR","Iranian Rial"],["ISK","Icelandic Króna"],["JEP","Jersey Pound"],["JMD","Jamaican Dollar"],["JOD","Jordanian Dinar"],["JPY","Japanese Yen"],["KES","Kenyan Shilling"],["KGS","Kyrgyzstani Som"],["KHR","Cambodian Riel"],["KID","Kiribati Dollar"],["KMF","Comorian Franc"],["KRW","South Korean Won"],["KWD","Kuwaiti Dinar"],["KYD","Cayman Islands Dollar"],["KZT","Kazakhstani Tenge"],["LAK","Lao Kip"],["LBP","Lebanese Pound"],["LKR","Sri Lanka Rupee"],["LRD","Liberian Dollar"],["LSL","Lesotho Loti"],["LYD","Libyan Dinar"],["MAD","Moroccan Dirham"],["MDL","Moldovan Leu"],["MGA","Malagasy Ariary"],["MKD","Macedonian Denar"],["MMK","Burmese Kyat"],["MNT","Mongolian Tögrög"],["MOP","Macanese Pataca"],["MRU","Mauritanian Ouguiya"],["MUR","Mauritian Rupee"],["MVR","Maldivian Rufiyaa"],["MWK","Malawian Kwacha"],["MXN","Mexican Peso"],["MYR","Malaysian Ringgit"],["MZN","Mozambican Metical"],["NAD","Namibian Dollar"],["NGN","Nigerian Naira"],["NIO","Nicaraguan Córdoba"],["NOK","Norwegian Krone"],["NPR","Nepalese Rupee"],["NZD","New Zealand Dollar"],["OMR","Omani Rial"],["PAB","Panamanian Balboa"],["PEN","Peruvian Sol"],["PGK","Papua New Guinean Kina"],["PHP","Philippine Peso"],["PKR","Pakistani Rupee"],["PLN","Polish Złoty"],["PYG","Paraguayan Guaraní"],["QAR","Qatari Riyal"],["RON","Romanian Leu"],["RSD","Serbian Dinar"],["RUB","Russian Ruble"],["RWF","Rwandan Franc"],["SAR","Saudi Riyal"],["SBD","Solomon Islands Dollar"],["SCR","Seychellois Rupee"],["SDG","Sudanese Pound"],["SEK","Swedish Krona"],["SGD","Singapore Dollar"],["SHP","Saint Helena Pound"],["SLE","Sierra Leonean Leone"],["SLL","Sierra Leonean Leone"],["SOS","Somali Shilling"],["SRD","Surinamese Dollar"],["SSP","South Sudanese Pound"],["STN","São Tomé and Príncipe Dobra"],["SYP","Syrian Pound"],["SZL","Eswatini Lilangeni"],["THB","Thai Baht"],["TJS","Tajikistani Somoni"],["TMT","Turkmenistan Manat"],["TND","Tunisian Dinar"],["TOP","Tongan Paʻanga"],["TRY","Turkish Lira"],["TTD","Trinidad and Tobago Dollar"],["TVD","Tuvaluan Dollar"],["TWD","New Taiwan Dollar"],["TZS","Tanzanian Shilling"],["UAH","Ukrainian Hryvnia"],["UGX","Ugandan Shilling"],["USD","United States Dollar"],["UYU","Uruguayan Peso"],["UZS","Uzbekistani So'm"],["VES","Venezuelan Bolívar Soberano"],["VND","Vietnamese Đồng"],["VUV","Vanuatu Vatu"],["WST","Samoan Tālā"],["XAF","Central African CFA Franc"],["XCD","East Caribbean Dollar"],["XDR","Special Drawing Rights"],["XOF","West African CFA franc"],["XPF","CFP Franc"],["YER","Yemeni Rial"],["ZAR","South African Rand"],["ZMW","Zambian Kwacha"],["ZWL","Zimbabwean Dollar"]]
//const obj = Object.assign({},array)
const lota = new Map(array)
const currencies = Object.fromEntries(lota)
//console.log(lota2)
//const array2 = []
/*array.forEach((e)=>{
 array2[e].value = (array[e].toString())
})*//*
for (let index = 0; index < array.length; index++) {
  const element = array[index].toString();
  array2.push(element)
}
//console.log(array2)
const array4=[]
const array3=[[],[]]
const iterator = array.values();
let i=0
for (const value of iterator) {
  array3[i,0]=value[i,0]
  array3[i,1]=value[i,1]
  i++
  //console.log(value[0]);
  //console.log(value[1])
  console.log(array3[i,0],array3[i,1])
  array4[i,0]=array3[i,0].toString()
  array4[i,1]=array3[i,1]
  console.log(array4)  
}
array4.forEach(()=>{
  console.log(array4)  
})
console.log(array4)
//const obj = array.toString()
*/
/*
const pares = function(){
  fetch("https://v6.exchangerate-api.com/v6/aa604d3ff9a08513d6c7b514/codes")
  .then((response) => {
    if (response.ok){
      console.log(response)
      return response.json()
    }
  })
}

console.log(pares())
*/
const primaryCurrency = document.getElementById("primary");
const secondaryCurrency = document.getElementById("secondary");
primaryCurrency.innerHTML = getOptions(currencies);
secondaryCurrency.innerHTML = getOptions(currencies);

function getOptions(data) {
  return Object.entries(data)
    .map(([country, currency]) => `<option value="${country}">${country} | ${currency}</option>`)
    .join("");
}

document.getElementById("btn-convert").addEventListener("click", fetchCurrencies);

function fetchCurrencies() {
  const primary = primaryCurrency.value;
  const secondary = secondaryCurrency.value;
  const amount = document.getElementById("amount").value;
  // Important: Include your API key below
  fetch("https://v6.exchangerate-api.com/v6/aa604d3ff9a08513d6c7b514/latest/" + primary)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data);
      displayCurrency(data, primary, secondary, amount);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function displayCurrency(data, primary, secondary, amount) {
  const calculated = amount * data.conversion_rates[secondary];
  document.getElementById("result").setAttribute("style", "display:block");
  document.getElementById("txt-primary").innerText = amount + " " + primary + " = ";
  document.getElementById("txt-secondary").innerText = calculated + " " + secondary;
}

