const showcase = document.getElementById("showcase");
const imgEl = document.getElementById("showcase-img");
const msgEl = document.getElementById("showcase-msg");
const transition = document.getElementById("transition");
const emojiContainer = document.getElementById("emoji-container");
const thankYou = document.getElementById("thank-you");

// 🎁 Surprise Modal
function showSurpriseNote() {
  const modal = document.getElementById("surprise-modal");
  modal.classList.remove("hidden");

  setTimeout(() => {
    modal.classList.add("hidden");
    startShowcase();
  }, 3000); // Auto-close after 3 seconds
}

document.getElementById("close-modal").addEventListener("click", () => {
  const modal = document.getElementById("surprise-modal");
  modal.classList.add("hidden");
  startShowcase();
});

// 🎉 Confetti
function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const confetti = window.confetti.create(canvas, { resize: true });
  confetti({ particleCount: 300, spread: 120, origin: { y: 0.6 } });
}

const confettiScript = document.createElement("script");
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
confettiScript.onload = launchConfetti;
document.body.appendChild(confettiScript);

// 🌠 Floating Emojis
const emojis = ["🎉", "🎂", "💖", "✨", "🎈", "🥳"];
function launchEmojis() {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emojiContainer.appendChild(emoji);
  setTimeout(() => emoji.remove(), 5000);
}
setInterval(launchEmojis, 800);

// 🎠 Image + Message Showcase
const messages = [
  "You make every moment brighter 🌟",
  "Your smile is my favorite sunshine ☀️",
  "To the kindest soul I know 💖",
  "Wishing you endless joy and laughter 🎈",
  "You deserve the world and more 🌍",
  "Keep shining, birthday queen 👑",
  "Every memory with you is a treasure 💎",
  "Your heart is pure magic ✨",
  "You’re the reason behind so many smiles 😊",
  "Here’s to more adventures together 🚀",
  "You light up lives just by being you 💫",
  "Happy Birthday to my favorite person 🎂",
  "Your laugh is my favorite sound 🎶",
  "You’re loved more than words can say 💕",
  "Let’s make this year unforgettable 🥳",
  "You’re a masterpiece in motion 🎨",
  "Forever grateful for you 🙏",
  "You’re the sparkle in my story ✍️"
];

let index = 0;

function startShowcase() {
  showcase.classList.remove("hidden");
  showNext();
}

function showNext() {
  if (index >= messages.length) {
    showcase.classList.add("hidden");
    thankYou.classList.remove("hidden");
    return;
  }

  if (index >= messages.length) {
  showcase.classList.add("hidden");
  thankYou.classList.remove("hidden");
  document.getElementById("chime").play(); // 🎶 Play chime
  sparkleBurst(); // 🌠 Trigger sparkle
  return;
}

  imgEl.style.opacity = 0;
  msgEl.style.opacity = 0;

  setTimeout(() => {
    imgEl.src = `assets/images/img${index + 1}.jpg`;
    msgEl.textContent = messages[index];
    imgEl.style.animation = "fadeIn 1s ease forwards, slideLeft 1s ease forwards";
    msgEl.style.animation = "fadeInMsg 1s ease forwards";
    flashTransition();
    index++;
    setTimeout(showNext, 4000);
  }, 500);
}

function flashTransition() {
  transition.style.animation = "flash 1s ease";
  transition.style.opacity = 1;
  setTimeout(() => {
    transition.style.animation = "";
    transition.style.opacity = 0;
  }, 1000);
}

// 🎁 Start on giftbox click
document.getElementById("giftbox").addEventListener("click", () => {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("bg-music").play();
  launchConfetti();
  showSurpriseNote();
});

function sparkleBurst() {
  const canvas = document.getElementById("confetti-canvas");
  const sparkle = window.confetti.create(canvas, { resize: true });
  sparkle({
    particleCount: 100,
    spread: 180,
    startVelocity: 40,
    scalar: 1.2,
    colors: ['#ff69b4', '#ffffff', '#ffd1dc'],
    origin: { y: 0.3 }
  });
}