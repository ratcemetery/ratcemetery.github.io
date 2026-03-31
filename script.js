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

// Glow pulse on hover
document.querySelectorAll(".grave").forEach(g => {
  g.addEventListener("mouseenter", () => {
    g.style.boxShadow = "0 0 12px #7bff00";
  });
  g.addEventListener("mouseleave", () => {
    g.style.boxShadow = "none";
  });
});

// Occasional micro-jitter of the whole page
setInterval(() => {
  if (Math.random() < 0.08) {
    document.body.style.transform = "translateX(1px)";
    setTimeout(() => {
      document.body.style.transform = "translateX(0)";
    }, 60);
  }
}, 120);

// Fade-in on load
document.body.style.opacity = 0;
window.addEventListener("load", () => {
  let o = 0;
  const fade = setInterval(() => {
    o += 0.02;
    document.body.style.opacity = o;
    if (o >= 1) clearInterval(fade);
  }, 30);
});

// Random rat scurry
function scurryRat() {
  const rat = document.getElementById("scurry-rat");

  // Randomize delay between scurries (10–30 seconds)
  const delay = 10000 + Math.random() * 20000;

  setTimeout(() => {
    // Reset starting position
    rat.style.transition = "none";
    rat.style.left = "-120px";
    rat.style.opacity = "1";

    // Force browser to register the reset before animating
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        rat.style.transition = "left 1.2s linear, opacity 0.3s ease";
        rat.style.left = "110%"; // run across screen

        // Fade out after crossing
        setTimeout(() => {
          rat.style.opacity = "0";
        }, 1000);
      });
    });

    // Schedule next scurry
    scurryRat();
  }, delay);
}

scurryRat();
