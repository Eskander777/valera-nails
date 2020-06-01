const backdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const closeSideNav = () => {
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');
  setTimeout(() => {
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
  }, 200);
};

backdrop.addEventListener('click', closeSideNav);
mobileNav.addEventListener('click', closeSideNav);

toggleButton.addEventListener('click', () => {
  backdrop.style.display = 'block';
  mobileNav.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
  }, 5);
});
