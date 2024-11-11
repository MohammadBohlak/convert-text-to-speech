let text = document.getElementById("text");

const saywelcome = (msg) => {
  const sp = new SpeechSynthesisUtterance(msg);

  [sp.voice] = speechSynthesis.getVoices();

  speechSynthesis.speak(sp);
};
document.getElementById("say").onclick = () => {
  saywelcome(document.getElementById("text").value);
};
let keyboardRows = [
  [
    { arabic: "", uppercase: "ذ", lowercase: "ذ", id: "Backquote" },
    { arabic: "", uppercase: "1", lowercase: "1", id: "Digit1" },
    { arabic: "", uppercase: "2", lowercase: "2", id: "Digit2" },
    { arabic: "", uppercase: "3", lowercase: "3", id: "Digit3" },
    { arabic: "", uppercase: "4", lowercase: "4", id: "Digit4" },
    { arabic: "", uppercase: "5", lowercase: "5", id: "Digit5" },
    { arabic: "", uppercase: "6", lowercase: "6", id: "Digit6" },
    { arabic: "", uppercase: "7", lowercase: "7", id: "Digit7" },
    { arabic: "", uppercase: "8", lowercase: "8", id: "Digit8" },
    { arabic: "", uppercase: "9", lowercase: "9", id: "Digit9" },
    { arabic: "", uppercase: "0", lowercase: "0", id: "Digit0" },
    { arabic: "_", uppercase: "-", lowercase: "-", id: "Minus" },
    { arabic: "+", uppercase: "=", lowercase: "=", id: "Equal" },
  ],
  [
    { arabic: "ض", uppercase: "Q", lowercase: "q", id: "KeyQ" },
    { arabic: "ص", uppercase: "W", lowercase: "w", id: "KeyW" },
    { arabic: "ث", uppercase: "E", lowercase: "e", id: "KeyE" },
    { arabic: "ق", uppercase: "R", lowercase: "r", id: "KeyR" },
    { arabic: "ف", uppercase: "T", lowercase: "t", id: "KeyT" },
    { arabic: "غ", uppercase: "Y", lowercase: "y", id: "KeyY" },
    { arabic: "ع", uppercase: "U", lowercase: "u", id: "KeyU" },
    { arabic: "ه", uppercase: "I", lowercase: "i", id: "KeyI" },
    { arabic: "خ", uppercase: "O", lowercase: "o", id: "KeyO" },
    { arabic: "ح", uppercase: "P", lowercase: "p", id: "KeyP" },
    { arabic: "ج", uppercase: "{", lowercase: "[", id: "BracketLeft" },
    { arabic: "]", uppercase: "}", lowercase: "]", id: "BracketRight" },
  ],
  [
    { arabic: "ش", uppercase: "A", lowercase: "a", id: "KeyA" },
    { arabic: "س", uppercase: "S", lowercase: "s", id: "KeyS" },
    { arabic: "ي", uppercase: "D", lowercase: "d", id: "KeyD" },
    { arabic: "ب", uppercase: "F", lowercase: "f", id: "KeyF" },
    { arabic: "ل", uppercase: "G", lowercase: "g", id: "KeyG" },
    { arabic: "ا", uppercase: "H", lowercase: "h", id: "KeyH" },
    { arabic: "ت", uppercase: "J", lowercase: "j", id: "KeyJ" },
    { arabic: "ن", uppercase: "K", lowercase: "k", id: "KeyK" },
    { arabic: "م", uppercase: "L", lowercase: "l", id: "KeyL" },
    { arabic: "ك", uppercase: ":", lowercase: ";", id: "Semicolon" },
    { arabic: "'", uppercase: '"', lowercase: "'", id: "Quote" },
  ],
  [
    { arabic: "ئ", uppercase: "Z", lowercase: "z", id: "KeyZ" },
    { arabic: "ء", uppercase: "X", lowercase: "x", id: "KeyX" },
    { arabic: "ؤ", uppercase: "C", lowercase: "c", id: "KeyC" },
    { arabic: "ر", uppercase: "V", lowercase: "v", id: "KeyV" },
    { arabic: "لا", uppercase: "B", lowercase: "b", id: "KeyB" },
    { arabic: "ى", uppercase: "N", lowercase: "n", id: "KeyN" },
    { arabic: "ة", uppercase: "M", lowercase: "m", id: "KeyM" },
    { arabic: "و", uppercase: "<", lowercase: ",", id: "Comma" },
    { arabic: "ز", uppercase: ">", lowercase: ".", id: "Period" },
    { arabic: "ظ", uppercase: "?", lowercase: "/", id: "Slash" },
  ],
];

let rows = "";
ids = [];
for (let i = 0; i < keyboardRows.length; i++) {
  rows += "<div>";
  for (let j = 0; j < keyboardRows[i].length; j++) {
    let e = keyboardRows[i][j];
    ids.push(e.id);
    rows += `<button id="${e.id}" class="big-button"
     onclick="document.getElementById('text').value+='${e.lowercase}'">
     ${e.uppercase}<span>${e.arabic}</span></button>`;
  }
  rows += "</div>";
}
rows += `<div>
<button id="Space" class="big-button"
     onclick="document.getElementById('text').value+=' '">
      Space
    </button>
    </div>`;
ids.push("Space");
document.getElementById("keyboard").innerHTML = rows;

document.addEventListener("keydown", function (event) {
  if (ids.includes(event.code)) {
    let clickedBtn = document.getElementById(event.code);
    clickedBtn.classList.add("active");
  }
});

document.addEventListener("keyup", function (event) {
  if (ids.includes(event.code)) {
    let clickedBtn = document.getElementById(event.code);
    clickedBtn.classList.remove("active");
  }
});