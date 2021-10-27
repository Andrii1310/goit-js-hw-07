import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

// Create gallery.
const createItem = galleryItems
  .map(el =>
  `<div class="gallery__item">
     <a class="gallery__link" href="${el.original}">
     <img class="gallery__image"
          src="${el.preview}"
          data-source="${el.original}"
          alt="${el.description}"
      />
      </a>
    </div>`,
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', createItem);

// On and close modal window
galleryContainer.addEventListener('click', onSelectImage);

function onSelectImage (event){
  event.preventDefault();

  if (event.target.nodeName !== 'IMG'){
      return;
  }
  const onSelectedImage = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${onSelectedImage}" width="800" height="600">`
  );
  instance.show();
  window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
      instance.close();
    };
  });
}

console.log(galleryItems);



// 1. Создание и рендер разметки по массиву данных galleryItems
//    и предоставленному шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url
//    большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна
//    basicLightbox. Используй CDN сервис jsdelivr и добавь в
//    проект ссылки на минифицированные (.min) файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи.
//    Для этого ознакомься с документацией и примерами.
// 5. Замена значения атрибута src элемента <img> в модальном окне
//    перед открытием. Используй готовую разметку модального окна
//    с изображением из примеров библиотеки basicLightbox.

