/** @type {import('next').NextConfig} */

function getConfig(config) {
  return config;
}

module.exports = getConfig({
  images: {
    domains: ['m.media-amazon.com', 'dropshop.com.bd', 's3.amazonaws.com', 'scontent.cdninstagram.com', 'flaticon.com'],
  },
});
