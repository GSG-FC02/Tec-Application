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