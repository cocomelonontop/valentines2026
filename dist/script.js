// ---- Music Playlist + Thumbnail ----
const music = document.getElementById("bg-music");
const thumb = document.getElementById("music-thumb");
music.volume = 0.3; // optional volume

// Playlist: each song has a URL + thumbnail image
const playlist = [
  { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", img: "https://via.placeholder.com/80/ff77a9/000000?text=1" },
  { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", img: "https://via.placeholder.com/80/ff77a9/000000?text=2" },
  { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", img: "https://via.placeholder.com/80/ff77a9/000000?text=3" },
  { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", img: "https://via.placeholder.com/80/ff77a9/000000?text=4" },
  { src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", img: "https://via.placeholder.com/80/ff77a9/000000?text=5" }
];

let currentSong = 0;

// Function to play a song and update thumbnail
function playSong(index) {
  music.src = playlist[index].src;
  thumb.src = playlist[index].img;
  music.play().catch(() => {}); // in case autoplay is blocked
}

// Start playing first song as soon as page loads
window.addEventListener("load", () => {
  playSong(currentSong);
});

// Move to next song automatically when one ends
music.addEventListener("ended", () => {
  currentSong = (currentSong + 1) % playlist.length;
  playSong(currentSong);
});