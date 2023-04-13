const fileInput = document.getElementById("file-input");
const fileUpload = document.querySelector(".file-upload");
const feedback = document.getElementById("feedback");

fileUpload.addEventListener("dragover", (event) => {
  event.preventDefault();
  fileUpload.classList.add("dragover");
});

fileUpload.addEventListener("dragleave", () => {
  fileUpload.classList.remove("dragover");
});

fileUpload.addEventListener("drop", (event) => {
  event.preventDefault();
  fileUpload.classList.remove("dragover");
  const file = event.dataTransfer.files[0];
  handleFile(file);
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  handleFile(file);
});

function handleFile(file) {
  // Show a message while the file is being uploaded
  feedback.textContent = "Uploading file...";

  // Simulate an upload process with a setTimeout
  setTimeout(() => {
    // Do something with the file
    feedback.textContent = `File "${file.name}" uploaded successfully`;
  }, 2000);
}
