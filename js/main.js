
var vm = new Vue({

el: "#app",

props: {
    src: String
},

data: {
    player: false,

    transcript: {
        view: false
    },

    media: {
        paused: false,
        muted: false,
        active: false,
        type: "",
        name: "",
        src: ""
    },

    video: false,

    audio: false
},

methods: {
    toggleCaptions() {
        let tt = (document.querySelector('.media')).textTracks;
        for(var i=0; i < tt.length; i++) {
            if(tt[i].mode === "disabled") {
                tt[i].mode = "showing";
            }
            else {
                tt[i].mode = "disabled";
            }   
        }
    },

    setSrc1() {
        this.player = true;
        this.media.active = true;
        this.video = true;
        this.audio = false,
        this.media.paused = false;
        this.media.type = "Movies";
        this.media.name = "Sound of Music";
        this.media.src = "sound_of_music";
        document.querySelector('.media').load();
        this.transcript.view = false;
    },

    setSrc2() {
        this.player = true;
        this.media.active = true;
        this.video = true;
        this.audio = false,
        this.media.paused = false;
        this.media.type = "TV";
        this.media.name = "Seinfeld";
        this.media.src = "seinfeld";
        document.querySelector('.media').load();
        this.transcript.view = false;
    },

    setSrc3() {
        this.player = true;
        this.media.active = true;
        this.audio = true;
        this.video = false,
        this.media.paused = false;
        this.media.type = "Songs";
        this.media.name = "Don't Speak - No Doubt";
        this.media.src = "dont_speak";
        document.querySelector('.media').load();
        this.transcript.view = false;
    },

    playPauseMedia() {
        //movie.play();
        if(document.querySelector('.media').paused){
            document.querySelector('.media').play();
            this.media.paused = !(this.media.paused);
        }
        else {
            document.querySelector('.media').pause();
            this.media.paused = !(this.media.paused);
        }
    },

    stopMedia() {
        document.querySelector('.media').pause();
        document.querySelector('.media').currentTime = 0;
        this.media.paused = false;
    },

    muteMedia() {
        document.querySelector('.media').muted = !(document.querySelector('.media').muted);
        this.media.muted = !(this.media.muted);
    },

    viewTranscript() {
        this.transcript.view = (this.transcript.view) ? false : true;
    }
}

});
