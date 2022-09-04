const MOB = 767
const TAB = 1023

function expandCity(el) {
  el.classList.toggle('select-city_expanded')
}

function selectCity(el) {
  const cityContainer = el.parentElement.previousElementSibling
  cityContainer.innerText = el.innerText
}

function expandContacts(el) {
  el.classList.toggle('header__contacts_expanded')
}

function expandFooterContacts(el) {
  el.classList.toggle('footer__contacts_expanded')
}

function expandSort(el) {
  el.classList.toggle('sort-select_expanded')
}

function selectSort(el) {
  const valueContainer = el.parentElement.previousElementSibling
  valueContainer.innerText = el.innerText
  for (elem of el.parentElement.children) {
    elem.classList.toggle('sort-select__option_active', false)
  }
  el.classList.toggle('sort-select__option_active', true)
}

function openMenu(el) {
  el.classList.toggle('burger_close')

  const menu = document.getElementById('main-nav')
  menu.classList.toggle('menu_shown')
}

function openMenuMob(el) {
  el.classList.toggle('burger_close')

  const menu = document.getElementById('main-nav-mob')
  menu.classList.toggle('menu_shown')
}

function expandCatalog(el) {
  el.classList.toggle('menu__catalog_expanded')
}

function expandPartners(el) {
  el.classList.toggle('partners_shown')
}

function expandCatalogMob(el) {
  el.classList.toggle('menu-mob__item-title_expanded')
}

function expandCategoryMob(el) {
  el.classList.toggle('catalog-category__title_expanded')
}

function expandPartnersMob(el) {
  el.classList.toggle('menu-mob__item-title_expanded')
}

function showModal() {
  document.getElementById('modal').classList.toggle('modal_shown', true)
}

function hideModal() {
  document.getElementById('modal').classList.toggle('modal_shown', false)
}
