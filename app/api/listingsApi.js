import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const formData = new FormData();
  formData.append("title", listing.title);
  formData.append("price", listing.price);
  formData.append("categoryId", listing.category.value);
  formData.append("description", listing.description);

  listing.images.foreach((image, index) =>
    formData.append("images", {
      name: "image" + index,
      type: "image/jpg",
      uri: image,
    })
  );

  if (listing.location) formData.append("location", JSON.stringify(location));

  return client.post(endpoint, formData, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
