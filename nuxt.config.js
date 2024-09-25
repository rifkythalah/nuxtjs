export default {
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  plugins: [],

  build: {
    transpile: []
  },

  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
      }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
        body: true
      }
    ]
  },

  compatibilityDate: '2024-09-25'
};