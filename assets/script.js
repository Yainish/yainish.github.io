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
    file: "./assets/audio/alice.mp3",
    image: "./assets/imgs/zmc1.jpg"
    },
    {
    name: "Satori Maiden ~ 3rd eye",
    file: "./assets/audio/satori.mp3",
    image: "./assets/imgs/th11.jpg"
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
    title.textContent = "Hecatia's Music Player";
    image.src = "./assets/imgs/hecatia.jpg";
    previousSong = "";
}

audio.addEventListener("play", display_pause);
audio.addEventListener("pause", display_play);
audio.addEventListener("ended", cancion_random);

const grid1 = document.getElementById("grid1");
const grid2 = document.getElementById("grid2");

const grid3 = document.getElementById("grid3");
const grid3_2 = document.getElementById("grid3_2");
const grid3_3 = document.getElementById("grid3_3");

const grid4 = document.getElementById("grid4");
const grid4_2 = document.getElementById("grid4_2");
const grid4_3 = document.getElementById("grid4_3");
const grid4_4 = document.getElementById("grid4_4");
const grid4_5 = document.getElementById("grid4_5");

const grid5 = document.getElementById("grid5");
const grid5_2 = document.getElementById("grid5_2");
const grid5_3 = document.getElementById("grid5_3");
const grid5_4 = document.getElementById("grid5_4");
const grid5_5 = document.getElementById("grid5_5");

const grid6 = document.getElementById("grid6");
const grid6_2 = document.getElementById("grid6_2");
const grid6_3 = document.getElementById("grid6_3");
const grid6_4 = document.getElementById("grid6_4");

const grid7 = document.getElementById("grid7");

const gr1_bl2 = document.getElementById("gr1_bl2");
const gr1_bl3 = document.getElementById("gr1_bl3");

const gr1_bl2_2 = document.getElementById("gr1_bl2_2");
const gr1_bl3_2 = document.getElementById("gr1_bl3_2");

gr1_bl2.classList.add("display");
gr1_bl3.classList.add("display");

function grid1_switch() {
    if (!(grid1.classList.contains("display"))) {
        gr1_bl2.classList.add("display");
        gr1_bl3.classList.add("display");

        grid1.classList.add("display");
        grid2.classList.remove("display");

        grid7.classList.remove("display");
    }
    else {
        grid3.classList.remove("display");
        grid3_2.classList.remove("display");
        grid3_3.classList.remove("display");
        grid4.classList.remove("display");
        grid4_2.classList.remove("display");
        grid4_3.classList.remove("display");
        grid4_4.classList.remove("display");
        grid4_5.classList.remove("display");

        grid1.classList.remove("display");

        gr1_bl2_2.classList.remove("display");
        gr1_bl3_2.classList.remove("display");

        gr1_bl2.classList.remove("display");
        gr1_bl3.classList.remove("display");

        grid5.classList.remove("display");
        grid5_2.classList.remove("display");
        grid5_3.classList.remove("display");
        grid5_4.classList.remove("display");
        grid5_5.classList.remove("display");
        grid6.classList.remove("display");
        grid6_2.classList.remove("display");
        grid6_3.classList.remove("display");
        grid6_4.classList.remove("display");
    }
    
    /*grid.classList.toggle("display");*/

    /*if (window.getComputedStyle(grid).display === "none") {
        grid.style.display = "grid";
        //disable other grids
    }
    else
        grid.style.display = "none";*/
}

function grid2_switch() {
    if (!(grid2.classList.contains("display"))) {
        grid3.classList.remove("display");
        grid3_2.classList.remove("display");
        grid3_3.classList.remove("display");
        grid4.classList.remove("display");
        grid4_2.classList.remove("display");
        grid4_3.classList.remove("display");
        grid4_4.classList.remove("display");
        grid4_5.classList.remove("display");
        
        grid2.classList.add("display");
        grid1.classList.remove("display");
        gr1_bl2_2.classList.remove("display");
        gr1_bl3_2.classList.remove("display");

        grid5.classList.remove("display");
        grid5_2.classList.remove("display");
        grid5_3.classList.remove("display");
        grid5_4.classList.remove("display");
        grid5_5.classList.remove("display");
        grid6.classList.remove("display");
        grid6_2.classList.remove("display");
        grid6_3.classList.remove("display");
        grid6_4.classList.remove("display");
    }
    else {
        grid2.classList.remove("display");
        grid7.classList.remove("display");
    }
}

function games_switch() {
    if (gr1_bl2.classList.contains("display")) {
        gr1_bl2.classList.remove("display");
        gr1_bl3.classList.remove("display");
        gr1_bl2_2.classList.add("display");
        gr1_bl3_2.classList.add("display");

        grid5.classList.remove("display");
        grid5_2.classList.remove("display");
        grid5_3.classList.remove("display");
        grid5_4.classList.remove("display");
        grid5_5.classList.remove("display");
        grid6.classList.remove("display");
        grid6_2.classList.remove("display");
        grid6_3.classList.remove("display");
        grid6_4.classList.remove("display");
    }
    else {
        grid3.classList.remove("display");
        grid3_2.classList.remove("display");
        grid3_3.classList.remove("display");
        grid4.classList.remove("display");
        grid4_2.classList.remove("display");
        grid4_3.classList.remove("display");
        grid4_4.classList.remove("display");
        grid4_5.classList.remove("display");

        gr1_bl2_2.classList.remove("display");
        gr1_bl3_2.classList.remove("display");
        gr1_bl2.classList.add("display");
        gr1_bl3.classList.add("display");
    }
}

function grid3_switch() {
    if (!(grid3.classList.contains("display"))) {
        grid3.classList.add("display");
        grid3_2.classList.add("display");
        grid3_3.classList.add("display");
        grid4.classList.remove("display");
        grid4_2.classList.remove("display");
        grid4_3.classList.remove("display");
        grid4_4.classList.remove("display");
        grid4_5.classList.remove("display");
    }
    else {
        grid3.classList.remove("display");
        grid3_2.classList.remove("display");
        grid3_3.classList.remove("display");
    }
}

function grid4_switch() {
    if (!(grid4.classList.contains("display"))) {
        grid4.classList.add("display");
        grid4_2.classList.add("display");
        grid4_3.classList.add("display");
        grid4_4.classList.add("display");
        grid4_5.classList.add("display");
        grid3.classList.remove("display");
        grid3_2.classList.remove("display");
        grid3_3.classList.remove("display");
    }
    else {
        grid4.classList.remove("display");
        grid4_2.classList.remove("display");
        grid4_3.classList.remove("display");
        grid4_4.classList.remove("display");
        grid4_5.classList.remove("display");
    }
}

function grid5_switch() {
    if (!(grid5.classList.contains("display"))) {
        grid5.classList.add("display");
        grid5_2.classList.add("display");
        grid5_3.classList.add("display");
        grid5_4.classList.add("display");
        grid5_5.classList.add("display");
        grid6.classList.remove("display");
        grid6_2.classList.remove("display");
        grid6_3.classList.remove("display");
        grid6_4.classList.remove("display");
    }
    else {
        grid5.classList.remove("display");
        grid5_2.classList.remove("display");
        grid5_3.classList.remove("display");
        grid5_4.classList.remove("display");
        grid5_5.classList.remove("display");
    }
}

function grid6_switch() {
    if (!(grid6.classList.contains("display"))) {
        grid6.classList.add("display");
        grid6_2.classList.add("display");
        grid6_3.classList.add("display");
        grid6_4.classList.add("display");
        grid5.classList.remove("display");
        grid5_2.classList.remove("display");
        grid5_3.classList.remove("display");
        grid5_4.classList.remove("display");
        grid5_5.classList.remove("display");
    }
    else {
        grid6.classList.remove("display");
        grid6_2.classList.remove("display");
        grid6_3.classList.remove("display");
        grid6_4.classList.remove("display");
    }
}

function grid7_switch() {
    if (!(grid7.classList.contains("display"))) {
        grid7.classList.add("display");
    }
    else {
        grid7.classList.remove("display");
    }
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

fetch('./assets/kanji.json')
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