<script>
document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById('player');
  const playPause = document.getElementById('playPause');
  const volUp = document.getElementById('vol-up');
  const volDown = document.getElementById('vol-down');

  // AUTOPLAY ON FIRST SCROLL
  let hasScrolledToPlay = false;

  window.addEventListener('scroll', () => {
    if (!hasScrolledToPlay) {
      hasScrolledToPlay = true;
      player.muted = false;
      player.play();
      playPause.textContent = "PAUSE";
    }
  });

  // PLAY / PAUSE (also unmutes on first tap)
  playPause.addEventListener('click', () => {
    player.muted = false; // unlock audio on first gesture

    if (player.paused) {
      player.play();
      playPause.textContent = "PAUSE";
    } else {
      player.pause();
      playPause.textContent = "PLAY";
    }
  });

  // VOLUME UP
  volUp.addEventListener('click', () => {
    player.muted = false;
    player.volume = Math.min(player.volume + 0.1, 1);
  });

  // VOLUME DOWN
  volDown.addEventListener('click', () => {
    player.muted = false;
    player.volume = Math.max(player.volume - 0.1, 0);
  });
});
</script>

</script>

