let songs = [
{
title:"SoundHelix Song 1",
artist:"Helix",
src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
},
{
title:"SoundHelix Song 2",
artist:"Helix",
src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
},
{
title:"SoundHelix Song 3",
artist:"Helix",
src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
}
];

let audio = document.getElementById("audio");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");
let playlist = document.getElementById("playlist");

let currentSong = 0;

function loadSong(index){
audio.src = songs[index].src;
title.textContent = songs[index].title;
artist.textContent = songs[index].artist;
}

function playPause(){
if(audio.paused){
audio.play();
}
else{
audio.pause();
}
}

function nextSong(){
currentSong++;
if(currentSong >= songs.length){
currentSong = 0;
}
loadSong(currentSong);
audio.play();
}

function prevSong(){
currentSong--;
if(currentSong < 0){
currentSong = songs.length-1;
}
loadSong(currentSong);
audio.play();
}

audio.addEventListener("timeupdate",()=>{
progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input",()=>{
audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input",()=>{
audio.volume = volume.value;
});

audio.addEventListener("ended",()=>{
nextSong();
});

songs.forEach((song,index)=>{
let li = document.createElement("li");
li.textContent = song.title;
li.onclick = ()=>{
currentSong=index;
loadSong(index);
audio.play();
}
playlist.appendChild(li);
});

loadSong(currentSong);