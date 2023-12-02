const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  grabCursor: true,
});

let codeBlocks = document.querySelectorAll(".card__code-block");

codeBlocks.forEach((codeBlock) => {
  codeBlock.addEventListener("click", (event) => {
    window.navigator.clipboard.writeText(codeBlock.textContent);
    codeBlock.classList.add("copy_ok");
    setTimeout(() => {
      codeBlock.classList.remove("copy_ok");
    }, 1000);
  });
});
