'use strict'
function calculateAge (year){
    let currentYear = 2023;
    let age = currentYear - year
    alert (age)
}

let yearOfBith = Number(prompt("Ingresar Año de Nacimiento"))
calculateAge(yearOfBith);