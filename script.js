// ---------------------------------------------------------------------------------
// ---------------------------Home--Animation Text Code

let words = document.querySelectorAll('.word');
words.forEach((word) => {
  let letters = word.textContent.split('');
  word.textContent = '';
  letters.forEach((letter) => {
    let span = document.createElement('span');
    span.textContent = letter;
    span.className = 'letter';
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = '1';

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = 'letter out';
    }, i * 80);
  });
  nextWord.style.opacity = '1';
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = 'letter behind';
    setTimeout(() => {
      letter.className = 'letter in';
    }, 350 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 5000);

// --------------------------Animation Text Code End
// ------------------------------------END------------------------------------------

// ---------------------------------------------------------------------------------
//--------------------------- Animation Text Code by Typed.js
// var Typed = new Typed('.text_change', {
//   strings: ['Frontend Developer', 'Web Developer', 'UX/UI Developer'],
//   typeSpeed: 50,
//   backSpeed: 100,
//   backDelay: 700,
//   loop: true,
//   showCursor: true,
//   cursorChar: '✍️',
// });

//------------------- End of Animation Text Code by Typed.js
// ------------------------------------END------------------------------------------

// ---------------------------------------------------------------------------------
// -----------------------------Skill Circle Rotate---------------------------------

const circles = document.querySelectorAll('.circle');
circles.forEach((elem) => {
  var dots = elem.getAttribute('data-dots');
  var marked = elem.getAttribute('data-percent');
  var percent = Math.floor((dots * marked) / 100);
  var points = '';
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add('marked');
  }
});

// ----------------------------End of Circle Rotate
// ------------------------------------End-------------------------------------------

// ----------------------------------------------------------------------------------
// ------------------------Portfolio filter tab by mixitup---------------------------

var mixer = mixitup('.portfolio-gallery');

// ------------------------End of Portfolio filter tab by mixitup--------------------
// ------------------------------------End-------------------------------------------

// ----------------------------------------------------------------------------------
// --------------------------Active Header All Page----------------------------------

let menuBar = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuBar.forEach((sec) => sec.classList.remove('active'));
  menuBar[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', activeMenu);

// --------------------------End of Active Header
// ------------------------------------End-------------------------------------------

// ----------------------------------------------------------------------------------
// --------------------------Sticky NavBar Icon--------------------------------------

const header = document.querySelector('header');
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 50);
});
// --------------------------End of Sticky NavBar Icon
// ------------------------------------End-------------------------------------------

// ----------------------------------------------------------------------------------
// ----------------------------Toggle Navbar Icon------------------------------------

let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx');
  navbar.classList.toggle('open');
};

window.onscroll = () => {
  menuIcon.classList.remove('bx');
  navbar.classList.remove('open');
};

// ----------------------------End of Toggle Navbar Icon
// ------------------------------------End-------------------------------------------

// ----------------------------------------------------------------------------------
// -----------------------------Parallel Scroll X------------------------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-items');
    } else {
      entry.target.classList.remove('show-items');
    }
  });
});

const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll('.scroll-top');
scrollTop.forEach((el) => observer.observe(el));

// -----------------------------End of Parallel Scroll X-----------------------------
// ------------------------------------End-------------------------------------------
