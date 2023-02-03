console.log("Welcome to Spotify");
//Initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
   {songName:"Eyes On You-Radio Mix - Jay Sean ,Rishi Rich",filePath:"songs/1.mp3" ,coverPath:"cover1.jpg"},
   {songName:"Dandelions - Ruth B.",filePath:"songs/2.mp3" ,coverPath:"cover2.jpg"},
   {songName:"Pasoori - Shae Gill,Ali Sethi",filePath:"songs/3.mp3",coverPath:"cover3.jpg"},
   {songName:"Leekan - Amrinder Gill,Jatinder Shah",filePath:"songs/4.mp3" ,coverPath:"cover4.jpg"},
   {songName:"Lemonade- Diljit Dosanjh",filePath:"songs/5.mp3",coverPath:"cover5.jpg"},
   {songName:"Safar(From (Jab Harry Met Sejal)) - Pritam,Arijit Singh",filePath:"songs/6.mp3" ,coverPath:"cover6.jpg"},
   {songName:"Ikko-Mikke-Title Track - Satinder Sartaj",filePath:"songs/7.mp3" ,coverPath:"cover7.jpg"},
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
//  console.log('timeupdate');
 //update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
