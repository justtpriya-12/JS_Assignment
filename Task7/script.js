const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const jokeBtn = document.getElementById("jokeBtn");

function loadJoke() {
    
    jokeBtn.disabled = true;
    jokeBtn.textContent = "Loading...";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            setupEl.textContent = data.setup;
            punchlineEl.textContent = data.punchline;

            jokeBtn.disabled = false;
            jokeBtn.textContent = "Next Joke";
        })
        .catch(error => {
            setupEl.textContent = "Oops! Failed to load joke.";
            punchlineEl.textContent = "";

            jokeBtn.disabled = false;
            jokeBtn.textContent = "Try Again";
        });
}

jokeBtn.addEventListener("click", loadJoke);
