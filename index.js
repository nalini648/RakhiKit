// Detecting Button pressed
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  /*document.querySelectorAll(".drum")[i].addEventListener("click", buttonClick);
  function buttonClick(){
    console.log(this.innerHTML);*/
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
     var buttonInnerHTML = this.innerHTML;


 makeSound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML);


  });

}
// Detecting key pressed
document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "H":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "P":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "P":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

       case "Y":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "R":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
      case "A":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "K":
      var kid = new Audio("sounds/kid.mp3");
      kid.play();
      break;

    case "H":
      var sound = new Audio("sounds/sound.mp3");
      sound.play();
      break;

    case "I":
      var birds = new Audio("sounds/birds.mp3");
      birds.play();
      break;

    case "T":
      var dog = new Audio("sounds/dog.mp3");
      dog.play();
      break;

    case "O":
      var laugh = new Audio("sounds/laugh.mp3");
      laugh.play();
      break;
      case "A":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "L":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
      case "L":
        var heli = new Audio("sounds/heli.mp3");
        heli.play();
        break;


    default:
      console.log(buttonInnerHTML);

  }
}
function  buttonAnimation(currentKey){
var activeButton= document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}
