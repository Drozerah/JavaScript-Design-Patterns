// 2-constructors-with-prototypes-p.25.js

function Car (model, years, miles){
    this.model = model;
    this.years = years;
    this.miles = miles;
}

// add toString method using prototype
Car.prototype.toString = function(){
    return this.model + ' has done ' + this.miles
}

// usage

const civic = new Car('Honda Civic', 2009, 35000)
const mondeo = new Car('Honda Civic', 2009, 35000)

console.log(civic.toString())
console.log(mondeo.toString())