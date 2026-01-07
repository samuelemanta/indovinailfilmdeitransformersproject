let shown = 0;
const shownDisplay = document.getElementById("shown");

const movies = [
  {
    img: "images/tf2img6.png",
    answer: "Transformers 2: La vendetta del caduto (2009)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf1img1.jpg",
    answer: "Transformers 1 (2007)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf3img13.png",
    answer: "Transformers 3: Il buio della luna (2011)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf1img4.jpg",
    answer: "Transformers 1 (2007)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf4img16.png",
    answer: "Transformers 4: L'era dell'estinzione (2014)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf2img7.png",
    answer: "Transformers 2: La vendetta del caduto (2009)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf4img19.png",
    answer: "Transformers 4: L'era dell'estinzione (2014)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf2img10.png",
    answer: "Transformers 2: La vendetta del caduto (2009)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf5img22.png",
    answer: "Transformers 5: L'ultimo cavaliere (2017)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf1img3.jpg",
    answer: "Transformers 1 (2007)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf3img15.png",
    answer: "Transformers 3: Il buio della luna (2011)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf1img5.jpg",
    answer: "Transformers 1 (2007)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf4img17.png",
    answer: "Transformers 4: L'era dell'estinzione (2014)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf2img8.png",
    answer: "Transformers 2: La vendetta del caduto (2009)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf4img20.png",
    answer: "Transformers 4: L'era dell'estinzione (2014)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf3img11.png",
    answer: "Transformers 3: Il buio della luna (2011)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf5img23.png",
    answer: "Transformers 5: L'ultimo cavaliere (2017)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf1img2.jpg",
    answer: "Transformers 1 (2007)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf3img14.png",
    answer: "Transformers 3: Il buio della luna (2011)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf2img9.png",
    answer: "Transformers 2: La vendetta del caduto (2009)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf5img21.png",
    answer: "Transformers 5: L'ultimo cavaliere (2017)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf3img12.png",
    answer: "Transformers 3: Il buio della luna (2011)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf5img24.png",
    answer: "Transformers 5: L'ultimo cavaliere (2017)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf4img18.png",
    answer: "Transformers 4: L'era dell'estinzione (2014)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  },
  {
    img: "images/tf5img25.png",
    answer: "Transformers 5: L'ultimo cavaliere (2017)",
    choices: [
      "Transformers 1 (2007)",
      "Transformers 2: La vendetta del caduto (2009)",
      "Transformers 3: Il buio della luna (2011)",
      "Transformers 4: L'era dell'estinzione (2014)",
      "Transformers 5: L'ultimo cavaliere (2017)",
    ]
  }
];

const imageEl = document.getElementById("movieImage");
const optionButtons = document.querySelectorAll(".choice");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

let score = 0;
let currentIndex = 0;
const totalImages = 25;
const scoreDisplay = document.getElementById("score");

let current = 0;
let answered = false;

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  answered = false;

  // ❗ count this image
  shown++;
  shownDisplay.textContent = shown;

  // stop the game when 25 images have been shown
  if (shown === 26) {
    alert(`Gioco finito! Il tuo punteggio finale è ${score}/25.`);

    const reload = confirm("Vuoi giocare di nuovo?");
    if (reload) location.reload();

    return;
  }

  const movie = movies[current];

  imageEl.src = movie.img;
  feedback.textContent = "";

  const shuffled = shuffle([...movie.choices]);

  optionButtons.forEach((btn, i) => {
    btn.textContent = shuffled[i];
    btn.className = "choice";
    btn.onclick = () => checkAnswer(btn, movie.answer);
  });
}

function checkAnswer(button, correctAnswer) {
  if (answered) return;
  answered = true;

  if (button.textContent === correctAnswer) {
    button.classList.add("correct");
    feedback.textContent = "Bene, hai indovinato! 😄";
    score++;
    scoreDisplay.textContent = score;
    loadNextImage();
  } else {
    button.classList.add("wrong");
    feedback.textContent = "No, la prossima volta guarda attentamente! 😞";
    optionButtons.forEach(b => {
      if (b.textContent === correctAnswer) b.classList.add("correct");
    });
  }
}

function loadNextImage() {
  currentIndex++;

  // If we used all images
  if (currentIndex === totalImages) {
    alert(`Gioco finito! Il tuo punteggio finale è ${score}/${totalImages}.`);

    const reload = confirm("Vuoi giocare di nuovo?");
    if (reload) {
      location.reload();
    }

    return;
  }

  // Load the next image
  showImage(currentIndex);
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % movies.length;
  loadQuestion();
});

loadQuestion();
