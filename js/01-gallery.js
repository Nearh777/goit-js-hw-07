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

  const modalImg = event.target.dataset.source;
  console.log(modalImg);

  
  const instance = basicLightbox.create(
    `<img src="${modalImg}" 
    width="800" height="600">`
  );
  window.addEventListener('keydown', event => {
    
  });

  instance.show();
      
      
    

  // window.removeEventListener('keydown', event => {
  //   instance.close();
  //   });
 

  
}


