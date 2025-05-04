// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const tempImage = document.getElementById("horn-select");
  const image = document.querySelectorAll('img')[0];
  const image1 = document.querySelectorAll('img')[1];
  const button = document.querySelectorAll('button')[0];
  const slider = document.getElementById("volume");
  const audio = document.getElementsByClassName("hidden");
  const jsConfetti = new JSConfetti()
  tempImage.addEventListener("change", (event) => {
    image.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
  });
  slider.addEventListener("change", (event) => {
    if(slider.value >= 1 && slider.value <  33) {
      image1.src = `assets/icons/volume-level-1.svg`;
    }else if(slider.value >= 33 && slider.value <  67) {
      image1.src = `assets/icons/volume-level-2.svg`;
    }else if(slider.value >= 67) {
      image1.src = `assets/icons/volume-level-3.svg`;
    }else{
      image1.src = `assets/icons/volume-level-0.svg`;
    }
  });
  button.addEventListener("click", (event) => {
    const audioElement = new Audio(audio.src);
    if(audio.src == "assets/audio/party-horn.mp3") {
      jsConfetti.addConfetti()
    }
    audioElement.volume = slider.value/100;
    audioElement.play();
  });
}