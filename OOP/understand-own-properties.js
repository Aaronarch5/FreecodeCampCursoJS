function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for(let propiedades in canary)
{
  if (canary.hasOwnProperty(propiedades))
  {
    ownProps.push(propiedades);
  }
}
console.log(ownProps)