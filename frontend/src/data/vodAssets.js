export const vodAssets = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  year: 2023,
  duration: "1h 45m",
  genre: "Action",
  price: 4.99,
  poster: `/images/posters/poster-${(i % 6) + 1}.jpg`,

  videoSrc: `/videos/movie-${i + 1}.mp4`
}));
