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
    if (oldData != null) {
        for (let i=0; i< oldData.length; i++) {
            const wordButton = creatElement('button')
            wordButton.textcontent = oldData[i].name;
            appendElement(wordDiv, wordButton )
            let removeIcon = creatElement('img')
            removeIcon.setAttribute('src', '../images/removeicon .png')
            removeIcon.classlist.add('remove-icon')
            appendElement(wordButton, removeIcon)
            let audio = creatElement('audio')
            audio.setAttribute('src', oldData[i].audioSet)
  
        }
      }
   
   
  };
