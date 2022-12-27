import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  (galleryItem) => `<div class = "gallery__item"> 
  <a class = "gallery__link" href = ${galleryItem.original}>
    <img class = "gallery__image"
    src = ${galleryItem.preview} 
    data-source = ${galleryItem.original}
    alt = '${galleryItem.description}'
    />
    </a>
    </div>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));

function onGalleryItemClick(event) {
  event.preventDefault();
  const { target } = event;
  const selectedImgUrl = target.dataset.source;

  onModalClick(selectedImgUrl);
}

gallery.addEventListener("click", onGalleryItemClick);

let instance = null;

function OnModalClose(event) {
  
    if (event.code === "Escape") {
      instance.close();
      console.log(event.code )

      document.removeEventListener("keydown", OnModalClose)
    }
  }
function onModalClick(url) {
  instance = basicLightbox.create(`
	<img src = "${url}">
`, {onShow: document.addEventListener("keydown", OnModalClose)});
  instance.show();
  

}
