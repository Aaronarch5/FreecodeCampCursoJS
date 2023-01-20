function Dog(name) {
  this.name = name;
}



// Only change code above this line
Dog.prototype.numLegs=2;
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs);