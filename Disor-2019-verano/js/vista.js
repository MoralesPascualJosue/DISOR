import { NumeroFibonacci } from './numbers_modules/numero_fibonacci.js';
import { NumerodelaSuerte } from './numbers_modules/numero_dela_suerte.js';
import { NumeroPadovan } from './numbers_modules/numero_Padovan.js';
import { NumeroUlam } from './numbers_modules/numero_Ulam.js';

import { Label } from './interface_modules/label.js';
import { Boton } from './interface_modules/boton.js';
import { Panel } from './interface_modules/panel.js';

    var panelFibonacci = new Panel("panelFibonacci","center","gray");
    var panelSuerte = new Panel("panelSuerte","center","gray");
    var panelPadovan = new Panel("panelPadovan","center","gray");
    var panelUlam = new Panel("panelUlam","center","gray");
    var panelBotonAnterior = new Panel("panelBotonAnterior","left","green");

    var numeroFibonacci = new NumeroFibonacci();          
    var numerodelaSuerte = new NumerodelaSuerte(100);   
    var numeroPadovan = new NumeroPadovan();   
    var numeroUlam = new NumeroUlam();   

    var botonAnterior = new Boton("Boton Anteriror","bontonAnterior");

    var botonSiguienteFibonacci = new Boton("Boton Siguiente","botonSiguiente");  
    var botonSiguienteSuerte = new Boton("Boton Siguiente","botonSiguiente");  
    var botonSiguientePadovan = new Boton("Boton Siguiente","botonSiguiente");  
    var botonSiguienteUlam = new Boton("Boton Siguiente","botonSiguiente");  

    var representacionDecimalFibonacci = new Label("Numero Fibonacci Decimal","representacionDecimalFibonacci");
    var impresionDecimalFibonacci = new Label("","impresionDecimalFibonacci",10);
    var representacionBinariaFibonacci = new Label("Numero Fibonacci Binario","representacionBinariaFibonacci");
    var impresionBinarioFibonacci = new Label("","impresionBinarioFibonacci",2);
    var representacionHexadecimalFibonacci = new Label("Numero Fibonacci Hexadecimal","representacionHexadeciamlFibonacci");
    var impresionHexadecimalFibonacci = new Label("","impresionHexadecimalFibonacci",16);  
    
    var representacionDecimalSuerte = new Label("Numero de la Suerte Decimal","representacionDecimalSuerte");
    var impresionDecimalSuerte = new Label("","impresionDecimalSuerte",10);
    var representacionBinariaSuerte = new Label("Numero de la Suerte Binario","representacionBinariaSuerte");
    var impresionBinarioSuerte = new Label("","impresionBinarioSuerte",2);
    var representacionHexadecimalSuerte = new Label("Numero de la Suerte Hexadecimal","representacionHexadeciamlSuerte");
    var impresionHexadecimalSuerte = new Label("","impresionHexadecimalSuerte",16); 

    var representacionDecimalPadovan = new Label("Numero Padovan Decimal","representacionDecimalPadovan");
    var impresionDecimalPadovan = new Label("","impresionDecimalPadovan",10);
    var representacionBinariaPadovan = new Label("Numero Padovan Binario","representacionBinariaPadovan");
    var impresionBinarioPadovan = new Label("","impresionBinarioPadovan",2);
    var representacionHexadecimalPadovan = new Label("Numero Padovan Hexadecimal","representacionHexadeciamlPadovan");
    var impresionHexadecimalPadovan = new Label("","impresionHexadecimalPadovan",16); 

    var representacionDecimalUlam = new Label("Numero Ulam Decimal","representacionDecimalUlam");
    var impresionDecimalUlam = new Label("","impresionDecimalUlam",10);
    var representacionBinariaUlam = new Label("Numero Ulam Binario","representacionBinariaUlam");
    var impresionBinarioUlam = new Label("","impresionBinarioUlam",2);
    var representacionHexadecimalUlam = new Label("Numero Ulam Hexadecimal","representacionHexadeciamlUlam");
    var impresionHexadecimalUlam = new Label("","impresionHexadecimalUlam",16); 

    panelFibonacci.impresion(botonSiguienteFibonacci);
    panelFibonacci.impresion(representacionDecimalFibonacci);
    panelFibonacci.impresion(impresionDecimalFibonacci);
    panelFibonacci.impresion(representacionBinariaFibonacci);
    panelFibonacci.impresion(impresionBinarioFibonacci);
    panelFibonacci.impresion(representacionHexadecimalFibonacci);
    panelFibonacci.impresion(impresionHexadecimalFibonacci);    

    panelSuerte.impresion(botonSiguienteSuerte);
    panelSuerte.impresion(representacionDecimalSuerte);
    panelSuerte.impresion(impresionDecimalSuerte);
    panelSuerte.impresion(representacionBinariaSuerte);
    panelSuerte.impresion(impresionBinarioSuerte);
    panelSuerte.impresion(representacionHexadecimalSuerte);
    panelSuerte.impresion(impresionHexadecimalSuerte);    

    panelPadovan.impresion(botonSiguientePadovan);
    panelPadovan.impresion(representacionDecimalPadovan);
    panelPadovan.impresion(impresionDecimalPadovan);
    panelPadovan.impresion(representacionBinariaPadovan);
    panelPadovan.impresion(impresionBinarioPadovan);
    panelPadovan.impresion(representacionHexadecimalPadovan);
    panelPadovan.impresion(impresionHexadecimalPadovan);    

    panelUlam.impresion(botonSiguienteUlam);
    panelUlam.impresion(representacionDecimalUlam);
    panelUlam.impresion(impresionDecimalUlam);
    panelUlam.impresion(representacionBinariaUlam);
    panelUlam.impresion(impresionBinarioUlam);
    panelUlam.impresion(representacionHexadecimalUlam);
    panelUlam.impresion(impresionHexadecimalUlam);    
    
    panelBotonAnterior.impresion(botonAnterior);

    botonSiguienteFibonacci.evento().onclick = function(){
      numeroFibonacci.avanzar();
    }

    botonSiguienteSuerte.evento().onclick = function(){
      numerodelaSuerte.avanzar();
    }

    botonSiguientePadovan.evento().onclick = function(){
      numeroPadovan.avanzar();
    }

    botonSiguienteUlam.evento().onclick = function(){
      numeroUlam.avanzar();
    }

    botonAnterior.evento().onclick = function(){
      numeroFibonacci.retroceder();
      numerodelaSuerte.retroceder();
      numeroPadovan.retroceder();
      numeroUlam.retroceder();
    }
    
    numeroFibonacci.observadores().suscribir(impresionDecimalFibonacci);
    numeroFibonacci.observadores().suscribir(impresionBinarioFibonacci);
    numeroFibonacci.observadores().suscribir(impresionHexadecimalFibonacci);

    numerodelaSuerte.observadores().suscribir(impresionDecimalSuerte);
    numerodelaSuerte.observadores().suscribir(impresionBinarioSuerte);
    numerodelaSuerte.observadores().suscribir(impresionHexadecimalSuerte);

    numeroPadovan.observadores().suscribir(impresionDecimalPadovan);
    numeroPadovan.observadores().suscribir(impresionBinarioPadovan);
    numeroPadovan.observadores().suscribir(impresionHexadecimalPadovan);
    
    numeroUlam.observadores().suscribir(impresionDecimalUlam);
    numeroUlam.observadores().suscribir(impresionBinarioUlam);
    numeroUlam.observadores().suscribir(impresionHexadecimalUlam);

    panelFibonacci.mostrar(document.body);
    panelSuerte.mostrar(document.body);
    panelPadovan.mostrar(document.body);
    panelUlam.mostrar(document.body);
    panelBotonAnterior.mostrar(document.body);

