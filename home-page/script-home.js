const speaker = document.getElementById('speaker-icon');
const Audio = document.getElementById('ele-Aduio');
const backgroundMusic = document.getElementById('background-music');
speaker.addEventListener('click' , displayAudio);

document.onload(backgroundMusic.play());


function displayAudio() {
    Audio.setAttribute("src" ,"http://api.voicerss.org/?key=b122fe77a30a4863ab2fdd805d455ccf&hl=en-us&c=MP3&f=16khz_16bit_stereo&v=Mary&src=Hi,%20Iam%20tec.............%20Lets%20have%20some%20good%20time%20learning%20english%20together.");
}
