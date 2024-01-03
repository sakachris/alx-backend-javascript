export default function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Sample API response');
    }, 1000);
  });

  return promise;
}
