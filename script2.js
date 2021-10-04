"use strict";

let dove = document.querySelector(".dove").textContent;
let extra = document.querySelector(".extra").textContent;
let palmolive = document.querySelector(".palmolive").textContent;
let pears = document.querySelector(".pears").textContent;
let ponds = document.querySelector(".ponds").textContent;
let lux = document.querySelector(".lux").textContent;
let safeguard = document.querySelector(".safeguard").textContent;
let lifebuoy = document.querySelector(".lifebuoy").textContent;
let capri = document.querySelector(".capri").textContent;
let dettol = document.querySelector(".dettol").textContent;
// for dove
document.querySelector(".doveminus").addEventListener("click", function () {
  if (dove > 0) {
    dove--;
    document.querySelector(".dove").textContent = dove;
  }
});
document.querySelector(".doveplus").addEventListener("click", function () {
  dove++;

  document.querySelector(".dove").textContent = dove;
});
// for extra
document.querySelector(".extraminus").addEventListener("click", function () {
  if (extra > 0) {
    extra--;
    document.querySelector(".extra").textContent = extra;
  }
});
document.querySelector(".extraplus").addEventListener("click", function () {
  extra++;

  document.querySelector(".extra").textContent = extra;
});
// for palmolive
document
  .querySelector(".palmoliveminus")
  .addEventListener("click", function () {
    if (palmolive > 0) {
      palmolive--;
      document.querySelector(".palmolive").textContent = palmolive;
    }
  });
document.querySelector(".palmoliveplus").addEventListener("click", function () {
  palmolive++;

  document.querySelector(".palmolive").textContent = palmolive;
});
//for pears
document.querySelector(".pearsminus").addEventListener("click", function () {
  if (pears > 0) {
    pears--;
    document.querySelector(".pears").textContent = pears;
  }
});
document.querySelector(".pearsplus").addEventListener("click", function () {
  pears++;

  document.querySelector(".pears").textContent = pears;
});
//for ponds
document.querySelector(".pondsminus").addEventListener("click", function () {
  if (ponds > 0) {
    ponds--;
    document.querySelector(".ponds").textContent = ponds;
  }
});
document.querySelector(".pondsplus").addEventListener("click", function () {
  ponds++;

  document.querySelector(".ponds").textContent = ponds;
});
//for lux
document.querySelector(".luxminus").addEventListener("click", function () {
  if (lux > 0) {
    lux--;
    document.querySelector(".lux").textContent = lux;
  }
});
document.querySelector(".luxplus").addEventListener("click", function () {
  lux++;

  document.querySelector(".lux").textContent = lux;
});
//for safeguard
document
  .querySelector(".safeguardminus")
  .addEventListener("click", function () {
    if (safeguard > 0) {
      safeguard--;
      document.querySelector(".safeguard").textContent = safeguard;
    }
  });
document.querySelector(".safeguardplus").addEventListener("click", function () {
  safeguard++;

  document.querySelector(".safeguard").textContent = safeguard;
});
// for life buoy
document.querySelector(".lifebuoyminus").addEventListener("click", function () {
  if (lifebuoy > 0) {
    lifebuoy--;
    document.querySelector(".lifebuoy").textContent = lifebuoy;
  }
});
document.querySelector(".lifebuoyplus").addEventListener("click", function () {
  lifebuoy++;

  document.querySelector(".lifebuoy").textContent = lifebuoy;
});
// for capri
document.querySelector(".capriminus").addEventListener("click", function () {
  if (capri > 0) {
    capri--;
    document.querySelector(".capri").textContent = capri;
  }
});
document.querySelector(".capriplus").addEventListener("click", function () {
  capri++;

  document.querySelector(".capri").textContent = capri;
});
// for dettol
document.querySelector(".dettolminus").addEventListener("click", function () {
  if (dettol > 0) {
    dettol--;
    document.querySelector(".dettol").textContent = dettol;
  }
});
document.querySelector(".dettolplus").addEventListener("click", function () {
  dettol++;

  document.querySelector(".dettol").textContent = dettol;
});

// For Summary page

document.querySelector(".proceed").addEventListener("click", function () {
  localStorage.setItem("dove", dove);
  localStorage.setItem("extra", extra);
  localStorage.setItem("palmolive", palmolive);
  localStorage.setItem("pears", pears);
  localStorage.setItem("ponds", ponds);
  localStorage.setItem("lux", lux);
  localStorage.setItem("safeguard", safeguard);
  localStorage.setItem("lifebuoy", lifebuoy);
  localStorage.setItem("capri", capri);
  localStorage.setItem("dettol", dettol);

  window.location.replace("Summary.html");
});
