//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const form = document.getElementById("customizationForm");

  // Apply preferences from cookies on page load
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    fontSizeInput.value = savedFontSize.replace("px", "");
    document.documentElement.style.setProperty("--fontsize", savedFontSize);
  }

  if (savedFontColor) {
    fontColorInput.value = savedFontColor;
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
  }

  // Save preferences when form is submitted
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedFontSize = `${fontSizeInput.value}px`;
    const selectedFontColor = fontColorInput.value;

    document.documentElement.style.setProperty("--fontsize", selectedFontSize);
    document.documentElement.style.setProperty("--fontcolor", selectedFontColor);

    setCookie("fontsize", selectedFontSize, 365);
    setCookie("fontcolor", selectedFontColor, 365);

    alert("Preferences saved!");
  });
});

// Utility functions for handling cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}
