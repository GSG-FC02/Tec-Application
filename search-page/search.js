/* function for elements selectors */

let selector = (select) => {
    return document.querySelector(select)
}

// Exmple : selector("#input-search") <=> document.getElementById("input-search");

/************************************************************************************************ */

// function working to fetch audio of the entered word from API

selector("#searchIcon").addEventListener("click", enteredWord )

function enteredWord() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${selector("#input-search").value}` , {
    method: 'GET',
})
    .then(response => { return response.json() })
    .then(data => {
        selector("#element-Audio").setAttribute("src" , data[0].phonetics[0].audio);
    })
    .catch(error => { console.log('Something went wrong', error);
    });
}

/************************************************************************************************ */

// function working to fetch the image of based on the entered word from API

selector("#searchIcon").addEventListener("click", fetchPhoto )

function fetchPhoto() {
    fetch(`https://api.unsplash.com/search/photos?query=${selector("#input-search").value}&client_id=vc40VGPe_rbHs0hMlQ4Z9UzWhPWW94MF_mmqLH7219E` , {
    method: 'GET',
})
    .then(response => { return response.json() })
    .then(data => {
        selector("#Photo-fetched").setAttribute("src" , data.results[0].urls.small);
    })
    .catch(error => { console.log('Something went wrong', error);
    });
}

/************************************************************************************************ */

// function working a repeat of pronunciation the word

selector("#action-loop").addEventListener("click", loopAudio )

function loopAudio() {
    selector("#element-Audio").play();
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
// function to allow only English letter

selector("#input-search").addEventListener("keypress", function (event) {
    
    if ((event.keyCode > 64 && event.keyCode < 91 ) || (event.keyCode > 96 && event.keyCode < 123 ) 
        || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 32) {
        return true;    
    } else {
        event.preventDefault();
        return false;
    }
});

/************************************************************************************************ */

// function to display word add in search input

selector("#searchIcon").addEventListener("click", displayWord )

function displayWord (){

// Create The Main Div Element
let mainDiv = document.createElement("div");

// Add Class For Main Div Element
mainDiv.classList.add("newWord");

// Create World Text 
let text = document.createTextNode(`Your Word is : ${selector("#input-search").value}`);

// Append The Text To Main Child
mainDiv.appendChild(text);

// Append The Main Div To Container 
selector(".sample-image").appendChild(mainDiv);

// Set mainDiv before Image
selector(".sample-image").insertBefore(mainDiv,selector(".sample-image").childNodes[0])

// Clear Input Search
selector("#input-search").value = "";
} 