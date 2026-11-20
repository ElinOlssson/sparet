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

const colors = document.querySelector("#active-color-picker");

const colorPicker = document.querySelector("#active-color-picker");

const productCard = colorPicker.closest(".product-card");

const productImage = productCard.querySelector(".image-default");

const colorButtons = colorPicker.querySelectorAll(".color-option");

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    productImage.src = button.dataset.image;

    colorButtons.forEach((colorButton) => {
      colorButton.classList.remove("selected");
      colorButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
  });
});