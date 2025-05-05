// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelectorAll('button')[0];
  const smile = document.querySelectorAll('img')[0];
  const textInput = document.getElementById("text-to-speak");
  var msg = new SpeechSynthesisUtterance();
  let voices = [];
  speechSynthesis.addEventListener("voiceschanged", () => {
    voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
    msg.text = textInput;
  });
  voiceSelect.addEventListener("change", (event) => {
    const slt = event.target.options[event.target.selectedIndex];
    msg.voice = voices.find(voice => voice.name + " (" + voice.lang + ")" === slt.label)
  });
  textInput.addEventListener("input", (event) => {
    msg.text = event.target.value;
  });
  button.addEventListener("click", (event) => {
    speechSynthesis.speak(msg);
    smile.src = "assets/images/smiling-open.png";
  });
  msg.addEventListener("end", (event) => {
    smile.src = "assets/images/smiling.png";
  });
}