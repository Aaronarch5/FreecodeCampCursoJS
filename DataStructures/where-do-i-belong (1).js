function getIndexToIns(arr, num) {
 
 arr.sort(function(a, b){return a - b});
  for (let i=0;i<arr.length;i++)
  {
    if(arr[i]>=num)
    {
        return i;
    }


  }
  
  return arr.length;
  
}

getIndexToIns([10, 20, 30, 40, 50], 35);