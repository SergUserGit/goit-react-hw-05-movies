const API_KEY = '8bdb4b862ffa773481adb9dc6c5538df';

const firstPartQuery = 'https://api.themoviedb.org/3/';

function getQueryString(partBeforeApi, partAfterApi) {
  return firstPartQuery + partBeforeApi + '?api_key=' + API_KEY + partAfterApi;
}

function getResponse(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Немає даних по запиту'));
  });
}

export { getQueryString, getResponse };
