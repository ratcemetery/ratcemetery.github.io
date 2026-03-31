document.addEventListener("DOMContentLoaded", () => {

  // ===== SUBTLE CRT FLICKER (SAFE) =====
  setInterval(() => {
    document.body.style.opacity = 0.995 + Math.random() * 0.005;
  }, 120);

  // ===== AUDIO CONTROLS =====
  const player = document.getElementById('player');
  const volUp = document.getElementById('vol-up');
  const volDown = document.getElementById('vol-down');
  const mute = document.getElementById('mute');

  if (player) {
    volUp.addEventListener('click', () => {
      player.volume = Math.min(player.volume + 0.1, 1);
    });

    volDown.addEventListener('click', () => {
      player.volume = Math.max(player.volume - 0.1, 0);
    });

    mute.addEventListener('click', () => {
      player.muted = !player.muted;
      mute.textContent = player.muted ? "Unmute" : "Mute";
    });

    // Unmute after first interaction (fixes autoplay weirdness)
    document.addEventListener("click", () => {
      player.muted = false;
    }, { once: true });
  }

});
