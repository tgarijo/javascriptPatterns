
// Nueva forma
class MiClase{
  constructor(p1, p2) {
    this.propiedad_1= p1
    this.propiedad_2= p2
    this.metodo = () => {
      // Soy un metodo

    }
  }
}

// Forma antigua
function OtraClase () {
  this.prop = 1
  this.met = () => {

  }
}

const instancia = new MiClase(8,5)
console.log(instancia)

const otraInstancia = new  OtraClase()
console.log(otraInstancia)

// Ptron contructor con prototipos
// Nueva forma
class conPrototipo{
  constructor(p1, p2) {
    this.propiedad_1= p1
    this.propiedad_2= p2
    
  }

  metodo = () => {
    // Soy un metodo de prototipo

  }

}

const con_prototipo = new conPrototipo(8,5)
console.log( con_prototipo)