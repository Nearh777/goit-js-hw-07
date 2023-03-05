import { galleryItems } from './gallery-items.js';
// Change code below this line
// //1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// const listEl = document.querySelector('.gallery');
// const makeGalleryEl = ({preview, original, description})  =>
// `<li class='gallery-item'>
// <img src='${preview}' alt='${description}'>
// </li>`

// const markup = images.map((data) => makeGalleryEl(data)).join('');
// //console.log(markup);
// listEl.insertAdjacentHTML('beforeend', markup);

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
function createGalleryCardsMarkup(items) {
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
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener(click, hendleGalleryClick);

function hendleGalleryClick(e) {
  e.preventDefault();
  if (e.targett.nodeName !== 'IMG') {
    return;
  }

  const modalImg = e.targett.dataset.source;
  console.log(modalImg);

  const instance = bacicLightbox.create(
    `<img src="${modalImg}" 
    width="800" height="600">`)
    instance.show()
}
