const input = document.getElementById("search");
const posts = document.querySelectorAll(".post-card");

input?.addEventListener("keyup", () => {
  const val = input.value.toLowerCase();
  posts.forEach(p => {
    p.style.display = p.innerText.toLowerCase().includes(val)
      ? "block"
      : "none";
  });
});
