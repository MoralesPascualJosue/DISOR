class Panel{    
    constructor(id,align,fondo){        
        var div_ = document.createElement("div");
        var id_ = id;
        div_.setAttribute('id',id_);        
        div_.setAttribute('align',align);    
        div_.setAttribute('style',"background-color:"+fondo+"; display: block;");

        this.mostrar  = function(elemento){
            elemento.appendChild(div_);
        }

        this.impresion = function(elemento){
            elemento.mostrar(div_);
        }
    }    
}

export { Panel };
