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
const removeAllButton = document.querySelector('.remove-all')

// Getting and unstringify data from local storage
let oldData = JSON.parse(localStorage.getItem("data"));

/* slapping data from local storage when onloud */
window.onload = function () {
    /* If there is data in local storage, slap it to browser */ 
    if (oldData != null) {
        for (let i=0; i< oldData.length; i++) { // loop on the array of objects in local storage
            /* create the button */
            const wordButton = creatElement('button') 
            wordButton.textContent = oldData[i].name;
            appendElement(wordDiv, wordButton )
            /* create remove icon */
            let removeIcon = creatElement('img')
            removeIcon.setAttribute('src', '../images/removeicon .png')
            removeIcon.classList.add('remove-icon')
            appendElement(wordButton, removeIcon)
            /* append audio into the button */
            let audio = creatElement('audio')
            audio.setAttribute('src', oldData[i].audioSet)
            appendElement(wordButton, audio)
            /* Play the audio on clicking on  */ 
            wordButton.addEventListener('click', ()=>{
                audio.play()
            })

            /* Delete selected items when they clicked */ 
            removeIcon.addEventListener("click" , deleteSelectedItem)

        }
      }
   
   
  };

/* Remove selected data from history page and local storage*/
  let deleteSelectedItem = (element) => {
    element.target.parentElement.remove();
    for( let i = 0; i < oldData.length ; i++){
      if(oldData[i].name === element.target.parentElement.textContent){
        oldData.splice( i , 1 );
        localStorage.setItem("data", JSON.stringify(oldData));
      }
    }
  }



/* Remove all items from history page and local storage*/
  removeAllButton.addEventListener("click" , deleteAllItems)

  
  function deleteAllItems () {
     selector('.words-container').innerHTML = ''; 
     oldData = [];
     localStorage.setItem("data", JSON.stringify(oldData));
  }

  



