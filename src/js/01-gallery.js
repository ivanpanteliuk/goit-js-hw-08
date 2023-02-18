// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

function makeGalleryCollectionMarkup(items) {
  return items
    .map(
      ({
        preview,
        original,
        description,
      } = {}) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}

galleryListEl.innerHTML = makeGalleryCollectionMarkup(galleryItems);

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
