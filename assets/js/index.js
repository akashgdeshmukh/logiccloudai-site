const logos = [
  'assets/images/logiccloudai.png',
  // Add more logos here
];

const canvas = document.getElementById("orbitCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const logoObjects = logos.map(src => {
  const img = new Image();
  img.src = src;
  return { img, angle: Math.random() * 2 * Math.PI, radius: 150 + Math.random() * 100, speed: 0.01 + Math.random() * 0.03 };
});

function animateAll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  logoObjects.forEach(obj => {
    const x = centerX + obj.radius * Math.cos(obj.angle) - 50;
    const y = centerY + obj.radius * Math.sin(obj.angle) - 50;
    if (obj.img.complete) ctx.drawImage(obj.img, x, y, 100, 100);
    obj.angle += obj.speed;
  });

  requestAnimationFrame(animateAll);
}

animateAll();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
