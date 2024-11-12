export default defineNuxtPlugin(() => {
  useHead({
    script: [
      {
        'src': 'https://cloud.umami.is/script.js',
        'data-website-id': 'd793fbf3-461e-4e26-9ec9-4e9141df96ee',
      },
    ],
  });
});
