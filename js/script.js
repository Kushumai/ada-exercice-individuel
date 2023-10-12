let userName = window.prompt("Un nom, tu écriras", "Jeune padawan");
let helloStr = `${userName}, 👋 Bonjour je te souhaite !`;
document.body.innerHTML += "<h2>"+ helloStr + "</h2>";

let userYearStr = window.prompt("Ton année de naissance, donner tu dois", "En 896 né.e, je suis");
const numStringSelect = /\d+/;
let userYear = userYearStr.match(numStringSelect);
// let currentYear = Date().getFullYear();
let userOld =  2023 - userYear;
console.log(userOld);


let userOldStr = `${userOld} ans, tu as`
document.body.innerHtml += "<h3>" + userOldStr + "<h3>"


