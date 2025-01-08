var Mark_mass = 78
var Mark_height = 1.69
var John_mass = 92
var John_height = 1.95

function BMI(mass, height) {
    return mass / (height * height)
}
console.log("Mark's BMI", BMI(Mark_mass, Mark_height))
console.log("John's BMI", BMI(John_mass, John_height))
if(BMI(Mark_mass, Mark_height) > BMI(John_mass, John_height)) {
    console.log(`Mark's BMI (${BMI(Mark_mass, Mark_height)}) is higher than John's (${BMI(John_mass, John_height)})!`)
} else {
    console.log(`John's BMI (${BMI(John_mass, John_height)}) is higher than Mark's (${BMI(Mark_mass, Mark_height)})!`)
}



