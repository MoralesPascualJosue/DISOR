import { Observador } from '../support_modules/observador.js';

class NumeroFibonacci {  

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
      if (numeroVecesActualizado == 0) {
        terminoAnterior = 0;
        terminoActual = 1;
      }
      if (numeroVecesActualizado == 1) {
        terminoAnterior = 1;
        terminoActual = 1;
      }
      if (numeroVecesActualizado >= 2) {
        let respaldoTerminoAnterior = terminoAnterior;
        terminoAnterior = terminoActual;
        terminoActual = terminoActual + respaldoTerminoAnterior;
      }
      valor = terminoActual;
      numeroVecesActualizado += 1;      
      
      listaObservadores.notificar(valor);
    };    

    this.retroceder = function () {
      if (numeroVecesActualizado == 1) {
        terminoAnterior = 0;
        terminoActual = 0;
      }
      if (numeroVecesActualizado >= 2) {
        let respaldoTerminoActual = terminoActual;
        terminoActual = terminoAnterior;
        terminoAnterior = respaldoTerminoActual-terminoActual;
      }
      valor = terminoActual;
      if(numeroVecesActualizado>0){
        numeroVecesActualizado -= 1;
      }
      
      listaObservadores.notificar(valor);
    };

    NumeroFibonacci.prototype.toString = function numeroFibonacciToString() {
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

export { NumeroFibonacci };