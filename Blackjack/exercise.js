// let msg = document.querySelector("#chat");
// let chat = [
//     "Message 1",
//     "Message 2",
//     "Message 3",
//     "Message 4",
//     "Message 5",
//     "Message 6"
// ]

// let newMsg = "Message 7"
// chat.push(newMsg)

// for (let i = 0; i < chat.length; i++) {
//     msg.innerHTML = chat;
// }

let time1 = 150
let time2 = 200

function tot() {
    return time1 + time2
}

function best() {
    if (time1 < time2) {
        return time1
    }
    else if (time2 < time1) {
        return time2
    }
    else {
        console.log("Even");
    }
}
let toTime = tot()
let besTime = best()
console.log("Total time = " + toTime);
console.log("Best time = " + besTime);

let num = Math.floor(Math.random()*13)+1;
console.log(num);


