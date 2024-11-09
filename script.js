const player = document.querySelector('.player');
const lyricsDisplay = document.querySelector('.lyrics-display');
const lyricsText = document.querySelector('.lyrics').textContent.trim().split('\n');

let syncData = [];

lyricsText.map((line) => {
    const [time, text] = line.trim().split('|');
    syncData.push({'start': parseFloat(time.trim()), 'text': text.trim()});
});

player.addEventListener('timeupdate', () => {
    syncData.forEach((item) => {
        if (player.currentTime >= item.start) {
            lyricsDisplay.innerText = item.text;
        }
    });
});
