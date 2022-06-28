const tom_1 = new Audio("./sounds/tom-1.mp3");
const crash = new Audio("./sounds/crash.mp3");
const kick_bass = new Audio("./sounds/kick-bass.mp3");
const snare = new Audio("./sounds/snare.mp3");
const tom_2 = new Audio("./sounds/tom-2.mp3");
const tom_3 = new Audio("./sounds/tom-3.mp3");
const tom_4 = new Audio("./sounds/tom-4.mp3");

const sounds = [
  { button: "w", sound: crash },
  { button: "a", sound: kick_bass },
  { button: "s", sound: snare },
  { button: "d", sound: tom_1 },
  { button: "j", sound: tom_2 },
  { button: "k", sound: tom_3 },
  { button: "l", sound: tom_4 },
];

const handleClick = (index) => {
  return document
    .querySelector(`.${index.button}`)
    .addEventListener("click", () => index.sound.play());
};

sounds.map(handleClick);

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      crash.play();
      break;
    case "a":
      kick_bass.play();
      break;
    case "s":
      snare.play();
      break;
    case "d":
      tom_1.play();
      break;
    case "j":
      tom_2.play();
      break;
    case "k":
      tom_3.play();
      break;
    case "l":
      tom_4.play();
      break;

    default:
  }
});
