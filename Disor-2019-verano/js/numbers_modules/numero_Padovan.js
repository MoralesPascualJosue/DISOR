import { Observador } from '../support_modules/observador.js';

class NumeroPadovan {  

  constructor() {
    var terminoAnteriorAnteriorAnterrior = 0;
    var terminoAnteriorAnterior = 0;
    var terminoAnterior = 0;
    var terminoActual = 0;
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

    this.avanzar = function () {    
      if(numeroVecesActualizado == 0 || numeroVecesActualizado == 1 || numeroVecesActualizado == 2){  
        terminoActual = 1;
        terminoAnterior = 1;
        terminoAnteriorAnterior = 1;
        terminoAnteriorAnteriorAnterrior = 1;        
      }else{
        terminoAnteriorAnteriorAnterrior = terminoAnteriorAnterior;
        terminoAnteriorAnterior = terminoAnterior;
        terminoAnterior = terminoActual;

        terminoActual = terminoAnteriorAnterior+terminoAnteriorAnteriorAnterrior;  

      }
      valor = terminoActual;
      numeroVecesActualizado++;            
      listaObservadores.notificar(valor);      
    };    

    this.retroceder = function () {   
      if(numeroVecesActualizado < 3){  
        terminoActual = 1;
        terminoAnterior = 1;
        terminoAnteriorAnterior = 1;
        terminoAnteriorAnteriorAnterrior = 1;                
      }
      if(numeroVecesActualizado>2){        
        terminoActual = terminoAnterior;
        terminoAnterior = terminoAnteriorAnterior;
        terminoAnteriorAnterior = terminoAnteriorAnteriorAnterrior;

        terminoAnteriorAnteriorAnterrior = terminoActual-terminoAnteriorAnterior
      }
      
      valor = terminoActual;
      if(numeroVecesActualizado > 0){
        numeroVecesActualizado--;
      }
      listaObservadores.notificar(valor);                   
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
