function getRandomPosition() {
    const x = window.innerWidth;
    const y = window.innerHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

function createFlashingWord(word) {
    const flashWord = document.createElement('span');
    flashWord.classList.add('flash-word');
    flashWord.textContent = word;
    const [randomX, randomY] = getRandomPosition();
    flashWord.style.top = randomY + 'px';
    flashWord.style.left = randomX + 'px';
    document.getElementById('flashing-words-container').appendChild(flashWord);

    setTimeout(() => {
        flashWord.remove(); // Disappear after flashing on screen to prevent dupes
    }, 1000); // Flash duration
}

function flashRandomWord() {
    const text = 'Me robaron la belleza Daría la vida por encontrarla Diosito haz algo Te pido auxilio Cúbreme con tus joyas más preciosas Tápame con cobijas de seda Píntame como diosa Hazme sentir bonita otra vez';
    const words = text.split(' ');
    const randomWord = words[Math.floor(Math.random() * words.length)];
    createFlashingWord(randomWord);

    // Schedule the next word flash at a random time
    const nextFlashInterval = Math.random() * 1000; // Random time between 0 to 1000 milliseconds
    setTimeout(flashRandomWord, nextFlashInterval);
}

// Initializing the process. No end
flashRandomWord();
