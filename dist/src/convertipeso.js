"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertipeso;
function convertipeso(peso) {
  var libras = void 0;
  var kilos = peso;
  if (isNaN(kilos)) {
    return 0;
  }
  return libras = kilos * 2.20462;
}