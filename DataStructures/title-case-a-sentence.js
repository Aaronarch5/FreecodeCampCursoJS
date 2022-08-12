function titleCase(str) {

  var cadenaPalabras=str.split(" ");
  var cadenaLetras;
  var transformacionLetras;
  var cadenaUnidaPalabras=[];
  let sentenciaUnida;
  for (let i=0; i<cadenaPalabras.length;i++)
  {
     
     cadenaLetras=cadenaPalabras[i].split("");
     //console.log(cadenaLetras);
     
     for(let j=0;j<cadenaLetras.length;j++)
     {
       if(j==0)
       {
         cadenaLetras[0]=cadenaLetras[0].toUpperCase();

       }
       else 
       {
         cadenaLetras[j]=cadenaLetras[j].toLowerCase();      
       }
       
       cadenaUnidaPalabras.push(cadenaLetras[j]);
       
     }
    
    cadenaUnidaPalabras.push(" ");

  }
  cadenaUnidaPalabras.pop();
  sentenciaUnida=cadenaUnidaPalabras.join('');
  
   
  
  return sentenciaUnida;
}

titleCase("sHoRt AnD sToUt");
console.log(titleCase("sHoRt AnD sToUt"));