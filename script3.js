"use strict";
let dove = localStorage.getItem("dove");
let extra = localStorage.getItem("extra");
let palmolive = localStorage.getItem("palmolive");
let pears = localStorage.getItem("pears");
let ponds = localStorage.getItem("ponds");
let lux = localStorage.getItem("lux");
let safeguard = localStorage.getItem("safeguard");
let lifebuoy = localStorage.getItem("lifebuoy");
let capri = localStorage.getItem("capri");
let dettol = localStorage.getItem("dettol");

document.querySelector(".dovesum").textContent = dove;
document.querySelector(".extrasum").textContent = extra;
document.querySelector(".palmolivesum").textContent = palmolive;
document.querySelector(".pearssum").textContent = pears;
document.querySelector(".pondssum").textContent = ponds;
document.querySelector(".luxsum").textContent = lux;
document.querySelector(".safeguardsum").textContent = safeguard;
document.querySelector(".lifebuoysum").textContent = lifebuoy;
document.querySelector(".caprisum").textContent = capri;
document.querySelector(".dettolsum").textContent = dettol;

//for total

let total =
  parseInt(dove, 10) +
  parseInt(extra, 10) +
  parseInt(palmolive, 10) +
  parseInt(pears, 10) +
  parseInt(ponds, 10) +
  parseInt(lux, 10) +
  parseInt(safeguard, 10) +
  parseInt(lifebuoy, 10) +
  parseInt(capri, 10) +
  parseInt(dettol, 10);

document.querySelector(".total").textContent = total;
