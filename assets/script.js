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

function cancion_random() {
    const song = songs[Math.floor(Math.random() * songs.length)];
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
}

function display_pause() {
    play.style.display = "none";
    pause.style.display = "flex";

    document.getElementById("arisu_off").style.display = "none";
    document.getElementById("arisu_on").style.display = "flex";
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

audio.addEventListener("play", display_pause);

audio.addEventListener("pause", display_play);