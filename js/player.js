//vars

var currentFile = "";
var isPlayPressed = false;
var isStopPressed = false;
var isPausePressed = false;
var isSCPressed = false;
var isDLPressed = false;
var rewindWasPressed = false;
var ffWasPressed = false;
var addListener = true;


//Audio Fn()

function playAudio(file) {
	if (window.HTMLAudioElement) {
		try {
			var oAudio = document.getElementById('myPod');
			var play = document.getElementById('play'); 
			var stp = document.getElementById('stop'); 
			var audioURL = file;
			stp.src='./css/player/stop.png';
			isStopPressed = false;
			rewindWasPressed = false;
			ffWasPressed = false;
			if (addListener){
				audioEventListener();
				addListener = false;
			}
			if (audioURL !== currentFile) {
				oAudio.src = audioURL;
				currentFile = audioURL;                 
			}
			
			if (oAudio.paused) {
				oAudio.play();
				play.src = './css/player/play_pres.png';
				isPlayPressed = true;
				isPausePressed = false;
			}else{
				oAudio.pause();
				play.src = './css/player/pause_pres.png';
				isPlayPressed = false;
				isPausePressed = true;
			}
		}catch (e) {
		}
	}
}
		
function stopAudio() {
	if (window.HTMLAudioElement) {
		try {
			var oAudio = document.getElementById('myPod');
			var stp = document.getElementById('stop'); 
			var play = document.getElementById('play'); 
			play.src='./css/player/play.png';
			isPlayPressed = false;
			isPausePressed = false;
			rewindWasPressed = false;
			ffWasPressed = false;
			oAudio.pause();
			oAudio.currentTime = 0;
			stp.src='./css/player/stop_pres.png';
			isStopPressed = true;
		}catch (e) {
		}
	}
}

function rewindAudio() {
	if (window.HTMLAudioElement) {
		if (isPlayPressed || isPausePressed){
			try {
				var oAudio = document.getElementById('myPod');
				var rewind = document.getElementById('rewind');
				var time = oAudio.currentTime;
				ffwasPressed = false;
				if (rewindWasPressed){
					oAudio.currentTime = time - 7.5;
				}else{
					oAudio.currentTime = time - 5.0;
				}
				rewindWasPressed = true;
			}catch (e)  {
			}
		}
	}
}

function ffAudio() {
	if (window.HTMLAudioElement) {
		if (isPlayPressed || isPausePressed){
			try {
				var oAudio = document.getElementById('myPod');
				var ff = document.getElementById('ff');
				var time = oAudio.currentTime;
				rewindWasPressed = false;
				if (ffWasPressed){
					oAudio.currentTime = time + 7.5;
				}else{
					oAudio.currentTime = time + 5.0;
				}
				ffWasPressed = true;
			}catch (e)  {
			}
		}
	}
}

function soundControl(){
	if (window.HTMLAudioElement) {
		try {
			var oAudio = document.getElementById('myPod');
			var sc = document.getElementById('sc');
			if (isSCPressed) {
				oAudio.volume = 1;
				isSCPressed = false;
				sc.src = './css/player/audioON.png';
			}else{
				oAudio.volume = 0;
				isSCPressed = true;
				sc.src = './css/player/audioOFF.png';
			}
		}catch (e)  {
		}
	
	}
	
}

function endAudio(){
	var play = document.getElementById('play'); 
	var stp = document.getElementById('stop'); 
	var oAudio = document.getElementById('myPod');
	play.src = './css/player/play.png';
	stp.src = './css/player/stop.png';
	isPlayPressed = false;
	isStopPressed = false;
	isPausePressed = false;
	rewindWasPressed = false;
	ffWasPressed = false;
	oAudio.pause();
	oAudio.currentTime = 0;
}

function dlAudio(url){
	var dl = document.getElementById('dl');
	dl.src = 'http://radio.esmut.cat/css/player/download_pres.png';
	isDLPressed = true;
	dlAudioAUX(url);
}

function dlAudioAUX(url){
		window.open(url, '_self');
}

//Selection Fn()

function selPlay(){
	var play = document.getElementById('play');
	if (!isPausePressed){
		if (!isPlayPressed){
		play.src = './css/player/play_sel.png';
		}else{
		play.src = './css/player/pause_sel.png';
		}
	}else{
		play.src = './css/player/play_sel.png';
	}
	
}

function deselPlay(){
	var play = document.getElementById('play'); 
	if (!isPausePressed){
		if (!isPlayPressed){
		play.src = './css/player/play.png';
		}else{
		play.src = './css/player/play_pres.png';
		}
	}else{
		play.src = './css/player/pause_pres.png';
	}
	
	
}

function selStop(){
	var stp = document.getElementById('stop'); 
	stp.src = './css/player/stop_sel.png';
}

function deselStop(){
	var stp = document.getElementById('stop'); 
	if (!isStopPressed){
		stp.src = './css/player/stop.png';
	}else{
		stp.src = './css/player/stop_pres.png';
	}
}

function selRewind(){
	var rewind = document.getElementById('rewind'); 
	rewind.src = './css/player/rewind_sel.png';
}

function deselRewind(){
	var rewind = document.getElementById('rewind'); 
	rewind.src = './css/player/rewind.png';
}

function selFF(){
	var ff = document.getElementById('ff'); 
	ff.src = './css/player/ff_sel.png';
}

function deselFF(){
	var ff = document.getElementById('ff'); 
	ff.src = './css/player/ff.png';
}

function selSC(){
	var sc = document.getElementById('sc'); 
	if (!isSCPressed) {
		sc.src = './css/player/audioOFF_sel.png';	
	}else{
		sc.src = './css/player/audioON_sel.png';
	}
}

function deselSC(){
	var sc = document.getElementById('sc'); 
if (isSCPressed) {
		sc.src = './css/player/audioOFF.png';	
	}else{
		sc.src = './css/player/audioON.png';
	}
}

function selDL(){
	var dl = document.getElementById('dl');
	dl.src = './css/player/download_sel.png';	
}

function deselDL(){
	var dl = document.getElementById('dl');
	if (isDLPressed){
		dl.src = './css/player/download_pres.png';
	}else{
		dl.src = './css/player/download.png';
	}
}
// Ended event listener (from Audio tag)

function audioEventListener(){
	var oAudio = document.getElementById('myPod');
	oAudio.addEventListener('ended', endAudio);	
}
