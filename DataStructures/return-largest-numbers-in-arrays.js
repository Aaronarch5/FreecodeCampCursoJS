function largestOfFour(arr) {
  let arregloMayoresDeCuatro=[];
  for(let i=0;i<arr.length;i++)
  {
    let mayorDeCuatro=Math.max(...arr[i]);
    arregloMayoresDeCuatro.push(mayorDeCuatro);
  }

  return arregloMayoresDeCuatro;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);