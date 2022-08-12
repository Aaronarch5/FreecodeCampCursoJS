function reverseString(str) {
  
 let arregloLetras = str.split("");


let arregloInvertido=[];
for (var i=arregloLetras.length-1;i>=0;i--)
{
  
  arregloInvertido.push(arregloLetras[i]);
 
}

 let invertedString;
 invertedString=arregloInvertido.join("");
 console.log(invertedString);
 return invertedString;
}

reverseString("hello");