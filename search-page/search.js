/* elements selectors */ 

const input = document.getElementById("inputSearch");
const searchAction = document.getElementById("searchIcon");
const wordAudio = document.getElementById("eleAudio");
const actionLoop = document.getElementById("action-loop");
const selectPhoto = document.getElementById("Photo-fetched");

/************************************************************************************************ */

// function working to fetch audio of the entered word from API

searchAction.addEventListener("click", enteredWord )

function enteredWord() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${input.value}` , {
    method: 'GET',
})
    .then(response => { return response.json() })
    .then(data => {
        console.log (data[0].phonetics[0].audio)
        wordAudio.setAttribute("src" , data[0].phonetics[0].audio);
    })
    .catch(error => { console.log('Something went wrong', error);
    });
}

/************************************************************************************************ */

// function working to fetch the image of based on the entered word from API

searchAction.addEventListener("click", fetchPhoto )

function fetchPhoto() {
    fetch(`https://api.unsplash.com/search/photos?query=${input.value}&client_id=vc40VGPe_rbHs0hMlQ4Z9UzWhPWW94MF_mmqLH7219E` , {
    method: 'GET',
})
    .then(response => { return response.json() })
    .then(data => {
        console.log(data.results[0].urls.small)
        selectPhoto.setAttribute("src" , data.results[0].urls.small);
    })
    .catch(error => { console.log('Something went wrong', error);
    });
}

/************************************************************************************************ */

// function working a repeat of pronunciation the word

actionLoop.addEventListener("click", loopAudio )

function loopAudio() {
    wordAudio.play();
}

/************************************************************************************************ */