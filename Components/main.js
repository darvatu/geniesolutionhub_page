document.getElementById(
  "construction-notice"
).textContent = `Site under construction, last change ${new Date().toLocaleString()}`;
document.getElementById(
  "copyright-notice"
).textContent = `© ${new Date().getFullYear()} Daniel Arvatu`;
document.getElementById("cv-link").href = "./Pages/MyCV.html";
