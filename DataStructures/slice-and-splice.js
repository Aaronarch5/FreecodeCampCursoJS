function frankenSplice(arr1, arr2, n) {
  var arreglo;
  arr1.slice();
  arreglo=[].concat(...arr2);
  arreglo.splice(n,0,arr1);
  arreglo=[].concat(...arreglo);
  console.log(arreglo);

  return arreglo;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);