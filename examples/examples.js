const examples = document.getElementsByClassName('example');
const imageModal = document.querySelector('.image-modal');

const closeImage = () => {
  const imageToClose = document.querySelector('.image-modal > img');
  imageModal.removeChild(imageToClose);
  backdrop.removeEventListener('click', closeImage);
};

const openImage = (event) => {
  const clickedImage = event.target;
  const imageToOpen = document.createElement('img');
  imageToOpen.src = clickedImage.src;
  imageToOpen.alt = clickedImage.alt;
  imageModal.appendChild(imageToOpen);
  backdrop.style.display = 'block';
  imageModal.style.display = 'block';
  backdrop.addEventListener('click', closeImage);
};

for (let i = 0; i < examples.length; i++) {
  examples[i].firstElementChild.addEventListener('click', openImage);
}
