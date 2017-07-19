
const expect = require('chai').expect
const convertipeso = require('..').default

describe('#convertipeso', function (){

  it('Si el valor ingresado no es un peso', function () {
    const resultado = convertipeso("hola")
    expect(resultado).to.equal(0)
  })

  it('Convirtiendo 2 kilos a libras', function () {
    const resultado = convertipeso(2)
    const peso = 2*2.20462
    expect(resultado).to.equal(peso)
  })

})
