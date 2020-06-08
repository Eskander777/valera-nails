const examples = document.querySelector('.examples');
const imageModal = document.querySelector('.image-modal');
let imageToOpen = document.createElement('img');

const IMAGES = [
  '87R0QnsacZE.jpg',
  'Ai8pLNvzMLU.jpg',
  'C-fE6t461tQ.jpg',
  'el4MAhzEkgc.jpg',
  'gL9s-8KMDZQ.jpg',
  'MD1OY-GWdro.jpg',
  'MPywfLbRRLw.jpg',
  's-Z3bZzEEp0.jpg',
  'vU80xbhYgPY.jpg',
  'XUqUlsj0H68.jpg',
];

const openNextImage = () => {
  const prevImage = imageToOpen.src.replace(
    'file:///C:/programmer_work/JavaScript_Study/Sites_Examples/Nails/examples/images/',
    ''
  );
  const prevImgIndex = IMAGES.indexOf(prevImage);
  const nextImgIndex = prevImgIndex + 1;
  const nextImage = IMAGES[nextImgIndex];
  if (!nextImage) {
    closeImage();
  } else if (nextImage) {
    imageToOpen.src = `images/${nextImage}`;
  }
};

const closeImage = () => {
  if (imageToOpen && imageModal.firstElementChild === imageToOpen) {
    setTimeout(() => {
      imageModal.removeChild(imageToOpen);
    }, 200);
  }
  imageModal.classList.remove('open');
  backdrop.classList.remove('open');
  setTimeout(() => {
    imageModal.style.display = 'none';
    backdrop.style.display = 'none';
  }, 200);
  backdrop.removeEventListener('click', closeImage);
};

const openImage = (event) => {
  const clickedImage = event.target;
  imageToOpen.src = clickedImage.src;
  imageToOpen.alt = clickedImage.alt;
  imageModal.appendChild(imageToOpen);
  imageToOpen.addEventListener('click', openNextImage);
  backdrop.style.display = 'block';
  imageModal.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
    imageModal.classList.add('open');
  }, 5);
  backdrop.addEventListener('click', closeImage);
};

IMAGES.forEach((image) => {
  let exampleDiv = document.createElement('div');
  exampleDiv.className = 'example';
  let imgElem = document.createElement('img');
  imgElem.className = 'example-image';
  imgElem.src = `images/${image}`;
  imgElem.alt = '';
  exampleDiv.appendChild(imgElem);
  examples.appendChild(exampleDiv);
  imgElem.addEventListener('click', openImage);
});

// for (let i = 0; i < IMAGES.length; i++) {
//   let exampleDiv = document.createElement('div');
//   exampleDiv.className = 'example';
//   let imgElem = document.createElement('img');
//   imgElem.className = 'example-image';
//   imgElem.src = `images/${IMAGES[i]}`;
//   imgElem.alt = '';
//   exampleDiv.appendChild(imgElem);
//   examples.appendChild(exampleDiv);
//   imgElem.addEventListener('click', openImage);
// }
