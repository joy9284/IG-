const usernameInput = document.getElementById("username");
const captionInput = document.getElementById("captionInput");
const upload = document.getElementById("upload");
const displayUsername = document.getElementById("displayUsername");
const captionUsername = document.getElementById("captionUsername");
const captionText = document.getElementById("captionText");
const postImage = document.getElementById("postImage");

usernameInput.addEventListener("input", () => {
  displayUsername.textContent = usernameInput.value || "username";
  captionUsername.textContent = usernameInput.value || "username";
});

captionInput.addEventListener("input", () => {
  captionText.textContent = captionInput.value || "這是測試貼文";
});

upload.addEventListener("change", e => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => { postImage.src = e.target.result; };
    reader.readAsDataURL(file);
  }
});
