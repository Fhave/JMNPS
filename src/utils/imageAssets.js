const imageUrls = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
  query: "?url",
});

export const getImageUrl = (filename) => {
  const imageUrl = imageUrls[`../assets/images/${filename}`];

  if (!imageUrl) {
    throw new Error(`Image asset not found: ${filename}`);
  }

  return imageUrl;
};
