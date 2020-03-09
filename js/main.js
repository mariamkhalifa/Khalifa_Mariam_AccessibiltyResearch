
var vm = new Vue({
el: "#app",

data: {
    transcript: {
        visible: false
    },
},

methods: {
    viewTranscript() {
        this.transcript.visible = (this.transcript.visible) ? false : true;
    }
}
});
