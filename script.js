const textarea = document.querySelector("textarea");

const counters = document.querySelectorAll(".counter-box strong");

const copyButton = document.querySelector(".copy-btn");
const clearButton = document.querySelector(".clear-btn");

function updateCounts() {

    const text = textarea.value;

    const words = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;

    const characters = text.length;

    const charactersWithoutSpaces =
        text.replace(/\s/g, "").length;

    const sentences = text.trim() === ""
        ? 0
        : text.split(/[.!?]+/)
            .filter(item => item.trim() !== "").length;

    const paragraphs = text.trim() === ""
        ? 0
        : text.split(/\n\s*\n/)
            .filter(item => item.trim() !== "").length;


    counters[0].textContent = words;
    counters[1].textContent = characters;
    counters[2].textContent = charactersWithoutSpaces;
    counters[3].textContent = sentences;
    counters[4].textContent = paragraphs;
}


textarea.addEventListener("input", updateCounts);


copyButton.addEventListener("click", function () {

    if (textarea.value === "") {
        return;
    }

    navigator.clipboard.writeText(textarea.value);

    copyButton.textContent = "Copied!";

    setTimeout(function () {
        copyButton.textContent = "Copy";
    }, 1500);
});


clearButton.addEventListener("click", function () {

    textarea.value = "";

    updateCounts();

    textarea.focus();
});


updateCounts();