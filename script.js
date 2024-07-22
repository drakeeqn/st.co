const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.container').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 500; // Adjust for density

// Function to create a star
function createStar() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * 100, // Depth
    size: Math.random() * 3, // Size variation
    vx: (Math.random() - 0.5) * 0.5, // Random horizontal speed
    vy: (Math.random() - 0.5) * 0.5 // Random vertical speed
  };
}

// Initialize the stars array
for (let i = 0; i < numStars; i++) {
  stars.push(createStar());
}

// Function to draw stars
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    // Calculate distance from the center
    const distance = Math.sqrt(
      Math.pow(star.x - canvas.width / 2, 2) +
      Math.pow(star.y - canvas.height / 2, 2)
    );

    // Apply parallax effect
    const parallax = 1 - distance / (canvas.width / 2);

    // Adjust size and brightness based on depth
    const size = star.size * (1 + parallax * 0.5);
    const brightness = 255 - star.z * 2.5;

    ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness}, 0.8)`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
    ctx.fill();

    // Update star position
    star.x += star.vx;
    star.y += star.vy;

    // Wrap around the edges
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;
  }
}

// Update and draw stars every frame
function animate() {
  drawStars();
  requestAnimationFrame(animate);
}

animate();

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});