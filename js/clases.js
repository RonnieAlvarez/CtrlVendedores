class Vendedor {
  constructor(codven, nombreven, comisionven,nombreclave,fechaingreso) {
    this.codven = codven;
    this.nombreven = nombreven;
    this.comisionven = comisionven;
    this.nombreclave = nombreclave;
    this.fechaingreso = fechaingreso;
  }
}
class Usuario {
  constructor(codusuario,claveusuario,nombreusuario) {
    this.codusu = codusuario;
    this.claveusu = claveusuario;
    this.nombreusu = nombreusuario
  }
}
const _vendedor = Vendedor;
const _usuario = Usuario;
export { _vendedor as vendedor };
export { _usuario as usuario };