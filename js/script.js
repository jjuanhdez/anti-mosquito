function is_now_playing() {
    var is_playing = ($('.mosquito img').attr('src') == 'img/mosquito_animated.gif');
    return is_playing;
}

var audioFiles = new Array();
audioFiles[0] = ''; // 0 índice para la imagen de prueba
audioFiles[1] = new Audio();
audioFiles[2] = new Audio();
audioFiles[3] = new Audio();
audioFiles[4] = new Audio();
audioFiles[5] = new Audio();

for(i=1; i<=5; i++) {
    audioFiles[i].mozAudioChannelType = 'content';
}

audioFiles[1].src = "sounds/16khz.mp3";
audioFiles[2].src = "sounds/18khz.mp3";
audioFiles[3].src = "sounds/20khz.mp3";
audioFiles[4].src = "sounds/21khz.mp3";
audioFiles[5].src = "sounds/22khz.mp3";


function stop_audios() { //Detiene el audio y elimina las clases de los botones y la imagen principal.
    for(i=1; i<=5; i++) {
        audioFiles[i].pause();
        $('.button_' + i).removeClass('active');
        $('.mosquito img').attr('src', 'img/mosquito.jpg');
    }
}

function play_an_audio(index) { //Detiene el audio y reproduce el seleccionado
    stop_audios();
    audioFiles[index].addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    audioFiles[index].play();
    $('.button_' + index).addClass('active');
    $('.mosquito img').attr('src', 'img/mosquito_animated.gif');
}

function button_action(index) {
    if(is_now_playing() && $('.button_' + index).hasClass('active')) {
        stop_audios();
    } else {
        play_an_audio(index);
    }
}

function mosquito_image_action() {
    if(is_now_playing()) {
        stop_audios();
        $('.mosquito img').attr('src', 'img/mosquito.jpg');
    } else {
        play_an_audio(3);
        $('.mosquito img').attr('src', 'img/mosquito_animated.gif');
    }
}

$(document).ready(function(){
    $(document).on('click', '.share-button', function(e){
        $('.share-button').animate({
            width: '0'
        }, 1000);

        $('.share-icons').animate({
            right: '0'
        }, 1000);
    });

    $(document).on('click', '.share-close-button', function(e){
        $('.share-button').animate({
            width: '74px'
        }, 1000);

        $('.share-icons').animate({
            right: '-195px'
        }, 1000);
    });
});
