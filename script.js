document.addEventListener("DOMContentLoaded", function() {
    const musicData = [
        {
            "name": "Canon in D",
            "url": "http://www.archive.org/download/CanonInD_261/CanoninD.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Artist 5",
            "url": "https://www.script-tutorials.com/demos/363/data/05.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Nightmare Side",
            "url": "https://www.dropbox.com/s/6pays95q2a9jrsf/2020.01.02.mp3?dl=1",
            "cover": "./new.jpg"
        },
        {
            "name": "Angklung Preman Pensiun",
            "url": "https://www.dropbox.com/s/k011ag91uktonbv/Angklung%20Preman%20Pensiun.mp3?dl=1",
            "cover": "./new.jpg"
        },
        {
            "name": "Canon Rock (JerryC)",
            "url": "https://www.dropbox.com/s/prgte33m86n9ce7/Canon%20Rock%20%28JerryC%29%20-%20funtwo.mp3?dl=1",
            "cover": "./new.jpg"
        },
        {
            "name": "105.9 FM Ardan Radio",
            "url": "http://listento.ardanradio.com:1059/",
            "cover": "./new.jpg"
        },
        {
            "name": "Jailhouse Rock",
            "url": "https://archive.org/download/78_jailhouse-rock_elvis-presley-jerry-leiber-mike-stoller_gbia0080595b/Jailhouse%20Rock%20-%20Elvis%20Presley%20-%20Jerry%20Leiber-restored.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Smooth Criminal",
            "url": "https://archive.org/download/J._Period_and_Michael_Jackson_-_Man_Or_The_Music-2010/17%20Smooth%20Criminal.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Y.M.C.A",
            "url": "https://archive.org/download/OldPop_256/VillagePeople-Y.m.c.a.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Johnny B. Goode",
            "url": "https://archive.org/download/chuckberryjohnnyb.goode/Chuck%20Berry%20-%20Johnny%20B.%20Goode.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "House of the Rising Sun",
            "url": "https://archive.org/download/AnimalsTheHouseOfTheRisingSun_201811/Animals%20-%20The%20House%20Of%20The%20Rising%20Sun.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Don't Stop Me Now",
            "url": "https://archive.org/download/DontStopMeNow_255/Queen-DontStopMeNow.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Never Gonna Give You Up",
            "url": "https://archive.org/download/NeverGonnaGiveYouUpOriginal/Never%20Gonna%20Give%20You%20Up%20Original.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Sweet Child O' Mine",
            "url": "https://archive.org/download/gunsnrosessweetchildomine_202003/Guns%20N%27%20Roses%20-%20Sweet%20Child%20%27O%20Mine.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "The Final Countdown",
            "url": "https://archive.org/download/01.TheFinalCountdown/01.%20The%20Final%20Countdown.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "My Heart Will Go On",
            "url": "https://archive.org/download/1MyHeartWillGoOnLoveThemeFromTitanic/1%20-%20My%20Heart%20Will%20Go%20On%20%28Love%20Theme%20from%20_Titanic_%29.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Imagine",
            "url": "https://archive.org/download/tntvillage_323140/John%20Lennon%20-%20Imagine/01%20Imagine.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Hey Jude",
            "url": "https://archive.org/download/TheBeatles1970HeyJudeAppleRecords6e062.0434807HeyJude/The%20Beatles%20-%201970%20-%20Hey%20Jude%20%28Apple%20Records%3B%20%236e%20062.04348%29_07%20-%20Hey%20Jude.mp3",
            "cover": "./new.jpg"
        },
        {
            "name": "Take Me Home, Country Roads",
            "url": "https://archive.org/download/TakeMeHomeCountryRoad/JohnDenver-TakeMeHomeCountryRoad.mp3",
            "cover": "./new.jpg"
        }
    ];
    const favSongs=[
        [
            {
                "name": "ringtone",
                "url": "./favMusic/file1.mp3",
                "cover": "./new.jpg"
            },
            {
                "name": "saripotha sanivaram",
                "url": "./favMusic/file2.mp3",
                "cover": "./new.jpg"
            },
            {
                "name": "hi nanna",
                "url": "./favMusic/file3.mp3",
                "cover": "./new.jpg"
            },
            {
                "name": "jersey",
                "url": "./favMusic/file4.mp3",
                "cover": "./new.jpg"
            },
            {
                "name": "hi nanna",
                "url": "./favMusic/file5.mp3",
                "cover": "./new.jpg"
            },
            {
                "name": "sita ramam",
                "url": "./favMusic/file6.mp3",
                "cover": "./new.jpg"
            },
            {
                "name": "salaar",
                "url": "./favMusic/file7.mp3",
                "cover": "./new.jpg"
            },
            {
                "name": "hi nanna",
                "url": "./favMusic/file8.mp3",
                "cover": "./new.jpg"
            },
            {
                "name": "salaar",
                "url": "./favMusic/file9.mp3",
                "cover": "./new.jpg"
            },
            {
                "name": "ringtone",
                "url": "./favMusic/file10.mp3",
                "cover": "./new.jpg"
            }
        ]
        
    ];

    function createMusicCard(song, index) {
        const card = document.createElement('div');
        card.classList.add('music-card');
        card.dataset.index = index;
    
        const cardInner = document.createElement('div');
        cardInner.classList.add('music-card-inner');
    
        const img = document.createElement('img');
        img.src = song.cover;
        img.alt = song.name;
    
        const title = document.createElement('h6');
        title.textContent = song.name;
    
        // Create the play button
        const playButton = document.createElement('i');
        playButton.classList.add('fas', 'fa-play', 'play-button');
    
        // Add click event listener to the image
        img.addEventListener('click', () => {
            playSong(index);
        });
    
        cardInner.appendChild(img);
        cardInner.appendChild(playButton);
        cardInner.appendChild(title);
        card.appendChild(cardInner);
    
        return card;
    }

    
    x
    function loadMusicCards() {
        const container = document.getElementById('music-container');
        musicData.forEach(song => {
            const card = createMusicCard(song);
            container.appendChild(card);
        });
    }

    loadMusicCards();
});

// music player
document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');
    const volumeControl = document.getElementById('volume-control');
    let isPlaying = false;

    playPauseButton.addEventListener('click', function() {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    audioPlayer.addEventListener('timeupdate', function() {
        const currentTime = Math.floor(audioPlayer.currentTime);
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        currentTimeElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });

    audioPlayer.addEventListener('loadedmetadata', function() {
        const duration = Math.floor(audioPlayer.duration);
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        durationElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });

    volumeControl.addEventListener('click', function() {
        if (audioPlayer.muted) {
            audioPlayer.muted = false;
            volumeControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            audioPlayer.muted = true;
            volumeControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
});
