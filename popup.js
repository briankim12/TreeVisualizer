const inputTree = document.getElementById("inputTree");
const error = document.getElementById("error");
const form = document.getElementById("form");
const output = document.getElementById("output")
// output.innerHTML = "Output Inner HTML";



form.addEventListener("submit", (e) => {
    e.preventDefault()
    error.innerText = "Button Pressed"
    console.log("submit-build pressed")
    console.log(inputTree.value)

});

// const init = function() {
//     document.getElementById("submit-build").addEventListener("click", build)
// }


// const build = function(ev) {

// }



// Shows up On Inspect Element Developer
console.log("Hello From popup.js")