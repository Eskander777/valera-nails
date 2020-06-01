const examples = document.getElementsByClassName('example');
const imageModal = document.querySelector('.image-modal');

const closeImage = () => {
  const imageToClose = document.querySelector('.image-modal > img');
  imageModal.classList.remove('open');
  setTimeout(() => {
    imageModal.style.display = 'none';
    imageModal.removeChild(imageToClose);
  }, 200);
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
  setTimeout(() => {
    backdrop.classList.add('open');
    imageModal.classList.add('open');
  }, 5);
  backdrop.addEventListener('click', closeImage);
};

for (let i = 0; i < examples.length; i++) {
  examples[i].firstElementChild.addEventListener('click', openImage);
}
