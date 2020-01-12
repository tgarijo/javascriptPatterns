// Patron modulo revelador compueto por ifin
const resultado = (() =>{
  const x={}

  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  }
})()

resultado.a()
resultado.b('a', '5')
resultado.a()
console.log(resultado.x) // No se puede acceder



// Caso practico
