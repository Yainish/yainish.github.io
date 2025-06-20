function blast() {
    document.getElementById("ele").style.display = "none";
    document.getElementById("bla").style.display = "block";
}

function electric() {
    document.getElementById("ele").style.display = "block";
    document.getElementById("bla").style.display = "none";
}

const songs = [
    {
    name: "Shanghai Alice of Meiji 17",
    file: "/assets/audio/alice.mp3",
    image: "/assets/imgs/zmc1.jpg"
    },
    {
    name: "Satori Maiden ~ 3rd eye",
    file: "/assets/audio/satori.mp3",
    image: "/assets/imgs/th11.jpg"
    }
];

const audio = document.getElementById("audio");
const title = document.getElementById("cancion_name");
const image = document.getElementById("cancion_img");

const play = document.getElementById("play");
const pause = document.getElementById("pause");

audio.volume = 0.1;

let previousSong = "";

function cancion_random() {
    let song = songs[Math.floor(Math.random() * songs.length)];
    while (song === previousSong)
        song = songs[Math.floor(Math.random() * songs.length)];
    previousSong = song;
    audio.src = song.file;
    title.textContent = song.name;
    image.src = song.image;
    audio.play();
    //display_pause();
}

function display_play() {
    play.style.display = "flex";
    pause.style.display = "none";

    document.getElementById("arisu_off").style.display = "flex";
    document.getElementById("arisu_on").style.display = "none";

    document.getElementById("toki_off").style.display = "flex";
    document.getElementById("toki_on").style.display = "none";
}

function display_pause() {
    play.style.display = "none";
    pause.style.display = "flex";

    document.getElementById("arisu_off").style.display = "none";
    document.getElementById("arisu_on").style.display = "flex";

    document.getElementById("toki_off").style.display = "none";
    document.getElementById("toki_on").style.display = "flex";
}

function cancion_play() {
    if (audio.src) {
        audio.play();
        //display_pause();
    }
    else
        cancion_random();
}

function cancion_pause() {
    audio.pause();
    //display_play();
}

function cancion_stop() {
    audio.pause();
    display_play();
    audio.removeAttribute('src');
    title.textContent = "Koishi's Music Player";
    image.src = "/assets/imgs/koishi.png";
    previousSong = "";
}

audio.addEventListener("play", display_pause);
audio.addEventListener("pause", display_play);
audio.addEventListener("ended", cancion_random);

function grid1_switch() {
    const grid = document.getElementById("grid1");
    if (window.getComputedStyle(grid).display === "none") {
        grid.style.display = "grid";
        //disable other grids
    }
    else
        grid.style.display = "none";
}


function xmur3(str) {
    for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}

function mulberry32(seed) {
    return function () {
        seed |= 0;
        seed = (seed + 0x6d2b79f5) | 0;
        var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function toKatakana(hiragana) {
    let katakana = ''
    for (let i = 0; i < hiragana.length; i++) {
        if (hiragana[i] === ',' || hiragana[i] === ' ')
            katakana += hiragana[i];
        else
            katakana += String.fromCharCode(hiragana[i].charCodeAt(0)+96)
    }
    return katakana;
}

const today = new Date().toLocaleDateString().split('T')[0];
const seed = xmur3(today);
const rand = mulberry32(seed());

fetch('/assets/kanji.json')
    .then(res => res.json())
    .then(data => {
    const keys = Object.keys(data);
    const index = Math.floor(rand() * keys.length);
    const kanjiChar = keys[index];
    const kanjiData = data[kanjiChar];

    document.getElementById("kanji").innerText = kanjiChar;
    if (!(kanjiData.meanings.length === 0))
        document.getElementById("meaning").innerText = "Meaning: " + kanjiData.meanings.join(", ");
    if (!(kanjiData.readings_on.length === 0))
        document.getElementById("onyomi").innerText = "Onyomi: " + toKatakana(kanjiData.readings_on.join(", "));
    if (!(kanjiData.readings_kun.length === 0))
        document.getElementById("kunyomi").innerText = "Kunyomi: " + kanjiData.readings_kun.join(", ");
});