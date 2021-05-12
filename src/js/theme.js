const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyref = document.querySelector('body');

checkboxRef.addEventListener('change', event => {
  if (!event.target.checked) {
    localStorage.setItem('theme', LIGHT);
    addStyleTheme();
    return;
  }
  localStorage.setItem('theme', DARK);
  addStyleTheme();
});

addStyleTheme();

function addStyleTheme() {
  if (localStorage.getItem('theme') === LIGHT) {
    setClassBody(DARK, LIGHT);
  }
  if (
    localStorage.getItem('theme') === DARK ||
    !localStorage.getItem('theme')
  ) {
    setClassBody(LIGHT, DARK);
    checkboxRef.checked = true;
  }
}

function setClassBody(classRemove, classAdd) {
  bodyref.classList.remove(classRemove);
  bodyref.classList.add(classAdd);
}
