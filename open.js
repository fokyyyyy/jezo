// ===== Animasi Judul =====
const title = document.querySelector(".title");
const text = "I Have Something".split("");

for (let i = 0; i < text.length; i++) {
  if (text[i] !== " ") {
    title.innerHTML += `<span>${text[i]}</span>`;
  } else {
    title.innerHTML += `<span style="margin-right: 20px;"></span>`;
  }
}

document.querySelectorAll(".title span").forEach((el) => {
  el.style.animationDelay = `${Math.random() * 3}s`;
});

// ===== Musik + Navigasi =====
function openPage(e) {
  e.preventDefault(); // ⛔ hentikan pindah halaman dulu

  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play();

  // pindah halaman SETELAH musik jalan
  setTimeout(() => {
    window.location.href = "paper.html";
  }, 300);
}
