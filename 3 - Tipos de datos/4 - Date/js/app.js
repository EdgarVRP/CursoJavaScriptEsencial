"use strict"

var fecha = new Date();
var diaSemana=fecha.getDay();
var diaMes = fecha.getDate();
var hora=fecha.getHours();
fecha.setDate(18);
console.log(fecha)