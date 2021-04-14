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

let dataArray = []; // an empty array to store data in it

function displayWord (){

    let wordDiv = document.getElementById("newWord");

    wordDiv.textContent = selector("#input-search").value;

// Clear Input Search
selector("#input-search").value = "";
} 

/********************** Start Local Storage part **************************/ 
function storeData() {
    let input = selector("#input-search");


/* save word and audio in an object */
    const dataObject = {
    name: wordDiv.textContent,
    audioSet: selector("#element-Audio").getAttribute("src")
    }

/* If there is data saved already in local storage, add the new data to old data*/
    if (input.value !== "") {
        let oldData = JSON.parse(localStorage.getItem("data"));
        if(oldData !== null){
            oldData.push(dataObject);
            localStorage.setItem("data", JSON.stringify(oldData))
        } else{ /* If local storage is empty, Push new data to the empty array */
                dataArray.push(dataObject) //Push object of data to the array

     /* set stringified data in local storage */
                localStorage.setItem('data', JSON.stringify(dataArray))

            }
        }else{ /* If there is no  */
            alert('Please enter your word');
        }
}
    /********************** End Local Storage part **************************/