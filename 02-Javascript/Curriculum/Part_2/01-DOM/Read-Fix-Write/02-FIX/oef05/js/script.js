const episodes = document.querySelectorAll(`.episode-item`);

episodes.forEach($episode => {
  const viewers = $episode.querySelector(`.episode-viewers`).textContent;
  const $meta = querySelector(`.episode-meta`);

  $meta.innerHTML = `<a href="episode{$number}.mp4">Watch now</a>`;
});
