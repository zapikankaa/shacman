const MOB = 767
const TAB = 1023

function expandCity(el) {
  el.classList.toggle('select-city_expanded')
}

function selectCity(el) {
  const cityContainer = el.parentNode.previousElementSibling
  cityContainer.innerText = el.innerText
}

function expandContacts(el) {
  if (document.documentElement.clientWidth ) {

  }
  el.classList.toggle('contacts_expanded')
}
