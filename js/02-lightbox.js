import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  (galleryItem) => `<a class="gallery__item" href = ${galleryItem.original}>
  <img class="gallery__image" src = '${galleryItem.preview}' alt = '${galleryItem.description}'
  />
</a>`
);
gallery.insertAdjacentHTML("beforeend", markup.join(""));

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});
