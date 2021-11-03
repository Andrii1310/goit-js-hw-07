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


// План выполнения задачи:
// 1. Создание и рендер разметки по массиву данных galleryItems
//    и предоставленному шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url
//    большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна
//    basicLightbox. Использовать CDN сервис jsdelivr и добавить в
//    проект ссылки на минифицированные (.min) файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи.
//    Для этого ознакомиться с документацией и примерами.
// 5. Замена значения атрибута src элемента <img> в модальном окне
//    перед открытием. Использовать готовую разметку модального окна
//    с изображением из примеров библиотеки basicLightbox.
