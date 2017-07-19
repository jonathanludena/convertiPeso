export default function convertipeso(peso) {
  let libras
  let kilos = peso
  if (isNaN(kilos)) {
    return 0
  }
  return libras = kilos * 2.20462
}
