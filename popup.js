const inputTreeString = document.getElementById("inputTreeString");
const error = document.getElementById("error");
const form = document.getElementById("form");
const output = document.getElementById("output")
// output.innerHTML = "Output Inner HTML";



form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(inputTreeString.value)
    const inputTreeJSON = JSON.parse(inputTreeString.value)


    console.log(inputTreeJSON)



    error.innerText = "{typeof(inputTreeArray.value)}"
 
    

});

// const init = function() {
//     document.getElementById("submit-build").addEventListener("click", build)
// }


// const build = function(ev) {

// }



// Shows up On Inspect Element Developer
console.log("Hello From popup.js")