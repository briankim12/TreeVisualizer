const inputTree = document.getElementById("inputTree");
const error = document.getElementById("error");
const form = document.getElementById("form");
const output = document.getElementById("output")
// output.innerHTML = "Output Inner HTML";


form.addEventListener("reset", (e) => {
    // bring back default form-control
    const formControl = inputTree.parentElement;
    formControl.className = 'form-control';
});

form.addEventListener("submit", (e) => {
    e.preventDefault()


    validateInput();

    // console.log(inputTree.value)
    // const inputTreeJSON = JSON.parse(inputTree.value)

    // console.log(inputTreeJSON)

    // error.innerText = "{typeof(inputTreeArray.value)}";

});

function validateInput() {
    const inputTreeString = inputTree.value.trim(); //trim() deletes whitespace

    if (inputTreeString == '') {
        setErrorFor(inputTree, "Input cannot be blank")
    }

    else {
        setSuccessFor(inputTree)
    }
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error messagee inside small
    small.innerText = message;
    // add error class
    formControl.className = 'form-control error';
}



// Shows up On Inspect Element Developer
console.log("Hello From popup.js")