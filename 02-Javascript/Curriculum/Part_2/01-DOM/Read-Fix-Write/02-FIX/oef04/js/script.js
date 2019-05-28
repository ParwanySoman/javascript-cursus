const episodes = document.querySelectorAll(`.episode-title`);
const $currentEpisode = document.querySelector(`.subtitle`);
const currentTitle = 

episodes.forEach($episode => {
  if ($episode.textContent === currentTitle) {
    $episode.classList = `highlight`;
  }
});
