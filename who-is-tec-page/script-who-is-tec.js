const speaker2 = document.getElementById('volume');
const Audio2 = document.getElementById('audio-second');
speaker2.addEventListener('click' , displayAudio2);

function displayAudio2() {
        Audio2.setAttribute("src" ,"http://api.voicerss.org/?key=b122fe77a30a4863ab2fdd805d455ccf&hl=en-us&c=MP3&f=16khz_16bit_stereo&v=Mary&src=Hi%20Friends,%20Iam%20Tec.%20Your%20new%20English%20instructor.......%20Iam%20happy%20to%20teach%20you%20how%20to%20pronounce%20English%20words%20correctly%20and%20know%20their%20meanings............You%20can%20call%20me%20just%20Tec");
}