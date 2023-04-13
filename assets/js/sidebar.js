const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");
const closebtn = document.getElementById("sidebarclose");
const contentside = document.getElementById("content-side");
const backgroundwhite = document.getElementById("backgroundwhite");

closebtn.addEventListener("click", togglesidebar);
toggle.addEventListener("click", togglesidebar);

function togglesidebar() {
  if (sidebar.classList.contains("sidebarhide")) {
    closebtn.style.display = "none";
  } else {
    closebtn.style.display = "block";
  }
  sidebar.classList.toggle("sidebarhide");
  contentside.classList.toggle("content-side");
  contentside.classList.toggle("w-100");
}