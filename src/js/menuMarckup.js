import menu from '../menu.json';
import markup from '../handlebars/markup.hbs';

const menuMarkup = markup(menu);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', menuMarkup);
