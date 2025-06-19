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
        image: "/assets/imgs/alice.jpg"
        },
        {
        name: "Satori Maiden ~ 3rd eye",
        file: "/assets/audio/satori.mp3",
        image: "/assets/imgs/satori.jpg"
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
        play.style.display = "none";
        pause.style.display = "flex";
    }

    function cancion_play() {
        if (audio.src) {
            audio.play();
            play.style.display = "none";
            pause.style.display = "flex";
        }
        else
            cancion_random();
    }

    function cancion_pause() {
        audio.pause();
        pause.style.display = "none";
        play.style.display = "flex";
    }

    image.addEventListener("click", cancion_random);
    play.addEventListener("click", cancion_play);
    pause.addEventListener("click", cancion_pause);