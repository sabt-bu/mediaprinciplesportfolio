// Click an image in Experiments or a case study to see it full-screen.
// Click anywhere or press Esc to close.
(function () {
  var images = document.querySelectorAll(".experiment-media, .case img");
  if (!images.length) return;

  var overlay = document.createElement("div");
  overlay.className = "zoom-overlay";
  overlay.hidden = true;
  var big = document.createElement("img");
  overlay.appendChild(big);
  document.body.appendChild(overlay);

  function close() {
    overlay.hidden = true;
    big.removeAttribute("src");
    document.body.style.overflow = "";
  }

  images.forEach(function (img) {
    if (img.tagName !== "IMG") return;
    img.classList.add("zoomable");
    img.addEventListener("click", function () {
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      overlay.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  overlay.addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) close();
  });
})();
