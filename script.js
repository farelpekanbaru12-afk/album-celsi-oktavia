/* =========================
   JUMLAH FOTO
========================= */

const totalFoto = 15;


/* =========================
   MUSIK
========================= */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

const musicPlayer =
    document.querySelector(".music-player");


/* =========================
   PLAY / PAUSE
========================= */

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(function() {

                musicButton.textContent = "❚❚";

                musicPlayer.classList.add(
                    "playing"
                );

            })
            .catch(function(error) {

                console.log(
                    "Musik tidak dapat diputar:",
                    error
                );

            });

    } else {

        music.pause();

        musicButton.textContent = "▶";

        musicPlayer.classList.remove(
            "playing"
        );

    }

}


/* =========================
   KALAU LAGU SELESAI
   AKAN LOOP OTOMATIS
========================= */

music.addEventListener(
    "ended",
    function() {

        music.currentTime = 0;

        music.play();

    }
);


/* =========================
   BUAT 15 FOTO
========================= */

function tampilkanFoto() {

    const photoAlbum =
        document.getElementById(
            "photoAlbum"
        );


    photoAlbum.innerHTML = "";


    for (
        let i = 1;
        i <= totalFoto;
        i++
    ) {


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "photo-card";


        card.style.animationDelay =
            `${i * 0.08}s`;


        card.innerHTML = `

            <div class="photo-frame">

                <div class="photo-number">

                    ${i} / ${totalFoto}

                </div>


                <img

                    src="foto/foto (${i}).jpg"

                    alt="Photo ${i}"

                    onclick="openPhoto(
                        this.src,
                        'pretty photo ${i} ♡'
                    )"

                    onerror="
                        this.parentElement
                        .parentElement
                        .style.display='none'
                    "

                >

            </div>


            <p>

                pretty photo ${i} ♡

            </p>

        `;


        photoAlbum.appendChild(card);

    }

}


/* =========================
   BUKA ALBUM
========================= */

function openAlbum() {

    const homePage =
        document.getElementById(
            "homePage"
        );


    const albumPage =
        document.getElementById(
            "albumPage"
        );


    homePage.style.display =
        "none";


    albumPage.style.display =
        "block";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================
   KEMBALI
========================= */

function backHome() {

    const homePage =
        document.getElementById(
            "homePage"
        );


    const albumPage =
        document.getElementById(
            "albumPage"
        );


    albumPage.style.display =
        "none";


    homePage.style.display =
        "flex";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================
   BUKA FOTO BESAR
========================= */

function openPhoto(
    image,
    text
) {

    const modal =
        document.getElementById(
            "modal"
        );


    const modalImage =
        document.getElementById(
            "modalImage"
        );


    const modalText =
        document.getElementById(
            "modalText"
        );


    modalImage.src =
        image;


    modalText.textContent =
        text;


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================
   TUTUP FOTO
========================= */

function closePhoto() {

    const modal =
        document.getElementById(
            "modal"
        );


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "auto";

}


/* =========================
   KLIK LUAR FOTO
========================= */

document
    .getElementById("modal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closePhoto();

            }

        }
    );


/* =========================
   ESC
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closePhoto();

        }

    }
);


/* =========================
   JALANKAN FOTO
========================= */

tampilkanFoto();