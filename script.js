function toggleMenu() {
  const menu = document.querySelector('#hamburger-nav .menu-links');
  menu.classList.toggle('open');
}
document.getElementById('audioControl').addEventListener('click', function() {
  var audio = document.getElementById('backgroundAudio');

  // Toggle mute/unmute
  if (audio.muted) {
    audio.muted = false;
    this.textContent = 'Mute Audio';
  } else {
    audio.muted = true;
    this.textContent = 'Unmute Audio';
  }
});
