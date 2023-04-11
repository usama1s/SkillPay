var input = document.querySelector("#phone");
var errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number",
];
window.addEventListener("load", function () {
  (errorMsg = document.querySelector("#error-msg")),
    (validMsg = document.querySelector("#valid-msg"));
  var iti = window.intlTelInput(input, {
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js",
  });
  window.intlTelInput(input, {
    // allowDropdown: false,
    // autoHideDialCode: false,
    autoPlaceholder: "off",
    // dropdownContainer: document.body,
    // excludeCountries: ["us"],
    // formatOnDisplay: false,
    geoIpLookup: function (callback) {
      $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
        resp
      ) {
        var countryCode = resp && resp.country ? resp.country : "";
        callback(countryCode);
      });
    },
    // hiddenInput: "full_number",
    initialCountry: "auto",

    // localizedCountries: { 'de': 'Deutschland' },
    //nationalMode: false,
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // placeholderNumberType: "MOBILE",
    // preferredCountries: ['cn', 'jp'],
    placeholder: "",
    separateDialCode: true,
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js",
  });
  $(validMsg).addClass("hide");
  input.addEventListener("blur", function () {
    reset();
    if (input.value.trim()) {
      if (iti.isValidNumber()) {
        validMsg.classList.remove("hide");
      } else {
        input.classList.add("error");
        var errorCode = iti.getValidationError();
        errorMsg.innerHTML = errorMap[errorCode];
        errorMsg.classList.remove("hide");
      }
    }
  });

  input.addEventListener("change", reset);
  input.addEventListener("keyup", reset);
});

var reset = function () {
  input.classList.remove("error");
  // errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};
$(document).ready(function () {
  $("#phone").val("+971__ ___ __ __");
});

window.onload = function () {
  MaskedInput({
    elm: document.getElementById("phone"), // select only by id
    format: "__ ___ __ __",
    separator: "",
  });
};

const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");
const closebtn = document.getElementById("sidebarclose");
const contentside = document.getElementById("content-side");
closebtn.addEventListener("click", togglesidebar);
toggle.addEventListener("click", togglesidebar);

function togglesidebar() {
  if (sidebar.classList.contains("sidebarhide")) {
    closebtn.style.display="none";
  } else {
    closebtn.style.display="block"; 
  }
sidebar.classList.toggle("sidebarhide");
contentside.classList.toggle("content-side");
contentside.classList.toggle("w-100");

}






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
        }, 2000);
      }