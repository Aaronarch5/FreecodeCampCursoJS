function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let propiedad in beagle)
{
  if (beagle.hasOwnProperty(propiedad))
  {
    ownProps.push(propiedad)
  }
  else
  {
    prototypeProps.push(propiedad)
  }

}
console.log(ownProps);
console.log(prototypeProps);