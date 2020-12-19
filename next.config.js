const path = require('path');
const withVideos = require('next-videos');

module.exports = withVideos({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.unsplash.com', 'crossroads-center-for-children.s3.amazonaws.com'],
  },
});
