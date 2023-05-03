// Add imports above this line
 import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery')
function createLiItem(fotos) {
     return fotos
        .map(
        (foto) => `<li class="gallery__item">
   <a class="gallery__link" href="${foto.original}">
      <img class="gallery__image" src="${foto.preview}" title="${foto.description}" alt="${foto.description}" />
   </a>
</li>`
     )
    .join("")
}

const markur = createLiItem(galleryItems)
gallery.insertAdjacentHTML("afterbegin", markur)

 
    const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
});