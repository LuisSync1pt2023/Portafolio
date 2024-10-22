// script.js
const codeElement = document.getElementById("code");
const codeText = `LuisSync1pt Developer de Bots de Discord and decoración de discord.);
}`;

function repeatCode(text, times) {
    let repeatedText = "";
    for (let i = 0; i < times; i++) {
        repeatedText += text + "\n";
    }
    return repeatedText;
}

// Repetir el texto para que sea un poco más largo
codeElement.textContent = repeatCode(codeText, 20);
