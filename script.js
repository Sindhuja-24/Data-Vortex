document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.nextElementSibling;
    modal.classList.toggle("active");
  });
});