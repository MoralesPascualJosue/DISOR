class Label{    
    constructor(texto,id,base){      
        var base_ = base;  
        var texto_ = texto;
        var label_ = document.createElement("h4");
        var id_ = id;
        label_.setAttribute('id',id_);
        label_.innerText = texto_;

        this.mostrar  = function(elemento){
            elemento.appendChild(label_);
        }

        this.impresion = function(valor){
            let textoImpresion = valor.toString(base_)+" ";

            if(this.happy(valor)){
                textoImpresion += " Happy";            
            }
            if(this.capicua(valor)){
                textoImpresion += " Capicúa";                
            }

            label_.innerText = textoImpresion;
        }

        this.update = function(valor){
            this.impresion(valor);
        }

        this.happy = function(number) {
            var m, digit ;
            var cycle = [] ;
         
            while(number != 1 && cycle[number] !== true) {
                cycle[number] = true ;
                m = 0 ;
                while (number > 0) {
                    digit = number % 10 ;
                    m += digit * digit ;
                    number = (number  - digit) / 10 ;
                }
                number = m ;
            }
            return (number == 1) ;
        };

        this.capicua = function(number){
           let palabra=number.toString();
            for (var i=0;i<palabra.length;i++){
                if(palabra[i]!=palabra[palabra.length-i-1]){
                    return false;
                }
            }
            return true;
        }
    }    
}

export { Label };