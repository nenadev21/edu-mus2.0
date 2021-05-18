export const callApi = (url, setValue, setError = () => { return }) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        return response.json().then(e => Promise.reject(e));
      }
      return response.json();
    })
    .then(responseJSON => setValue(responseJSON))
    .catch(res => setError(res.error))
}