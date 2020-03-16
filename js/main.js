let movie = document.querySelector('.movie'),
    tv = document.querySelector('.tv'),
    song = document.querySelector('.song'),
    controls = document.querySelector('.controls');

movie.removeAttribute('controls');
tv.removeAttribute('controls');
song.removeAttribute('controls');
controls.style.display = 'block';

var vm = new Vue({

el: "#app",

data: {
    transcript: {
        view: false
    },

    movie: {
        paused: false,
        muted: false
    },
},

methods: {
    playPauseMovie() {
        //movie.play();
        if(document.querySelector('.movie').paused){
            document.querySelector('.movie').play();
            this.movie.paused = !(this.movie.paused);
            //document.querySelector('.play').classList.remove('fa-play');
            //document.querySelector('.play').classList.add('fa-pause');
        }
        else {
            document.querySelector('.movie').pause();
            this.movie.paused = !(this.movie.paused);
            //document.querySelector('.play').classList.add('fa-play');
            //document.querySelector('.play').classList.remove('fa-pause');
        }
        
    },

    stopMovie() {
        document.querySelector('.movie').pause();
        document.querySelector('.movie').currentTime = 0;
        this.movie.paused = false;
        //document.querySelector('.play').classList.add('fa-play');
        //document.querySelector('.play').classList.remove('fa-pause');
    },

    muteMovie() {
        document.querySelector('.movie').muted = !(document.querySelector('.movie').muted);
        this.movie.muted = !(this.movie.muted);
        //document.querySelector('.play').classList.add('fa-play');
        //document.querySelector('.play').classList.remove('fa-pause');
    },

    viewTranscript() {
        this.transcript.view = (this.transcript.view) ? false : true;
    }
}
});
