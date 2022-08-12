var someObj = 
{
    propName="john"
};

function propPrefix(str)
{
    var s = "prop";
    return s + str;

}

var someProp = propPrefix ("Name");
console.log(someObj[someProp])



