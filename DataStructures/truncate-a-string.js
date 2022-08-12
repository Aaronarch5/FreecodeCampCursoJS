function truncateString(str, num) 
  {
    let stringToTruncate = str; 
    let arrToTruncate=stringToTruncate.split("");
    let arrTruncated=[];
    let dotsArr=[".",".","."]
    for(let i=0;i<num;i++)
    {
      arrTruncated.push(arrToTruncate[i]);
    }
    if (str.length!=num && num<str.length)
    {
      for (let j=0;j<3;j++)
      {
        arrTruncated.push(dotsArr[j]);
      }
    }
    let stringTruncated = arrTruncated.join("");
    console.log(stringTruncated);
    return stringTruncated;
  }

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);