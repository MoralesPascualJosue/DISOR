class Observador {    
    constructor() {
      this.observadores = [];
    }
  
    suscribir(elemento) {
      this.observadores.push(elemento);
    }
  
    notificar(datos) {
      this.observadores.forEach(observador => observador.impresion(datos));
    }
  }

  export { Observador };