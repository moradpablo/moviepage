const API = 'https://api.themoviedb.org/3';
function getHttp(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjJmNDk0NWViNGMzZDYwZjZkNmUxZGVmY2ViOGQ0MCIsInN1YiI6IjY0ZDI5YTczYzNiZmZlMGYwNTQ0ZmYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oc6dF7_69CJ7I05VR71qND7C17rJO1zdGobzzLQ-ovg',
    },
  })
    .then((result) => {
      return result.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

export default getHttp;
