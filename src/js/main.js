import "../scss/style.scss";

import confetti from "canvas-confetti";

const button = document.querySelector(".party-button");

button.addEventListener("click", ($event) => {
  const target = $event.target.getBoundingClientRect();
  const halfWidth = target.width / 2;
  const halfHeight = target.height / 2;
  confetti({
    particleCount: 150,
    spread: 60,
    colors: ["#00fff1", "#ff00aa", "#46fcb4"],
    angle: 90,
    origin: {
      x: (target.x + halfWidth) / window.innerWidth,
      y: (target.y + halfHeight) / window.innerHeight,
    },
  });
});
