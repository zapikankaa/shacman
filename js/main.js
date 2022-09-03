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
