let HeightInches   =66
let HeightCM=  (HeightInches*2.54)
let HeightMeters= (HeightCM/100)
let HeightSqMeters=Math.pow(HeightMeters,2)

let weightPounds= 170
let weightKilo = (weightPounds/2.2046)

console.log(` Height in centimeters is ${HeightCM} and Weight in Kilo's is ${ weightKilo}`)

let BMI= (weightKilo/HeightSqMeters)
console.log(`Your BMI is ${BMI.toFixed(2)}`)