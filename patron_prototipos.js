//Patron prototipo

// Agregamos el metodo log al prototipo
Object.prototype.log = function() {
  console.log(this);
}

const x = {a: 1} // Objeto x crea una instancia de Object

x.log() // imprime { a: 1 }

// Creamos metodos para String

if(!String.prototype.trim) {
  String.prototype.trim = function () {
    try{
      return this.replsce(/^\s+|\s+$/g, "")
    }
    catch (e) {
      return this
    }
  }
}

const y = "   hola  ".trim()

// herencia de log() de Object
y.log() // imprime [String: 'hola']