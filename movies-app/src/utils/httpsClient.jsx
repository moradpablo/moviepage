const API = 'https://api.themoviedb.org/3';
function getHttp(path) {
  return fetch(API + path, {
    headers: {
      Authorization: 'Bearer ' + process.env.API_TOKEN,
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
