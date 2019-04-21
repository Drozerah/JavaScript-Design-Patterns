// 1-basic-constructors-p.24.js

function Car (model, years, miles){
    this.model = model;
    this.years = years;
    this.miles = miles;
    this.toString = () => {
            return this.model + ' has done ' + miles
    }
}

// usage

const civic = new Car('Honda Civic', 2009, 35000)
const mondeo = new Car('Honda Civic', 2009, 35000)

console.log(civic.toString())
console.log(mondeo.toString())