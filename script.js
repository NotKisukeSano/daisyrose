// Roses background functionality
const container = document.querySelector('.roses-background');

function createRose() {
  const rose = document.createElement('div');
  rose.classList.add('rose');

  // Set a random horizontal position (anywhere across the screen width)
  rose.style.left = `${Math.random() * 100}vw`;

  // Set random animation duration (controls falling speed)
  const fallDuration = Math.random() * 3 + 5; // Between 5 and 8 seconds
  rose.style.animationDuration = `${fallDuration}s`;

  // Set a random delay to stagger the animations
  const delay = Math.random() * 2; // Up to 3 seconds
  rose.style.animationDelay = `${delay}s`;

  // Append the rose to the background container
  container.appendChild(rose);

  // Remove the rose after it has completely fallen
  setTimeout(() => {
    rose.remove();
  }, (fallDuration + delay) * 1000); // Total time = duration + delay
}

// Continuously create roses at regular intervals
setInterval(createRose, 200); // A new rose every 100ms


// Confetti functionality
const btn = document.getElementById("myButton");

function makeConfetti() {
  confetti({
    particleCount: 100,
    angle: 90,
    spread: 45,
    origin: { x: 0.5, y: 0.5 }
  });
}

// Adding click event listener for confetti and sound play
btn.addEventListener("click", function() {
  makeConfetti();  // Make Confetti
  playSound();     // Play Sound
});

// Sound functionality
function playSound() {
  var audio = new Audio('YippeeSound.mp3');
  audio.volume = 0.2;  // Create a new Audio object each time
  audio.play();  // Play the sound
}
