
Vue.component('poster', {
    props: {
        type: String,
        name: String,
        src: String,
        isaudio: Boolean,
        isvideo: Boolean
    },

    template: `
    <li @click="$emit('make-selection', type, src, name, isvideo, isaudio)"
    tabindex="0" class="thumb mx-auto"
    @keyup.enter="$emit('make-selection', type, src, name, isvideo, isaudio)">
        <h3 class="h4 text-center">{{ type }}</h3>
        <img class="mt-3" :src="'images/' + src + '.jpg'" alt="poster">
        <h4 class="h6 text-center mt-2">{{ name }}</h4>
    </li>
    `
})

var vm = new Vue({

el: "#app",

data: {
    player: false,

    transcript: {
        view: false
    },

    media: {
        paused: false,
        muted: false,
        active: false,
    },

    video: false,

    audio: false,

    mediaelements: [
        { type: "Movies", name: "Sound of Music", src: "sound_of_music", isvideo: true, isaudio: false},
        { type: "TV", name: "Seinfeld", src: "seinfeld", isvideo: true, isaudio: false},
        { type: "Songs", name: "Don't Speak - No Doubt", src: "dont_speak", isvideo: false, isaudio: true}
    ],

    mediatype: "",

    medianame: "",

    mediasrc: ""
},

methods: {

    updateProgress() {
        this.$refs.progress.value = this.$refs.mediaEl.currentTime / this.$refs.mediaEl.duration;
    },

    toggleCaptions() {
        let tt = (this.$refs.mediaEl).textTracks;
        for(var i=0; i < tt.length; i++) {
            if(tt[i].mode === "disabled") {
                tt[i].mode = "showing";
            }
            else {
                tt[i].mode = "disabled";
            }   
        }
    },

    setSrc(type, src, name, isvideo, isaudio) {
        this.player = true;
        this.media.active = true;
        this.video = isvideo;
        this.audio = isaudio,
        this.media.paused = false;
        this.transcript.view = false;
        this.mediatype = type;
        this.medianame = name;
        this.mediasrc = src;
        this.$refs.mediaEl.load();
    },

    playPauseMedia() {
        if(this.$refs.mediaEl.paused){
            this.$refs.mediaEl.play();
            this.media.paused = !(this.media.paused);
        }
        else {
            this.$refs.mediaEl.pause();
            this.media.paused = !(this.media.paused);
        }
    },

    stopMedia() {
        this.$refs.mediaEl.pause();
        this.$refs.mediaEl.currentTime = 0;
        this.media.paused = false;
    },

    muteMedia() {
        this.$refs.mediaEl.muted = !(this.$refs.mediaEl.muted);
        this.media.muted = !(this.media.muted);
    },

    viewTranscript() {
        this.transcript.view = (this.transcript.view) ? false : true;
    }
}

});

