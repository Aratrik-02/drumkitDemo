for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function () {
        var buttonInnerHTML = this.innerHTML;
        makenoise(buttonInnerHTML);
        animation(buttonInnerHTML);
    })
}
document.addEventListener("keypress",function (event){
    makenoise(event.key);
    animation(event.key);
})
/* Equivalent JQuery code
$("button").click(function () {
    var buttonInnerHTML = this.innerHTML;
    makenoise(buttonInnerHTML);
    animation(buttonInnerHTML);
})
$("body").keypress(function (event){
    makenoise(event.key);
    animation(event.key);
})*/
function makenoise(k){
    switch(k){
        case "w": 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);

    }
}
function animation(evt){
    var buttonElement = document.querySelector("."+evt);
    buttonElement.classList.add("pressed");
    setTimeout(function () {
        buttonElement.classList.remove("pressed");
    },200);
}
