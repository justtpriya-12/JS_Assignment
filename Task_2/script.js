const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

const MAX_CHARS = 100;

textInput.addEventListener("input", () => {
    let remaining = MAX_CHARS - textInput.value.length;

    if (remaining < 0) {
        textInput.value = textInput.value.substring(0, MAX_CHARS);
        remaining = 0;
    }

    charCount.textContent = `Characters left: ${remaining}`;

    if (remaining > 20) {
        charCount.style.color = "green";
    } else if (remaining > 5) {
        charCount.style.color = "orange";
    } else {
        charCount.style.color = "red";
    }
});
