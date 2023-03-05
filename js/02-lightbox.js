// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const galleryList = document.querySelector('.gallery');

// const galleryMarkup = hendleGalleryMarkup(galleryItems);

// function hendleGalleryMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `
      
//           <a class="gallery__link" href="${original}">
//           <img
//               class="gallery__image"
//               src="${preview}"            
//               alt="${description}" />
//           </a>
//       </div>
//       `;
//     })
//     .join('');
// }
// galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
// galleryList.addEventListener('click', hendleGalleryClick);

// function hendleGalleryClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }  



// //   const lightbox = new SimpleLightbox('.gallery a', {
// //     captionSelector: 'img',
// //     captionsData: 'alt',
// //     captionPosition: 'bottom',
// //     captionDelay: 250,
// //     scrollZoom: false,
// //     caption: true,
    
// //     // caption: true,
// //     // captionDelay: 250,
// //   });

// //   lightbox.show();


// }



import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryListEl = document.querySelector(".gallery");
galleryListEl.setAttribute('uk-lightbox', 'caption-position:bottom');

console.log(galleryListEl)

galleryListEl.addEventListener('click', onGalleryListElClick);

function createGalleryElement(array) {
    
   return array.map(({ preview, original, description }) => {
        const item = document.createElement('a');
        
        item.href = original;
       item.classList.add('gallery__item');
       item.dataset.caption = description;
        const image = document.createElement("img");
        image.src = preview;
        image.classList.add('gallery__image');
       image.alt = description;
       image.title = description;
       image.delay = 250;
       image.titlePosition = 'top';
        item.append(image);
        
       return item;
    })
   
}

const galleryElements = createGalleryElement(galleryItems);
galleryListEl.append(...galleryElements);


function onGalleryListElClick(e) {
  
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return
    };
    

    let href = (e.target.closest('a').getAttribute('href'));
    return href;
 
}
let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () {
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e);
});