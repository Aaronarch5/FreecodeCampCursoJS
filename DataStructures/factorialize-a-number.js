function factorialize(num) {
  if (num>0)
  {
      var multiplo=1;
    for (let i=1;i<=num;i++)
    {
     multiplo = i*multiplo; 
    }
    return multiplo;
  }
  else if(num==0)
  {
    return 1;
  }
  
}

factorialize(5);