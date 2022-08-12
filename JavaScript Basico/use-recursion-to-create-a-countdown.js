// Only change code below this line
function countdown(n){
  if (n === 1) return [1];
  if(n<1) return[];
  const output = [n]; // [2]
  return output.concat(countdown(n - 1)); 
}
// Only change code above this line
console.log(countdown(5));