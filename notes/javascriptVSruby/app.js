name = 'juan'
uppercase_name = name.toUpperCase
uppercase_name = name.toUpperCase()

// Funciones son ciudadanos de primer nivel

function sum(n1, n2) {
  return n1 + n2
}

function sayhi(name) {
  return name + 'como estas'
}

function hi2(name, name2) {
  return name + ' y ' + name2 + ' estan matando perritos'
}

function makerHello(callback, name1, name2) {
  namePhrase = callback(name1, name2)
  return "Maker" + namePhrase
}

makerHello(hi2, 'Nicolas', 'Miguel')


//  Objetos Literales


// Funciones Constructoras

function Dog(name, age, color) {

  this.name = name
  this.age = age
  this.color = color

  this.bark = function() {
    console.log(`Guuuauuu ${this.name}`)
  }
}


var ozu = new Dog('ozu', 5, 'black')
var rex = new Dog('rex', 6, 'Yellow')

var ozu = {
  name: 'Ozu',
  bark: function() {
    console.log("Wau")
  }
}

var rex = {
  name: 'Rex',
  bark: function() {
    console.log("Wau")
  }
}


ozu.name
ozu.name = 'pepe'
ozu.age = 8
ozu.bark = function() {
  console.log("Wau")
}

ozu.bark()

var ozu = new Dog('ozu', 5, 'black')
var moshito = Dog('moshi', 7, 'white')

// This
1. Default: this es el contexto global window
2. new: this es un {}
3. Sobre un objeto: this es el objeto
4. call, apply, bind
