const canvas = document.getElementById("orbitCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const logo = new Image();
logo.src = 'assets/images/logiccloudai.png';

const orbitRadius = 200;
let angle = 0;
const speed = 0.02;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const x = centerX + orbitRadius * Math.cos(angle) - logo.width / 2;
  const y = centerY + orbitRadius * Math.sin(angle) - logo.height / 2;

  ctx.drawImage(logo, x, y, 100, 100); // size 100x100
  angle += speed;

  requestAnimationFrame(animate);
}

logo.onload = () => {
  animate();
};

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
