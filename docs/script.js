var user = prompt("What is your weight?")
var planet = parseInt(prompt("To choose"))
var Tierra = 9.8
var Marte = 3.7
var Jupiter = 24.8
var Weight = parseInt(user)
var result

if (planet == 1) {result = Weight * Marte / Tierra}
else {result = Weight * Jupiter / Tierra}
result = parseInt(result)
document.write("<p class='text-gray-300'>" + result + "</p>")