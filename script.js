const html = document.documentElement;
  const darkBtn = document.getElementById("darkBtn");
  const lightBtn = document.getElementById("lightBtn");

  // attiva dark mode
  darkBtn.addEventListener("click", () => {
    html.classList.add("dark");
  });

  // attiva light mode
  lightBtn.addEventListener("click", () => {
    html.classList.remove("dark");
  });