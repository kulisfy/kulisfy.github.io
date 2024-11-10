document.getElementById('fullscreenBtn').addEventListener('click', function() {
    // Fullscreen mode
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome and Safari
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  
    // Play music
    document.getElementById('bgMusic').play();
  
    // Hide the button after it is clicked
    document.getElementById('fullscreenBtn').style.display = 'none';
  
    // Show the image after button click and start animating
    let animation = document.getElementById('animation');
    animation.style.display = 'block'; // Görünür yap
    setTimeout(function() {
      animation.style.opacity = 1; // Opaklık değişimi ile görünür yap
    }, 0); // Görünür yapma işlemini hemen başlat
  
    // Start image animation cycle
    let imageIndex = 1;
    setInterval(function() {
      animation.src = imageIndex === 1 ? 'anim1.png' : 'anim2.png';
      imageIndex = imageIndex === 1 ? 2 : 1;
    }, 100); // Change image every 0.5 seconds
  });
  