const inputTree = document.getElementById("inputTree");
const error = document.getElementById("error");
const form = document.getElementById("form");
const output = document.getElementById("output")
// output.innerHTML = "Output Inner HTML";

// Shows up On Inspect Element Developer
console.log("Hello From popup.js")



form.addEventListener("reset", (e) => {
    // bring back default form-control
    const formControl = inputTree.parentElement;
    formControl.className = 'form-control';
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInput();
});

function validateInput() {
    const inputTreeString = inputTree.value.trim(); //trim() deletes whitespace
    // Error Check: Empty Input
    if (inputTreeString == '') {
        setErrorFor(inputTree, "Input cannot be blank")
    }
    else {
        // Error Check: JSON Parsible
        try {
            const inputTreeArray = JSON.parse(inputTree.value)
            if (inputTreeArray.constructor !== Array) {
                setErrorFor(inputTree, "Input is not an array")
            }
            else {
                // Error Check: Valid List of Numbers and Null
                var isValid = true
                for (var i = 0; i < inputTreeArray.length; i++) {
                    if (inputTreeArray[i] != null && (typeof(inputTreeArray[i]) == 'number')) {
                        ifValid = false
                        setErrorFor(inputTree, "Invalid Element in Array")
                    }
                }
    
                if (isValid) {
                    setSuccessFor(inputTree)
                }
            }
        }
        catch(e) {
            setErrorFor(inputTree, "Input cannot be parsed")
        }
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



