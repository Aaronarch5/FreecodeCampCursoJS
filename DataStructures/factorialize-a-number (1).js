function factorialize(num) {
  if (num>0)
  {
      var factorial=1;
    for (let i=1;i<=num;i++)
    {
     factorial = i*factorial; 
     
    }
    return factorial;
    console.log(factorial);
  }
  else if(num==0)
  {
    return 1;
  }
  
}

factorialize(5);