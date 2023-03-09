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
galleryList.removeEventListener('keydown', e => {

});





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

  instance.show();


  addEventListener('keydown', e => {
    instance.show();
  });

  //removeEventListener('keydown', function(){

  //});

  //removeEventListener('keydown', e => {
  //  instance.close();
  //});
 
  //removeEventListener('keydown' , e => {
  //  if (e.target.classList === e.target.classList('.basicLightbox')){
  //  instance.close();
  //  }
  //})
  
}
