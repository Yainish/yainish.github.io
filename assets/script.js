function blast() {
    document.getElementById("ele").style.display = "none";
    document.getElementById("bla").style.display = "block";
}

function electric() {
    document.getElementById("ele").style.display = "block";
    document.getElementById("bla").style.display = "none";
}

const songs = [
    /* EoSD */
    {
        name: "Locked Girl ~ The Girl's Secret Room",
        file: "https://www.dropbox.com/scl/fi/rtjsnez1g40bhe97mc5wx/09-Locked-Girl-The-Girl-s-Secret-Room.flac?rlkey=ka1xevr2hbp7yjlrlsygvwksk&st=4xz4hm7a&dl=1",
        image: "./assets/imgs/covers/th06.jpg"
    },
    {
        name: "Lunar Clock ~ Luna Dial",
        file: "https://www.dropbox.com/scl/fi/hrx6aay84hbw5o6bqsdgx/11-Lunar-Clock-Luna-Dial.flac?rlkey=fnekp17gd9wyzx848kf5bnkfd&st=cpqve3vy&dl=1",
        image: "./assets/imgs/covers/th06.jpg"
    },
    {
        name: "Septette for a Dead Princess",
        file: "https://www.dropbox.com/scl/fi/tlufoq4tz6f1xw474fodl/13-Septette-for-a-Dead-Princess.flac?rlkey=zdkwk9mlkkspetu272yv35rj1&st=vpzo8bsi&dl=1",
        image: "./assets/imgs/covers/th06.jpg"
    },
    {
        name: "U.N. Owen Was Her",
        file: "https://www.dropbox.com/scl/fi/jxoe2varrypv23pd8q8yt/15-U.N.-Owen-Was-Her.flac?rlkey=71de021f5kvovi0wl8duo8m52&st=6wd2o2ob&dl=1",
        image: "./assets/imgs/covers/th06.jpg"
    },

    /* PCB */
    {
        name: "The Capital City of Flowers in the Sky",
        file: "https://www.dropbox.com/scl/fi/sf8tp44lj5g5yme2gwuhc/08-The-Capital-City-of-Flowers-in-the-Sky.flac?rlkey=y5uh081k21k5carnvp099gug0&st=oofso4rr&dl=1",
        image: "./assets/imgs/covers/th07.jpg"
    },
    {
        name: "Ghostly Band ~ Phantom Ensemble",
        file: "https://www.dropbox.com/scl/fi/hlbzkxvv59n25y5kb94xm/09-Ghostly-Band-Phantom-Ensemble.flac?rlkey=ph60ho3n82fyr6rgykzwdaemr&st=okxnyimu&dl=1",
        image: "./assets/imgs/covers/th07.jpg"
    },
    {
        name: "Hiroari Shoots a Strange Bird ~ Till When",
        file: "https://www.dropbox.com/scl/fi/uk9osz5qbls1f2990x6km/11-Hiroari-Shoots-a-Strange-Bird-Till-When.flac?rlkey=k3mjameahkffew95d8ka9lsvl&st=b0cwgkmb&dl=1",
        image: "./assets/imgs/covers/th07.jpg"
    },
    {
        name: "Bloom Nobly, Ink-Black Cherry Blossom ~ Border of Life",
        file: "https://www.dropbox.com/scl/fi/ugwjgval8luf34nwc1pl4/13-Bloom-Nobly-Ink-Black-Cherry-Blossom-Border-of-Life.flac?rlkey=obd16n4835yd3kjh26mipgzd2&st=d8dbwz8v&dl=1",
        image: "./assets/imgs/covers/th07.jpg"
    },
    {
        name: "Border of Life",
        file: "https://www.dropbox.com/scl/fi/rzujfrmabk1ufjfi6d3tg/14-Border-of-Life.flac?rlkey=6srd1i7gpym3xbnixhv5h2iti&st=kyldvd0l&dl=1",
        image: "./assets/imgs/covers/th07.jpg"
    },
    {
        name: "Necrofantasia",
        file: "https://www.dropbox.com/scl/fi/1g5nx5abhc9sgz37uuwdo/18-Necrofantasia.flac?rlkey=xnpzm1cf1xmpubpcnyc4jmdrl&st=1wvq4yqm&dl=1",
        image: "./assets/imgs/covers/th07.jpg"
    },

    /* IN */
    {
        name: "Love-Colored Master Spark",
        file: "https://www.dropbox.com/scl/fi/nwzza56w4o5byx4fcjms5/10-Love-Colored-Master-Spark.flac?rlkey=5p2wz4lr2mgnnx4h9xve1n8hm&st=rdkxwusx&dl=1",
        image: "./assets/imgs/covers/th08.jpg"
    },
    {
        name: "Cinderella Cage ~ Kagome-Kagome",
        file: "https://www.dropbox.com/scl/fi/5xbbx1jiycnq28x9x9b30/11-Cinderella-Cage-Kagome-Kagome.flac?rlkey=3j354ab1d9qg8yyvkfdtv1oxu&st=lfx9gp1j&dl=1",
        image: "./assets/imgs/covers/th08.jpg"
    },
    {
        name: "Lunatic Eyes ~ Invisible Full Moon",
        file: "https://www.dropbox.com/scl/fi/mop1xuywzjn2t4it6dydq/12-Lunatic-Eyes-Invisible-Full-Moon.flac?rlkey=khyx4w9wqzkje1b2wvxodl7hh&st=rp54zkfs&dl=1",
        image: "./assets/imgs/covers/th08.jpg"
    },

    /* PoFV */
    {
        name: "Flowering Night",
        file: "https://www.dropbox.com/scl/fi/ak5tdjxnjexlff5e88pe5/04-Flowering-Night.flac?rlkey=g2drakvvn0t3l7d53jba8eje6&st=aa7yw00d&dl=1",
        image: "./assets/imgs/covers/th09.jpg"
    },

    /* MoF */
    {
        name: "Faith Is for the Transient People",
        file: "https://www.dropbox.com/scl/fi/yo5mup5kk2wuntu70jgco/11-Faith-Is-for-the-Transient-People.flac?rlkey=y75gn45qq2dpngqe1ilqs11ax&st=33bn3bxn&dl=1",
        image: "./assets/imgs/covers/th10.jpg"
    },
    {
        name: "The Venerable Ancient Battlefield ~ Suwa Foughten Field",
        file: "https://www.dropbox.com/scl/fi/op8tt3rsr464e843r27jm/13-The-Venerable-Ancient-Battlefield-Suwa-Foughten-Field.flac?rlkey=mqqvfq15nivhfhioe6d1gu6jt&st=sqhi4ldw&dl=1",
        image: "./assets/imgs/covers/th10.jpg"
    },
    {
        name: "Tomorrow Will Be Special, Yesterday Was Not",
        file: "https://www.dropbox.com/scl/fi/6ila6f9029m9wkyyp71e2/14-Tomorrow-Will-Be-Special-Yesterday-Was-Not.flac?rlkey=migv4qy15pj1kmfk0c3celfsk&st=a7754r0o&dl=1",
        image: "./assets/imgs/covers/th10.jpg"
    },
    {
        name: "Native Faith",
        file: "https://www.dropbox.com/scl/fi/zregopbc993wi58lb54sf/15-Native-Faith.flac?rlkey=pefmhxwcqprx2gwy3uy6of2nf&st=i6ngftq0&dl=1",
        image: "./assets/imgs/covers/th10.jpg"
    },

    /* SA */
    {
        name: "Satori Maiden ~ 3rd eye",
        file: "https://www.dropbox.com/scl/fi/i7vk4b38fv4rawgrkzbez/09-Satori-Maiden-3rd-eye.flac?rlkey=htgurm0cpkatdd1iughdqtc6u&st=errogi2j&dl=1",
        image: "./assets/imgs/covers/th11.jpg"
    },
    {
        name: "Lullaby of Deserted Hell",
        file: "https://www.dropbox.com/scl/fi/dl4ia1aynbdjkpgdat5gi/10-Lullaby-of-Deserted-Hell.flac?rlkey=vfl7n6yaw748woxog32hgkzqr&st=81ki2rm8&dl=1",
        image: "./assets/imgs/covers/th11.jpg"
    },
    {
        name: "Corpse Voyage ~ Be of good cheer!",
        file: "https://www.dropbox.com/scl/fi/3dl1oi77gucl0ynblmzrg/11-Corpse-Voyage-Be-of-good-cheer.flac?rlkey=2t0ik48yuprozgoa2fi53twwl&st=ufnfpiz0&dl=1",
        image: "./assets/imgs/covers/th11.jpg"
    },
    {
        name: "Solar Sect of Mystic Wisdom ~ Nuclear Fusion",
        file: "https://www.dropbox.com/scl/fi/p7in301clhgbcu0bpup5m/13-Solar-Sect-of-Mystic-Wisdom-Nuclear-Fusion.flac?rlkey=38wum9gs6xfbeq0fib2ayk23t&st=duyu87wr&dl=1",
        image: "./assets/imgs/covers/th11.jpg"
    },
    {
        name: "Hartmann's Youkai Girl",
        file: "https://www.dropbox.com/scl/fi/6i7eotml9vtr1rq9wv7jv/15-Hartmann-s-Youkai-Girl.flac?rlkey=xefqo25o5yywyztkrx6ptbkik&st=5sk64j8r&dl=1",
        image: "./assets/imgs/covers/th11.jpg"
    },

    /* UFO */
    {
        name: "The Traditional Old Man and the Stylish Girl",
        file: "https://www.dropbox.com/scl/fi/6xsa016oopuxniweb3tzz/07-The-Traditional-Old-Man-and-the-Stylish-Girl.flac?rlkey=j4sjsubr9q7nhi6evbduxwpb2&st=ege3v03b&dl=1",
        image: "./assets/imgs/covers/th12.jpg"
    },
    {
        name: "Interdimensional Voyage of a Ghostly Passenger Ship",
        file: "https://www.dropbox.com/scl/fi/fdx2sy52nwio9uql1vuce/08-Interdimensional-Voyage-of-a-Ghostly-Passenger-Ship.flac?rlkey=wlu1lhfclchzl2l7h1gjvgfps&st=l95xqczb&dl=1",
        image: "./assets/imgs/covers/th12.jpg"
    },
    {
        name: "Captain Murasa",
        file: "https://www.dropbox.com/scl/fi/yu5q0byhj0d75iv23osyj/09-Captain-Murasa.flac?rlkey=c8239une8o6c3h53zifishs7s&st=b61r3gdg&dl=1",
        image: "./assets/imgs/covers/th12.jpg"
    },
    {
        name: "The Tiger-Patterned Bishamonten",
        file: "https://www.dropbox.com/scl/fi/4z30nr0v4brcpvnda8zxb/11-The-Tiger-Patterned-Bishamonten.flac?rlkey=a3du70inl2ji0sn3n04luvpny&st=3jleglaf&dl=1",
        image: "./assets/imgs/covers/th12.jpg"
    },
    {
        name: "Emotional Skyscraper ~ Cosmic Mind",
        file: "https://www.dropbox.com/scl/fi/srnjk3l5v83ptja0oyddr/13-Emotional-Skyscraper-Cosmic-Mind.flac?rlkey=2al7gmq1tkf0sayf1xddql3l0&st=be4svx7f&dl=1",
        image: "./assets/imgs/covers/th12.jpg"
    },
    {
        name: "Heian Alien",
        file: "https://www.dropbox.com/scl/fi/dbjea1yjrqfzh0hj82u52/15-Heian-Alien.flac?rlkey=pgbwuozgj1f7rn9fxyqwcvpvo&st=zz4jfpqj&dl=1",
        image: "./assets/imgs/covers/th12.jpg"
    },

    /* TD */
    {
        name: "Ghost Lead",
        file: "https://www.dropbox.com/scl/fi/vkf4c09td6tdkdfsw9iy7/04-Ghost-Lead.flac?rlkey=dmyf767bnqpf13h1tov38wbxt&st=rolpka9k&dl=1",
        image: "./assets/imgs/covers/th13.jpg"
    },
    {
        name: "Let's Live in a Lovely Cemetery",
        file: "https://www.dropbox.com/scl/fi/37ebks187x0rksf2up137/10-Let-s-Live-in-a-Lovely-Cemetery.flac?rlkey=aykquvpozyfb4q307oleueabb&st=7uwuihak&dl=1",
        image: "./assets/imgs/covers/th13.jpg"
    },
    {
        name: "Rigid Paradise",
        file: "https://www.dropbox.com/scl/fi/2wx8gnxoh5vec2vhfauog/12-Rigid-Paradise.flac?rlkey=hl6yvrv4lljgewcpxe1xlhbab&st=ag1enj3f&dl=1",
        image: "./assets/imgs/covers/th13.jpg"
    },

    /* DDC */
    {
        name: "Dullahan Under the Willows",
        file: "https://www.dropbox.com/scl/fi/qnzzrfci0rzhyvadnff9e/05-Dullahan-Under-the-Willows.flac?rlkey=9xds6a7oe386d3sr1n4jt3mh3&st=f2b6hnhw&dl=1",
        image: "./assets/imgs/covers/th14.jpg"
    },
    {
        name: "Lonesome Werewolf",
        file: "https://www.dropbox.com/scl/fi/37jb6stq3mseoa8pyj3nn/07-Lonesome-Werewolf.flac?rlkey=we2lg9q01e8zsgm8ff6cgw6sq&st=87ns38io&dl=1",
        image: "./assets/imgs/covers/th14.jpg"
    },
    {
        name: "Illusionary Joururi",
        file: "https://www.dropbox.com/scl/fi/3o0hf77boclaldxeridvx/09-Illusionary-Joururi.flac?rlkey=uhy2qo2qclehkrqp6b3nuxykk&st=vu7t96ht&dl=1",
        image: "./assets/imgs/covers/th14.jpg"
    },
    {
        name: "The Shining Needle Castle Sinking in the Air",
        file: "https://www.dropbox.com/scl/fi/r4f7yv92cai7yfzhv7v6x/10-The-Shining-Needle-Castle-Sinking-in-the-Air.flac?rlkey=q4kpcbg3jv1mippmdoyd0zjo8&st=r4k6w79b&dl=1",
        image: "./assets/imgs/covers/th14.jpg"
    },
    {
        name: "Reverse Ideology",
        file: "https://www.dropbox.com/scl/fi/ikqeplldfdjf99c6thvrf/11-Reverse-Ideology.flac?rlkey=byov2i20utvwe9fw78od295ix&st=v2grger6&dl=1",
        image: "./assets/imgs/covers/th14.jpg"
    },
    {
        name: "The Exaggerated Castle Keep",
        file: "https://www.dropbox.com/scl/fi/ctqy83p3uoyw1vyf88va9/12-The-Exaggerated-Castle-Keep.flac?rlkey=lfb2vu9pyrn1fdy8hbebglek7&st=b1bems5f&dl=1",
        image: "./assets/imgs/covers/th14.jpg"
    },
    {
        name: "Inchlings of the Shining Needle ~ Little Princess",
        file: "https://www.dropbox.com/scl/fi/dv11gz53jp5h0zvso61pk/13-Inchlings-of-the-Shining-Needle-Little-Princess.flac?rlkey=r9jc224f7jslatr90vjtea6x9&st=886h6trp&dl=1",
        image: "./assets/imgs/covers/th14.jpg"
    },

    /* LoLK */
    {
        name: "Eternal Spring Dream",
        file: "https://www.dropbox.com/scl/fi/78vj1v1c8s4gk1atfpjew/07-Eternal-Spring-Dream.flac?rlkey=u4y41nqcn9eaydb8sn1o9plil&st=3qxpadtl&dl=1",
        image: "./assets/imgs/covers/th15.jpg"
    },
    {
        name: "The Reversed Wheel of Fortune",
        file: "https://www.dropbox.com/scl/fi/4q3api1r1n9hhtdcy68k4/09-The-Reversed-Wheel-of-Fortune.flac?rlkey=xngtt60rco0yymc19vudq3uw2&st=js3ucnxw&dl=1",
        image: "./assets/imgs/covers/th15.jpg"
    },
    {
        name: "Faraway Voyage of 380,000 Kilometers",
        file: "https://www.dropbox.com/scl/fi/sdek93bm5pfv1bqqlj1ii/10-Faraway-Voyage-of-380-000-Kilometers.flac?rlkey=domwqs8p6t9byosb5ssagh5ds&st=te9q4mc0&dl=1",
        image: "./assets/imgs/covers/th15.jpg"
    },
    {
        name: "The Pierrot of the Star-Spangled Banner",
        file: "https://www.dropbox.com/scl/fi/d3rdvfpfftl8efy1ksx4x/11-The-Pierrot-of-the-Star-Spangled-Banner.flac?rlkey=9q91wgokqigwxl6i89jixqsw9&st=10mxskyz&dl=1",
        image: "./assets/imgs/covers/th15.jpg"
    },
    {
        name: "Pure Furies ~ Whereabouts of the Heart",
        file: "https://www.dropbox.com/scl/fi/p0mu40adfqw0rgdywrhqd/13-Pure-Furies-Whereabouts-of-the-Heart.flac?rlkey=f8bnxez0d6gcus28tbzy8ctqh&st=y6pootra&dl=1",
        image: "./assets/imgs/covers/th15.jpg"
    },
    {
        name: "A World of Nightmares Never Seen Before",
        file: "https://www.dropbox.com/scl/fi/67csufo114at3su5ffhby/14-A-World-of-Nightmares-Never-Seen-Before.flac?rlkey=xxnorcodfhcp1aqreg6poku08&st=qww5luk9&dl=1",
        image: "./assets/imgs/covers/th15.jpg"
    },
    {
        name: "Pandemonic Planet",
        file: "https://www.dropbox.com/scl/fi/vdvy3m1qy3my5wjbdhqac/15-Pandemonic-Planet.flac?rlkey=qewvbvuq9zi0295dfesc5i2qo&st=c1s91eln&dl=1",
        image: "./assets/imgs/covers/th15.jpg"
    },

    /* DiPP */
    {
        name: "Shanghai Alice of Meiji 17",
        file: "https://www.dropbox.com/scl/fi/n60i02v61gxbu6vqqgdtk/04..flac?rlkey=hdy3lf3uawm5e7u7zabj9oxnr&st=e2vcay1o&dl=1",
        image: "./assets/imgs/covers/zmc01.jpg"
    },
    {
        name: "Witch of Love Potion",
        file: "https://www.dropbox.com/scl/fi/hcd1ew2ai7gah51ne2z7t/09.-Witch-of-Love-Potion.flac?rlkey=8nsq8dhbk8u4uxwdyc4h8euez&st=ztoz2fup&dl=1",
        image: "./assets/imgs/covers/zmc01.jpg"
    },

    /* GFC */
    {
        name: "Eastern Mystical Dream ~ Ancient Temple",
        file: "https://www.dropbox.com/scl/fi/63oduhzqpvr46l9dlhyth/03.-Ancient-Temple.flac?rlkey=u0bbji4td5fkqf2n6nlkl6fmn&st=g9g9joa8&dl=1",
        image: "./assets/imgs/covers/zmc02.jpg"
    },
    {
        name: "A Maiden's Illusionary Funeral ~ Necro-Fantasy",
        file: "https://www.dropbox.com/scl/fi/zcqi5ovwz6jpjug7ynuij/10.-Necro-Fantasy.flac?rlkey=6caugcce1qrdaqd57t2xphwe3&st=oe4robc1&dl=1",
        image: "./assets/imgs/covers/zmc02.jpg"
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

        setTimeout(() => {
            grid1.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
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

        setTimeout(() => {
            grid2.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
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