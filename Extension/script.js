let myLeads = []
const input = document.getElementById("input")
const list = document.getElementById("list")

document.getElementById("save").addEventListener("click", save);
function save() {
    myLeads.push(input.value); //this sends your input into the myLeads[]
    input.value = ""; // this is to clear the input box after each typed element
    listFun()
}

function listFun() {
    let items = "" //this avoids to have the whole array repeated at every click
    for (let i = 0; i < myLeads.length; i++) {   //this picks your array's items one at a time
        items += "<li><a href=' " + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";

      //  `<li>      This is the template literal translation of the line above
      //   <a href='${myLeads[1]}' target='_blank'>${myLeads[1]}</a>
      //   </li>`
         
    }
    list.innerHTML = items //and now what you have on the list is only one item at a time and only what is in the input.value
}