const backdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const closeSideNav = () => {
  backdrop.style.display = 'none';
  mobileNav.style.display = 'none';
};

backdrop.addEventListener('click', closeSideNav);
mobileNav.addEventListener('click', closeSideNav);

toggleButton.addEventListener('click', () => {
  backdrop.style.display = 'block';
  mobileNav.style.display = 'block';
});
