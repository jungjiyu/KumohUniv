const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn')
const audioNextBtn = document.querySelector('.js-audioNextBtn');

const MUSIC_COUNT = 1;

let currentAudio = 1;


function playAudio() {
  audioContainer.volume = 0.2;
  audioContainer.loop = true;
  audioContainer.play();
  
  var ptag = document.getElementById("plybtn");
  ptag.style.color="white";
  ptag.style.fontSize="20px";
  ptag.style.LineHeight="40px";
  if(  ptag.className == 'fas fa-solid fa-pause' ){
    ptag.className='fas fa-solid fa-play';
    audioContainer.pause();  

  }
  else{
    ptag.className='fas fa-solid fa-pause';

  }

}

function stopAudio() {
  audioContainer.pause();  
}


function loadAudio() {
  const source = document.querySelector('#audioSource');
  source.src = `audio/${currentAudio}.mp3`;
  audioContainer.load();
  playAudio();
}

function handleNextButtonClick() { 

  if (currentAudio < MUSIC_COUNT) {
    currentAudio += 1;
  } else {
    currentAudio = 1;
  }
  
  loadAudio();
}



playBtn.addEventListener('click', loadAudio);
audioNextBtn.addEventListener('click', handleNextButtonClick);
stopBtn.addEventListener('click', stopAudio)