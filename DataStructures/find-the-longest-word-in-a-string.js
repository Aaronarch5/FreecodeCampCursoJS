function findLongestWordLength(str) {
  let arregloFrase = str.split(" ");
  let arregloSizes=[];
  for (let i=0;i<arregloFrase.length;i++)
  {
    let arregloPalabra = arregloFrase[i].split("");
    arregloSizes.push(arregloPalabra.length);
    
  }
  
  var largest= 0;

  let mayor = Math.max(...arregloSizes);
  console.log(mayor);
  return mayor;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");