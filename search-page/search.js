/* function for elements selectors */

let selector = (select) => {
    return document.querySelector(select)
}
// Exmple : selector("#input-search") <=> document.getElementById("input-search");

let nullImage = 'https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png';
//let sampleImage = 'http://127.0.0.1:5500/images/sample.png';   // local link
let sampleImage = 'https://gsg-fc02.github.io/Tec-Application/images/sample.png'; // live link of sample image

/************************************************************************************************ */
selector("#searchIcon").addEventListener("click", () => {
    let regex = /^[a-zA-Z]*$/;
    if (selector("#input-search").value !== "") {

        if(selector("#input-search").value.match(regex)) {
            fetchPhoto();                               // invoke of function to fetch the image
        } else {
            alert('Please enter your word in English only !');
            selector("#input-search").value = ""; 
        }
        
    } else { 
        alert('Please enter a valid word');
    }
});

/************************************************************************************************ */

// function to display word add in search input

function displayWord (){
    selector("#newWord").textContent = selector("#input-search").value;
    selector("#input-search").value = "";
} 

// function to hide the previous valid word when an invalid word is entered

function hideWord (){
    selector("#newWord").textContent = null;
    selector("#input-search").value = "";
} 
/************************************************************************************************ */

// function working to fetch audio of the entered word from API

function enteredWord() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${selector("#input-search").value}` , {
    method: 'GET',
})
    .then(response => { return response.json() })
    .then(data => {
        selector("#element-Audio").setAttribute("src" , data[0].phonetics[0].audio);
        displayWord(); 
        storeData();  // invoke of function to local storage
    })
    .catch(error => { console.log('Something went wrong', error);
    });
}

/************************************************************************************************ */

// function working to fetch the image of based on the entered word from API

function fetchPhoto() {
    fetch(`https://api.unsplash.com/search/photos?query=${selector("#input-search").value}&client_id=vc40VGPe_rbHs0hMlQ4Z9UzWhPWW94MF_mmqLH7219E` , {
    method: 'GET',
})
    .then(response => { return response.json() })
    .then(data => {
        if(data.results.length !== 0 ){
            selector("#Photo-fetched").setAttribute("src" , data.results[0].urls.small);
            enteredWord();                               // invoke of function to fetch audio 
        } else {
            selector("#Photo-fetched").setAttribute("src" , nullImage);
            hideWord();  //hide the previous valid word when an invalid word is entered
        }
    })
    .catch(error => { console.log('Something went wrong', error);
    });
}

/************************************************************************************************ */

// function working a repeat of pronunciation the word

selector("#action-loop").addEventListener("click", loopAudio )

function loopAudio() {
    console.log( selector("#Photo-fetched").src);
    if (selector("#Photo-fetched").src !== nullImage && selector("#Photo-fetched").src !== sampleImage ){
        selector("#element-Audio").play();
    } else {
        alert ("No Voice !");
    }
}

/************************************************************************************************ */

// Trigger a Button Click on Enter

selector("#input-search").addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        selector("#searchIcon").click();
    }
});

/************************************************************************************************ */

/********************** Start Local Storage part **************************/ 

let dataArray = [];         // Array to push new data
function storeData() {

    /* save word and audio in an object */
    const dataObject = {
    name: selector("#newWord").textContent,
    audioSet: selector("#element-Audio").getAttribute("src")
}

/* If there is data saved already in local storage, add the new data to old data*/
        let oldData = JSON.parse(localStorage.getItem("data"));
        if((oldData !== null)){
            /* Prevent repeatred words to store in history page*/ 
            for( let i = 0; i < oldData.length; i++){
                if (oldData[i].name === dataObject.name) {
                    return;
                } 
            } 
            oldData.push(dataObject);
            localStorage.setItem("data", JSON.stringify(oldData))
           
        } else{     /* If local storage is empty, Push new data to the empty array */
            dataArray.push(dataObject)  //Push object of data to the array

            /* set stringified data in local storage */
            localStorage.setItem('data', JSON.stringify(dataArray))
        }
}
/********************** End Local Storage part **************************/
