import { Observador } from '../support_modules/observador.js';

class NumeroUlam {  

  constructor() {
    var terminoAnterior = 0;
    var terminoActual = 0;
    var numeroVecesActualizado = 0;
    var valor = 0;

    var listaObservadores = new Observador();
    
    this.observadores = function(){
      return listaObservadores;
    };

    this.reiniciar = function () {
      terminoAnterior = 0;
      terminoActual = 0;
      numeroVecesActualizado = 0;
      valor = 0;

      observerList.notificar(valor);
    };

    this.getValor = function(){
      return valor;
    };

    this.mostrar = function (elemento) {
      elemento.impresion(valor);
    };

    this.avanzar = function () {
      
      
      listaObservadores.notificar(valor);
    };    

    this.retroceder = function () {
     
      
      listaObservadores.notificar(valor);
    };

    NumeroUlam.prototype.toString = function numeroUlamToString() {
      var retorno = "Termino anterior: " + terminoAnterior + " Termino actual: " + terminoActual + " NumeroVecesActualizado: " + numeroVecesActualizado + " Valor: " + valor;
      return retorno;
    };

    this.representacionBinariaTest = function () {
      return valor.toString(2);
    };

    this.representacionHexadecimalTest = function () {
      return valor.toString(16);
    };
  }   

}

export { NumeroUlam };