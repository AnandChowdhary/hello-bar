/**
 * Fetch with local storage cache to prevent multple requests with the same expected response
 * @param {string} url - Endpoint for fetch request
 * @param {object} options - Fetch configuration object
 */
export default (url, options) =>
  new Promise((resolve, reject) => {
    const cacheKey = `hello_bar_cache_${url}${
      options ? "_" + JSON.stringify(options) : ""
    }`;
    if (localStorage.getItem(cacheKey)) {
      try {
        const cacheObject = JSON.parse(localStorage.getItem(cacheKey));
        if (cacheObject.expires_at > new Date().getTime())
          return resolve(cacheObject.cache_value);
      } catch (e) {}
    }
    fetch(url, options)
      .then(response => response.json())
      .then(json => {
        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            created_at: new Date().getTime(),
            expires_at: new Date().getTime() + 7 * 24 * 60 * 60 * 1000, // One-week cache
            cache_value: json
          })
        );
        resolve(json);
      })
      .catch(error => reject(error));
  });
