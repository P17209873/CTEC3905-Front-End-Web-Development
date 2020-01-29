const hello = document.getElementById("hello");

hello.addEventListener("click", greeting);

function greeting() {
    console.log("Greeting function called at: " + getTime());
    hello.textContent = "Hello there amigo";
}

function getTime(){
    let d = new Date();
    let time = d.toLocaleTimeString("en-GB");
    return time;
}