/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector(".convert-btn")
convertBtn.addEventListener("click", function(){
    let input = document.getElementById("inp").value
    let volume = document.getElementById("volume")
    let length = document.getElementById("length")
    let mass = document.getElementById("mass")
    length.innerHTML =""
    length.innerHTML+=`<h3>Length(Meter/Feet)</h3> <p>${input} meters = ${(Number(input)*3.281).toFixed(3)} feet | ${input} feet = ${(Number(input)/3.281).toFixed(3)} meters</p>`
    volume.innerHTML =""
    volume.innerHTML+=`<h3>Volume(Litre/Gallons)</h3><p>${input} liters = ${(Number(input)*0.264).toFixed(3)} gallons | ${input} gallons = ${(Number(input)/0.264).toFixed(3)} liters</p>`
    mass.innerHTML =""
    mass.innerHTML+=`<h3>Mass(Kilograms/Pounds)</h3><p>${input} kilos = ${(Number(input)*2.204).toFixed(3)} pounds | ${input} pounds = ${(Number(input)/2.204).toFixed(3)} kilos</p>`
})