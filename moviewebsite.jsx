function showDetails(movieId) {
  const movieDetails = {
      movie1: {
          title: "Moana",
          description: "A young Polynesian girl, Moana, embarks on a daring ocean journey to find a demigod and restore balance to her island",
          release: "Released: 2016"
      },
      movie2: {
          title: "Kung Fu Panda 4",
          description: "Po, now the Spiritual Leader, must find a worthy successor and teams up with a fox bandit to stop a sorceress from stealing kung fu powers..",
          release: "Released: 2024"
      },
      movie3: {
          title: "Spider-Man:Far From Home",
          description: "Peter Parker goes on a school trip to Europe, where he teams up with Mysterio to fight elemental threats, only to discover Mysterio is a villain..",
          release: "Released: 2019"
      }
  };

  const movie = movieDetails[movieId];

  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-description').textContent = movie.description;
  document.getElementById('movie-release').textContent = movie.release;

  document.getElementById('movie-details').style.display = 'block';
}

function closeDetails() {
  document.getElementById('movie-details').style.display = 'none';
}
