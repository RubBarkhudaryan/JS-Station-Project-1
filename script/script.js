let button = document.getElementById("word-counter");

let bgColorChanger = document.getElementById("bg-color");

button.addEventListener("click", () => {
    let textarea = document.getElementById("counter");
    counter(textarea);
});

bgColorChanger.addEventListener("click", () => {
    let bgColor = document.querySelector("body");
    bgColor.style.backgroundColor = `rgb(${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`;
})

function counter(textarea) {
    let content = textarea.value;
    let container = document.getElementById("counter-container");
    let childnodes = container.querySelectorAll("p");

    let letters = 0;

    for (let i = 0; i < content.length; i++) {
        let code = content[i].charCodeAt();
        if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
            letters++;
        }
    }

    childnodes[0].querySelector("input").value = content.length;
    childnodes[1].querySelector("input").value = letters;

    if (!findSpaces(content) && content != "") {
        childnodes[2].querySelector("input").value = 1;
    }
    else if (!findSpaces(content) && content == "") {
        childnodes[2].querySelector("input").value = 0;
    }
    else {
        childnodes[2].querySelector("input").value = findSpaces(content) + 1;
    }

    childnodes[3].querySelector("input").value = countSentences(content);
}

function findSpaces(str) {
    let trimedString = str.trim();
    let spaceCount = 0;

    for (let i = 0; i < trimedString.length; i++) {
        if (trimedString[i] === " " || trimedString[i] === "\n") {
            spaceCount++;
        }
    }
    return spaceCount;
}

function countSentences(text) {
    return text.split(/[.?!]/g).filter(Boolean).length;
}


