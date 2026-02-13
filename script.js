// const yesBtn = document.getElementById("yesBtn");
// const noBtn = document.getElementById("noBtn");
// const surprise = document.getElementById("surprise");
// const heartsContainer = document.querySelector(".hearts-container");

// // Generate floating hearts
// function createHeart() {
//   const heart = document.createElement("div");
//   heart.classList.add("heart");
//   heart.innerText = "💖";
//   heart.style.left = Math.random() * 100 + "vw";
//   heart.style.fontSize = Math.random() * 24 + 16 + "px";
//   heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
//   heartsContainer.appendChild(heart);

//   // Remove after animation
//   setTimeout(() => heart.remove(), 7000);
// }

// // Generate multiple hearts continuously
// setInterval(createHeart, 300);

// // Yes button click → show gifts & message & GIF
// yesBtn.addEventListener("click", () => {
//   document.querySelector(".card").style.display = "none";
//   surprise.style.display = "block";
//   // Trigger message animation
//   document.querySelector(".message").style.opacity = 1;
// });

// // No button fun movement
// noBtn.addEventListener("mouseover", () => {
//   const x = Math.random() * 200 - 100;
//   const y = Math.random() * 200 - 100;
//   noBtn.style.transform = `translate(${x}px, ${y}px)`;
// });

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const surprise = document.getElementById("surprise");
const romanticMsg = document.getElementById("romanticMsg");
const heartsContainer = document.querySelector(".hearts-container");

// Romantic messages array
const messages = [
  "You just made my heart skip a beat 💖 Forever yours, if you'll have me 💕 My world is brighter with you 🌸 Every heartbeat whispers your name 💌 You + Me = ❤️",
  
];

// Generate floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 24 + 16 + "px";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  heartsContainer.appendChild(heart);

  // Remove after animation
  setTimeout(() => heart.remove(), 7000);
}

// Continuous floating hearts
setInterval(createHeart, 300);

// Yes click → show gifts + random romantic message
yesBtn.addEventListener("click", () => {
  document.querySelector(".card").style.display = "none";
  surprise.style.display = "block";
  romanticMsg.innerText = messages[Math.floor(Math.random() * messages.length)];
  romanticMsg.style.opacity = 1;
});

// No button moves away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

