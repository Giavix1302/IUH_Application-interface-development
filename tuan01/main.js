var Mark_mass = 78
var Mark_height = 1.69
var John_mass = 92
var John_height = 1.95

function BMI(mass, height) {
    return mass / (height * height)
}

console.log("Data 1")
console.log("Mark's BMI", BMI(Mark_mass, Mark_height))
console.log("John's BMI", BMI(John_mass, John_height))

console.log("Data 2")
console.log("Mark's BMI", BMI(95, 1.88))
console.log("John's BMI", BMI(85, 1.76))