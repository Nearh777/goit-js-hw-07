import { galleryItems } from './gallery-items.js';
// Change code below this line

const basicLightbox = window.basicLightbox;

const galleryList = document.querySelector('.gallery');

const galleryMarkup = hendleGalleryMarkup(galleryItems);

function hendleGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
          <a class="gallery__link" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}" />
          </a>
      </div>
      `;
    })
    .join('');
}
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', hendleGalleryClick);



function hendleGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  let href = (event.target.closest('a').getAttribute('href'));
  return href;

}
let gallery = new SimpleLightbox('.gallery a',{
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    scrollZoom: false,
   });

gallery.on('show.simplelightbox', function () {
});

gallery.on('error.simplelightbox', function (event) {
  console.log(event);
});



