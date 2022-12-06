//INCREMENT button

document.getElementById("increment").addEventListener("click", increment);

let count = 0 //the var needs to be declared outside the function or it will only work once
function increment() {
    count += 1
    document.getElementById("counter").innerHTML = count; //you can also store the element in a var e.g. let counter = document.getElementById("counter") and then just do counter.inneHTML.....
}

//SAVE button

document.getElementById("save").addEventListener("click", save);


let counter = document.getElementById("counter")
let saved = document.getElementById("saved")
function save() {
    let savedString = (`${count} - `) //we don't want the savedString to delete the existing content of h2 id="saved" so instead of saying .innerHTML = we say +=
    saved.innerHTML += savedString //innerHTML innerText textContent or nodeValue? https://stackoverflow.com/questions/21311299/nodevalue-vs-innerhtml-and-textcontent-how-to-choose
    counter.innerHTML = 0 //this resets the counter back to 0 on the html page, but the increment button will restart from the last number counted unless...
    count = 0    // you reset the count variable too
}

