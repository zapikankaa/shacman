function expandCity(el) {
  el.classList.toggle('select-city_expanded')
}

function selectCity(el) {
  const cityContainer = el.parentNode.previousElementSibling
  cityContainer.innerText = el.innerText
}

