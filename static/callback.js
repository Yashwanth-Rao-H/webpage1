const requestButton = document.getElementById("requestCallback");
const popupOverlay = document.getElementById("popupOverlay");
const closePopupButton = document.getElementById("closePopup");

// Show popup
requestButton.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

// Close popup
closePopupButton.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

// Close popup when clicking outside the popup-content
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});