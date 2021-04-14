/***************************** History Page ****************************/ 
//Operating functions
let selector = (select) => {
    return document.querySelector(select);
  };
  const creatElement = (ele) => {
    return document.createElement(ele);
  };
  const appendElement = (parent, child) => {
    return parent.appendChild(child);
  };
  // HTML Elements
const wordDiv = selector('.words-container');

// slapping data from local storage when onloud
window.onload = function () {
    let oldData = JSON.parse(localStorage.getItem("data"));
    console.log(oldData)
   
   
  };
