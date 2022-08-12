function bouncer(arr) {

  var arreglo=[];
  for (let i=0;i<arr.length;i++)
  {
    if (Boolean(arr[i])==true)
    {
      arreglo.push(arr[i]);
      
    }
  }
  return arreglo;
}

bouncer([7, "ate", "", false, 9]);