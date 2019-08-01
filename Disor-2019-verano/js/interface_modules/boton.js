class Boton{    
    constructor(texto,id){
        var texto_ = texto;
        var boton_ = document.createElement("button");
        var id_ = id;
        boton_.setAttribute('id',id_);
        boton_.innerText = texto_;

        this.evento= function(){
            return boton_;
        }

        this.mostrar  = function(elemento){
            elemento.appendChild(boton_);
        };
    }    
}

export { Boton };