import { galleryItems } from './gallery-items.js';
// Change code below this line

const bacicLightbox = window.bacicLightbox;

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

function hendleGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const modalImg = e.target.dataset.source;
  console.log(modalImg);

  const instance = bacicLightbox.create(
    `<img src="${modalImg}" 
    width="800" height="600">`
  );
  instance.show();
}

// const galleryContainer = document.querySelector('.gallery');
// function createGalleryCardsMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `
//     <div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//         <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}" />
//         </a>
//     </div>
//     `;
//     })
//     .join('');
// }
// const cardsMarkup = createGalleryCardsMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);


// (({ preview, original, description }) => {
//           return `
//         <div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//             <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}" />
//             </a>
//         </div>
//         `;
//         })
//         .join('');


        // (
        //     item =>
        //       `<div class="gallery__item">
        //           <a class="gallery__link" href="${item.original}">
        //           <img
        //               class="gallery__image"
        //               src="${item.preview}"
        //               data-source="${item.original}"
        //               alt="${item.description}" />
        //           </a>
        //       </div>
        //       `
        //   )
        //   .join('');