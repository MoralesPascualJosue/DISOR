import { Observador } from '../support_modules/observador.js';

class NumeroPadovan {  

  constructor() {
    var numeroVecesActualizado = 0;
    var valor = 0;

    var listaObservadores = new Observador();
    
    this.observadores = function(){
      return listaObservadores;
    };

    this.reiniciar = function () {
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

    this.functionP = function(params){
      if(params == 0 || params == 1 || params == 2){
        return 1;
      }

      return this.functionP(params-2)+this.functionP(params-3);

    };

    this.avanzar = function () {
      valor = this.functionP(numeroVecesActualizado);
      numeroVecesActualizado++;            
      listaObservadores.notificar(valor);      
    };    

    this.retroceder = function () {   
      if(numeroVecesActualizado>0){
        numeroVecesActualizado--;            
        valor = this.functionP(numeroVecesActualizado);          
        listaObservadores.notificar(valor);
        console.log("Retrocedio p");
      }
    };

    NumeroPadovan.prototype.toString = function numeroPadovanToString() {
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

export { NumeroPadovan };