import { NumeroFibonacci } from '../numbers_modules/numero_fibonacci.js';

QUnit.test( "Construir Numero", function( assert ) {
  let numero = new NumeroFibonacci();
  let valorEsperado = 0;
  let valorObtenido = numero.getValor();  
  assert.equal( valorEsperado, valorObtenido, "Zero, Zero; equal succeeds" ); 
});

QUnit.test( "Avanzar una vez", function( assert ) {
  let numero = new NumeroFibonacci();
  numero.avanzar();
  let valorEsperado = 1;
  let valorObtenido = numero.getValor();  
  assert.equal( valorEsperado, valorObtenido, "uno, uno; equal succeeds" ); 
});

QUnit.test( "Avanzar dos veces", function( assert ) {
  let numero = new NumeroFibonacci();
  numero.avanzar();
  numero.avanzar();
  let valorEsperado = 1;
  let valorObtenido = numero.getValor();  
  assert.equal( valorEsperado, valorObtenido, "uno, uno; equal succeeds" ); 
});

QUnit.test( "Avanzar cinco veces", function( assert ) {
  let numero = new NumeroFibonacci();
  numero.avanzar();
  numero.avanzar();
  numero.avanzar();
  numero.avanzar();
  numero.avanzar();
  
  let valorEsperado = 5;
  let valorObtenido = numero.getValor();  
  assert.equal( valorEsperado, valorObtenido, "cinco, cinco; equal succeeds" ); 
});

QUnit.test( "Avanzar cinco veces, retroceder una vez", function( assert ) {
  let numero = new NumeroFibonacci();
  numero.avanzar();
  numero.avanzar();
  numero.avanzar();
  numero.avanzar();
  numero.avanzar();
  numero.retroceder();
  
  let valorEsperado = 3;
  let valorObtenido = numero.getValor();  
  assert.equal( valorEsperado, valorObtenido, "tres, tres; equal succeeds" ); 
});

QUnit.test( "Avanzar una vez, retroceder una vez", function( assert ) {
  let numero = new NumeroFibonacci();
  numero.avanzar();
  numero.retroceder();
  let valorEsperado = 0;  
  let valorObtenido = numero.getValor();  
  assert.equal( valorEsperado, valorObtenido, "cero, cero; equal succeeds" ); 
});

QUnit.test( "Construir Numero, retroceder una vez", function( assert ) {
  let numero = new NumeroFibonacci();
  numero.retroceder();
  let valorEsperado = 0;
  let valorObtenido = numero.getValor();  
  assert.equal( valorEsperado, valorObtenido, "Zero, Zero; equal succeeds" ); 
});

QUnit.test( "Representacion binaria", function( assert ) {
  let numero = new NumeroFibonacci();
  numero.avanzar();
  numero.avanzar();
  numero.avanzar();
  numero.avanzar();
  let valorEsperado = "11";
  let valorObtenido = numero.representacionBinariaTest();  
  assert.equal( valorEsperado, valorObtenido, "101", "101; equal succeeds" ); 
});