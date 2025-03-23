// script.js
window.onload = function() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeControl = document.getElementById('volume-control');
    const currentSongDisplay = document.getElementById('current-song');
    const currentTimeDisplay = document.getElementById('current-time');
    const songList = document.getElementById('song-list').getElementsByTagName('li');
  
    let isPlaying = false;
  
    // Play or Pause the audio
    playPauseBtn.addEventListener('click', function() {
      if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      } else {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      }
      isPlaying = !isPlaying;
    });
  
    // Volume control functionality
    volumeControl.addEventListener('input', function() {
      audioPlayer.volume = volumeControl.value;
    });
  
    // Update current time of the audio
    audioPlayer.addEventListener('timeupdate', function() {
      let minutes = Math.floor(audioPlayer.currentTime / 60);
      let seconds = Math.floor(audioPlayer.currentTime % 60);
      if (seconds < 10) seconds = '0' + seconds;
      currentTimeDisplay.textContent = `${minutes}:${seconds}`;
    });
  
    // Function to change song
    const changeSong = (songSrc, songName) => {
      audioPlayer.src = songSrc;
      currentSongDisplay.textContent = `Now playing: ${songName}`;
      audioPlayer.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      isPlaying = true;
    };
  
    // Handle song selection from the playlist
    for (let i = 0; i < songList.length; i++) {
      songList[i].addEventListener('click', function() {
        const songSrc = this.getAttribute('data-src');
        const songName = this.textContent;
        changeSong(songSrc, songName);
      });
    }
  };
