function getRandomPosition(container) {
    const x = container.clientWidth;
    const y = container.clientHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

function createFlashingWord(word) {
    const container = document.getElementById('flashing-words-container');
    const flashWord = document.createElement('span');
    flashWord.classList.add('flash-word');
    flashWord.textContent = word;
    const [randomX, randomY] = getRandomPosition(container);
    flashWord.style.top = randomY + 'px';
    flashWord.style.left = randomX + 'px';
    container.appendChild(flashWord);

    setTimeout(() => {
        flashWord.remove(); // remove the word after 1 second
    }, 1000);
}

function flashRandomText() {
    const text = 'Me robaron la belleza Daría la vida por encontrarla Diosito haz algo Te pido auxilio Cúbreme con tus joyas más preciosas Tápame con cobijas de seda Píntame como diosa Hazme sentir bonita otra vez';
    const words = text.split(' ');
    const randomWord = words[Math.floor(Math.random() * words.length)];
    createFlashingWord(randomWord);
}

setInterval(flashRandomText, 500); // Flash every 0.5 seconds
