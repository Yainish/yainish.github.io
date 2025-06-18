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
        image: "/assets/imgs/pfp.jpg"
        },
        {
        name: "Satori Maiden ~ 3rd eye",
        file: "/assets/audio/satori.mp3",
        image: "/assets/imgs/pfp.jpg"
        }
    ];

    const audio = document.getElementById("audio");
    const title = document.getElementById("cancion_name");
    const image = document.getElementById("cancion_img");
    const random = document.getElementById("cancion_rnd");

    audio.volume = 0.3;

    function playRandomSong() {
        const song = songs[Math.floor(Math.random() * songs.length)];
        audio.src = song.file;
        title.textContent = song.name;
        image.src = song.image;
        audio.play();
    }

    random.addEventListener("click", playRandomSong);