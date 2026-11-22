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


/* INNOVATION CAROUSEL */

const innovationCarousel = document.querySelector(".innovation-carousel");

if (innovationCarousel) {
  const slides = innovationCarousel.querySelectorAll(".innovation-slide");
  const dots = innovationCarousel.querySelectorAll(".innovation-dot");
  const prevButton = innovationCarousel.querySelector(".innovation-prev");
  const nextButton = innovationCarousel.querySelector(".innovation-next");

  let currentSlide = 0;

  // Visa rätt slide
  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const isActive = i === currentSlide;

      slide.classList.toggle("active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));

      // Spela videon endast när kamerans slide visas
      const video = slide.querySelector("video");

      if (video) {
        if (isActive) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });

    // Uppdatera prickarna
    dots.forEach((dot, i) => {
      const isActive = i === currentSlide;

      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", String(isActive));
    });
  }

  // Nästa slide med pil
  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  // Föregående slide med pil
  prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  // Byt slide genom att klicka på prickarna
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

/* SVEPA PÅ MOBIL OCH DRA MED MUS */

let startX = 0;
let startY = 0;
let isDragging = false;

slides.forEach((slide) => {
  slide.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    startX = event.clientX;
    startY = event.clientY;
    isDragging = true;
  });

  slide.addEventListener("pointerup", (event) => {
    console.log("Pointerup registrerad:", event.clientX);
    if (!isDragging) return;

    const differenceX = startX - event.clientX;
    const differenceY = startY - event.clientY;

    isDragging = false;

    if (
      Math.abs(differenceX) > 50 &&
      Math.abs(differenceX) > Math.abs(differenceY)
    ) {
      showSlide(currentSlide + (differenceX > 0 ? 1 : -1));
    }
  });

  slide.addEventListener("pointercancel", () => {
    isDragging = false;
  });

  slide.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });
});

  showSlide(0);
}
