document.addEventListener('keydown', function (e) {
  const video = document.querySelector('video');

  if (e.key === 'Enter') {
    document.querySelector('input[name="search_query"]').click();
    e.preventDefault();
    e.stopPropagation();
  }

  if (video) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      if (e.ctrlKey) {
        video.currentTime += 60; // Skip 1 minute when Ctrl is pressed
      } else {
        video.currentTime += 10; // Skip 10 seconds without Ctrl
      }
      video.play();
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();
      if (e.ctrlKey) {
        video.currentTime -= 60; // Rewind 1 minute when Ctrl is pressed
      } else {
        video.currentTime -= 10; // Rewind 10 seconds without Ctrl
      }
      video.play();
    }
  }
}, true);

