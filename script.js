// CRT flicker effect
setInterval(() => {
  document.body.style.opacity = 0.98 + Math.random() * 0.02;
}, 80);

// Jitter on hover for graves
document.querySelectorAll(".grave").forEach(g => {
  g.addEventListener("mouseenter", () => {
    g.style.transform = "translateX(-2px)";
  });
  g.addEventListener("mouseleave", () => {
    g.style.transform = "translateX(0)";
  });
});
