document.getElementById("capitalizer-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const inputText = document.getElementById("input-text").value;

    const response = await fetch("/capitalize", {
        method: "POST",
        body: new FormData(this)
    });

    const data = await response.json();
    document.getElementById("output-text").textContent = data.capitalized_text;
});
