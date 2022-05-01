"use strict"

var form = document.getElementsByTagName("form")
var vardas = document.getElementsByTagName("input")[0]
var pavarde = document.getElementsByTagName("input")[1]
var amzius = document.getElementsByTagName("input")[2]
var prideti = document.getElementsByTagName("button")[0]
var istrintiPirma = document.getElementsByTagName("button")[1]
var istrintiPaskutini = document.getElementsByTagName("button")[2]
   


prideti.addEventListener("click", function(){ 
    if(vardas.value == 0 || pavarde.value == 0 || amzius.value <= 0){
        alert ("Įveskite duomenis")
        vardas.value = ""
        pavarde.value = ""
        amzius.value = ""
        cell1.innerHTML = ""
    }
    
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = vardas.value;
    cell2.innerHTML = pavarde.value;
    cell3.innerHTML = amzius.value;
    row.style.background = "rgb(0, 0, 148)";
    row.style.color = "rgb(255, 255, 255)";
    row.style.textAlign = "center";
    cell1.style.padding = "0.5em";
    cell1.style.border = "2px solid rgb(255, 215, 0)";
    cell2.style.border = "2px solid rgb(255, 215, 0)";
    cell3.style.border = "2px solid rgb(255, 215, 0)";
    vardas.value = ""
    pavarde.value = ""
    amzius.value = ""
})

istrintiPirma.addEventListener("click", function(){
    var table = document.getElementById("table");
    table.deleteRow(1)
})

istrintiPaskutini.addEventListener("click", function(){
    var table = document.getElementById("table");     
    table.deleteRow(-1)   
    
})

 