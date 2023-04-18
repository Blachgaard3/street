const progressBar = document.querySelector('.progressBar');
const section = document.querySelector('section');

const scrollProgressBar = () => {
  let scrollDistance = -(section.getBoundingClientRect().top);
  let progressPercentage =
    (scrollDistance /
      (section.getBoundingClientRect().height -
        document.documentElement.clientHeight)) * 100;

  let val = Math.floor(progressPercentage);
  progressBar.style.height = val + '%';

  if (val < 0) {
    progressBar.style.height = '0%';
  }
};

window.addEventListener('scroll', scrollProgressBar);


// Knap til at åbne, de bobler/knapper hvori man kan få information om boderne
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// span elementet som lukker modal boksen. 
var spans = document.getElementsByClassName("close");

// til at åbne modalboksen 
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  }
}
// bruges til at lukke 
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
  }
}
// Trykker man udenfor modal boksen, lukker den ned. 
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
    }
  }
}

// const images = document.querySelectorAll('.imgpara ');

// function fadeInOnScroll() {
//   images.forEach(image => {
//     const container = image.parentElement;
//     const containerTop = container.getBoundingClientRect().top;
//     const containerBottom = container.getBoundingClientRect().bottom;
//     const viewportHeight = window.innerHeight;


//     if (containerTop < viewportHeight && containerBottom >= 0) {
//       image.classList.add('fade-in');
//     }
//   });


// }

// window.addEventListener('scroll', fadeInOnScroll);




// var parallaxElements = document.querySelectorAll('.parallax');
// var parallaxText = document.querySelector('.parallax-text');

// window.addEventListener('scroll', function () {
//   var scrollPosition = window.pageYOffset;

//   parallaxElements.forEach(function (element, index) {
//     var speed = index + 0.2;
//     var position = -scrollPosition * speed * 0.2;
//     element.style.transform = 'translateY(' + position + 'px)';
//   });
//   parallaxText.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
// });

const audio1 = new Audio('mp3/guitar.mp3');
const audio2 = new Audio('mp3/home.mp3');
const audio3 = new Audio('mp3/aarhus.mp3');
const audio4 = new Audio('mp3/crowd.mp3');
const audio5 = new Audio('mp3/guitar.mp3');
const audio6 = new Audio('mp3/home.mp3');
const audio7 = new Audio('mp3/aarhus.mp3');
const audio8 = new Audio('mp3/strand.mp3');
const audio9 = new Audio('mp3/guitar.mp3');
const audio10 = new Audio('mp3/home.mp3');
const audio11 = new Audio('mp3/aarhus.mp3');
const audio12 = new Audio('mp3/strand.mp3');

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const section5 = document.querySelector('#section5');
const section6 = document.querySelector('#section6');
const section7 = document.querySelector('#section7');
const section8 = document.querySelector('#section8');
const section9 = document.querySelector('#section9');
const section10 = document.querySelector('#section10');
const section11 = document.querySelector('#section11');
const section12 = document.querySelector('#section12');
let playingAudio = null;

function playAudio(audio) {
  if (playingAudio) {
    playingAudio.pause();

  }
  audio.play();
  playingAudio = audio;
}

function handleScroll() {
  const y = window.pageYOffset;

  if (y >= section1.offsetTop -600 && y < section2.offsetTop -600) {
    playAudio(audio1);
  } else if (y >= section2.offsetTop -600 && y < section3.offsetTop -600 ) {
    playAudio(audio2);
  } else if (y >= section3.offsetTop -600 && y < section4.offsetTop -600){
    playAudio(audio3);
  } else if (y >= section4.offsetTop -600 && y < section5.offsetTop -600){
    playAudio(audio4);
  } else if (y >= section5.offsetTop -600 && y < section6.offsetTop -600){
    playAudio(audio5);
  } else if (y >= section6.offsetTop -600 && y < section7.offsetTop -600){
    playAudio(audio6);
  } else if (y >= section7.offsetTop -600 && y < section8.offsetTop -600){
    playAudio(audio7);
  } else if (y >= section8.offsetTop -600 && y < section9.offsetTop -600){
    playAudio(audio8);
  } else if (y >= section9.offsetTop -600 && y < section10.offsetTop -600){
    playAudio(audio9);
  } else if (y >= section10.offsetTop -600 && y < section11.offsetTop -600){
    playAudio(audio10);
  } else if (y >= section11.offsetTop -600 && y < section12.offsetTop -600){
    playAudio(audio11);
  } else if (y >= section12.offsetTop -600 ){
    playAudio(audio12);
  } else {
    if (playingAudio) {
      playingAudio.pause();
      playingAudio.currentTime = 0;
      playingAudio = null;
    }
  }
}

window.addEventListener('scroll', handleScroll);

function myFunction() {
  document.getElementById("content").style.display = "block";
  document.getElementById("forside").style.display = "none";

}

let elementsArray = document.querySelectorAll(".parallax-text");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 500;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();