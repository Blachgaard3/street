

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
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}
// bruges til at lukke 
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}
// Trykker man udenfor modal boksen, lukker den ned. 
window.onclick = function(event) {
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
const audio4 = new Audio('mp3/strand.mp3');

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

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

  if (y >= section1.offsetTop && y < section2.offsetTop) {
    playAudio(audio1);
  } else if (y >= section2.offsetTop && y < section3.offsetTop) {
    playAudio(audio2);
  } else if (y >= section3.offsetTop) {
    playAudio(audio3);
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