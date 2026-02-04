function enterSite() {
  // Optional: add nice fade + redirect
  document.body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1200); // match fade duration
}