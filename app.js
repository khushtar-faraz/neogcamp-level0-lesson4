let inputText = document.getElementById("user-input");
let btnTranslate = document.getElementById("translate-button");
let outputText = document.getElementById("output-text");
btnTranslate.addEventListener("click", clickHandler);
let url = "https://api.funtranslations.com/translate/minion.json";

function clickHandler() {
    let input = inputText.value;
    let finalURL = constructURL(input);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            outputText.innerText = json.contents.translated;
        }).catch((err) => {
            alert(err, "Oops error occured!");
        });
}

function constructURL(input) {
    let encodedURI = encodeURI(input);
    return `${url}?text=${encodedURI}`;
}