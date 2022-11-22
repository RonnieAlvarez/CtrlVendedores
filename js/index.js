
import { usuario, vendedor } from "./clases.js";
const usuario2 = new usuario("002","1234","Pedro")
let contadorintentos=0

let el = document.getElementById("clickMe")
if (el.addEventListener) el.addEventListener("click", iniciar, false)
else if (el.attachEvent) el.attachEvent('onclick', iniciar);


function iniciar(){
  let clave = usuario2.claveusu;
  let codigo;
  let respuesta;
  codigo=document.getElementById('uname').value
  respuesta = document.getElementById('psw').value
  if (respuesta!=usuario2.claveusu){
   if (contadorintentos<=3){
     let erret = document.getElementById('psw')
     erret.style.cssText= 'border-left: 7px solid var(--red);' 
    document.getElementById('psw').focus()
    contadorintentos += 1
    } else {
      modal.style.display = "none";
    document.getElementById("resultado").innerHTML="Demasiados intentos fallidos"
    window.stop();
  }
} else {
   sessionStorage.setItem("UsuarioActual",usuario2.nombreusu)
   document.getElementById('menuopciones').classList.remove('d-none');
   modal.style.display = "none";
   Bienvenido()
}
}

function Bienvenido() {    
  Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido!! Selecciona las opciones del Dropdown Menu',
      showConfirmButton: false,
      timer: 2500
    })
  }
