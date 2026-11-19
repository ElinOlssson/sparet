const hearts = document.querySelectorAll(".product-card_heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("is-active");

    const isActive = heart.classList.contains("is-active");
    const heartImage = heart.querySelector("img");

    if (isActive) {
      heartImage.src = "image/Ikon/Heartfilled.svg";
    } else {
      heartImage.src = "image/Ikon/Heart.svg";
    }

    heart.setAttribute("aria-pressed", isActive);
  });
});