document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const main = document.getElementById("main-content");
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  const restartBtn = document.getElementById("restart-btn");
  const fireworksContainer = document.querySelector(".fireworks-container");

  // After splash animation, show main content
  setTimeout(() => {
    splash.style.display = "none";
    main.classList.remove("hidden");
    createFireworks();
  }, 5000);

  // Music control
  let isPlaying = false;
  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.muted = false;
      music.play();
      musicBtn.textContent = "⏸ Pause Music";
      isPlaying = true;
    } else {
      music.pause();
      musicBtn.textContent = "🎵 Play Music";
      isPlaying = false;
    }
  });

  // Restart animation
  restartBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    splash.style.display = "flex";
    main.classList.add("hidden");
    setTimeout(() => {
      splash.style.display = "none";
      main.classList.remove("hidden");
    }, 5000);
  });

  // Fireworks animation
  function createFireworks() {
    setInterval(() => {
      const fw = document.createElement("div");
      fw.className = "firework";
      const size = Math.random() * 8 + 5;
      fw.style.width = `${size}px`;
      fw.style.height = `${size}px`;
      fw.style.left = `${Math.random() * 100}%`;
      fw.style.top = `${Math.random() * 100}%`;
      fw.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
      fw.style.position = "absolute";
      fw.style.borderRadius = "50%";
      fw.style.boxShadow = "0 0 10px currentColor";
      fireworksContainer.appendChild(fw);

      setTimeout(() => fw.remove(), 1000);
    }, 200);
  }
});
                              
