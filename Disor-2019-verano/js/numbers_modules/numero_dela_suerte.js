import { Observador } from '../support_modules/observador.js';

class NumerodelaSuerte {  

  constructor(longitud) {
    var serie = [];
    var longitud_ = longitud;
    var numeroVecesActualizado = 0;
    var valor = 0;    

    var listaObservadores = new Observador();
            
    this.observadores = function(){
      return listaObservadores;
    };

    this.reiniciar = function () {      
      numeroVecesActualizado = 0;
      valor = serie[numeroVecesActualizado];

      observerList.notificar(valor);
    };

    this.eliminar = function(salto){              
        for(let salto_ = 0;salto_<serie.length;salto_+=salto){
            console.log(""+serie[salto_]);            
        }                
    };

    this.generar = function(){           
        for(let posicion = 1;posicion<longitud_;posicion++){
            serie.push(posicion);
        }

        for(let salto = 2;salto<serie.length;salto++){

            this.eliminar(serie[salto-1]);
        }                

        console.log(serie);
    };    

    this.getValor = function(){
      return valor;
    };

    this.mostrar = function (elemento) {
      elemento.impresion(valor);
    };


    this.avanzar = function () {              
      numeroVecesActualizado++;
      valor = serie[numeroVecesActualizado];
      listaObservadores.notificar(valor);
    };    

    this.retroceder = function () {
      numeroVecesActualizado--;     
      valor = serie[numeroVecesActualizado];
      listaObservadores.notificar(valor);
    };

    NumerodelaSuerte.prototype.toString = function numerodelasuerteToString() {
      var retorno = "Termino anterior: " + terminoAnterior + " Termino actual: " + terminoActual + " NumeroVecesActualizado: " + numeroVecesActualizado + " Valor: " + valor;
      return retorno;
    };

    this.representacionBinariaTest = function () {
      return valor.toString(2);
    };

    this.representacionHexadecimalTest = function () {
      return valor.toString(16);
    };

    this.generar();
  }   

  
}

export { NumerodelaSuerte };