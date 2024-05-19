// Window Prompt

//let username;
//username = window.prompt("What is your username?");
//console.log(username)

// HTML Text Box

// Selecting Button
let username
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}