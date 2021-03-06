import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

// Create gallery.
const createItem = galleryItems
  .map(
    (el, index) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      data-index="${index}"
      alt="${el.description}"
    />
  </a>
</div>`,
  )
  .join('');
galleryContainer.insertAdjacentHTML('beforeend', createItem);
galleryContainer.addEventListener('click', onSelectImage);

// Example 1:
// On modal window
// function onSelectImage(e) {
//   e.preventDefault();

//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   const onSelectedImage = e.target.dataset.source;
//   // Connecting the library basicLightbox:
//   const instance = basicLightbox.create(
//     `<img src="${onSelectedImage}" width="800" height="600">`,
//   );
//   instance.show();
//   console.log('Modal open, listener added');

//   window.addEventListener('keydown', handleKeypress);

//   function handleKeypress(e) {
//     if (e.code === 'Escape') {
//       instance.close();
//       console.log(e.code);
//       closeImgModal();
//     }
//   }

//   function closeImgModal() {
//     window.removeEventListener('keydown', handleKeypress);
//     console.log('Listener removed');
//   }
// }

// Example 2:
// Connecting the library basicLightbox:

function onSelectImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img class="modal-img" src="">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', handleKeypress);        
      },
    },
    {
      onClose: (instance) => {
        window.removeEventListener('keydown', handleKeypress);        
      },
    },
  );

  instance.element().querySelector('.modal-img').src = e.target.dataset.source;
  instance.show();

  function handleKeypress(e) {
    if (e.code === 'Escape') {
      instance.close();      
      return;
    }
  }
}


// ???????? ???????????????????? ????????????:
// 1. ???????????????? ?? ???????????? ???????????????? ???? ?????????????? ???????????? galleryItems
//    ?? ???????????????????????????????? ?????????????? ???????????????? ??????????????.
// 2. ???????????????????? ?????????????????????????? ???? div.gallery ?? ?????????????????? url
//    ???????????????? ??????????????????????.
// 3. ?????????????????????? ?????????????? ?? ???????????? ???????????????????? ???????????????????? ????????
//    basicLightbox. ???????????????????????? CDN ???????????? jsdelivr ?? ???????????????? ??
//    ???????????? ???????????? ???? ???????????????????????????????? (.min) ?????????? ????????????????????.
// 4. ???????????????? ???????????????????? ???????? ???? ?????????? ???? ???????????????? ??????????????.
//    ?????? ?????????? ???????????????????????? ?? ?????????????????????????? ?? ??????????????????.
// 5. ???????????? ???????????????? ???????????????? src ???????????????? <img> ?? ?????????????????? ????????
//    ?????????? ??????????????????. ???????????????????????? ?????????????? ???????????????? ???????????????????? ????????
//    ?? ???????????????????????? ???? ???????????????? ???????????????????? basicLightbox.
