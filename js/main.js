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

function hideModal(modalId) {
  document.getElementById(modalId).classList.toggle('modal_shown', false)
}

const questions = [
  {
    questionText: 'Какой объем кузова вы рассматриваете?',
    answers: [
      '19 м<sup>3</sup>',
      '26 м<sup>3</sup>',
      '35 м<sup>3</sup>',
      'Предложить все варианты'
    ]
  },
  {
    questionText: 'Какая колесная формула должна быть?',
    answers: [
      '6x4',
      '6x6',
      '8x4',
      'Предложить все варианты'
    ]
  },
  {
    questionText: 'Тип разгрузки самосвала',
    answers: [
      'Задний',
      'Боковой',
      'Двусторонний',
      'Трехсторонний',
      'Предложить все варианты'
    ]
  },
  {
    questionText: 'Тип кабины грузовика',
    answers: [
      'F2000 (с 1 спальным местом)',
      'F3000 (увеличенная)',
      'X3000 (с 2 спальными местами)',
      'Предложить все варианты'
    ]
  },
  {
    questionText: 'Как планируете приобретать технику?',
    answers: [
      'Наличный/безналичный рассчет',
      'Кредит/лизинг'
    ]
  },
  {
    questionText: 'Оставьте контактные данные для рассчета',
    answers: []
  }
]


let currentQuestion = 0
let quizRes = {}

window.onload = function () {
  const questionContainer = document.getElementById('quizQuestion')
  setQuestion(questions[currentQuestion], questionContainer)
}

function setQuestion(q, container) {
  let currentAnswer;
  if (quizRes[currentQuestion + 1]) {
    currentAnswer = quizRes[currentQuestion + 1]
  }
  const text = container.getElementsByTagName('h3')[0]
  text.innerText = (currentQuestion + 1) + '. ' + q.questionText

  const quizNextButton = document.getElementById('quiz-next-button')

  const answers = container.getElementsByClassName('quiz__answers')[0]
  answers.innerHTML = ''
  if (q.answers.length > 0) {
    for (let i in q.answers) {
      answers.innerHTML += `
    <label class="quiz-answer" onclick="setAnswer('${q.answers[i]}')">
      <div class="quiz-radio">
        <input class="quiz-radio__true" type="radio" name="question1" value="0" ${ q.answers[i] === currentAnswer ? 'checked' : '' }>
        <div class="quiz-radio__fake">
          <img src="./img/check-quiz.svg" alt="">
        </div>
      </div>
      <span>${q.answers[i]}</span>
    </label>
    `
    }

    quizNextButton.innerText = 'Следующий параметр'
    quizNextButton.addEventListener('click', nextQuestion)
  } else {
    answers.innerHTML = `
    <form action="" class="modal-form">
      <label>
        <span>Имя*</span>
        <input type="text" oninput="setFormAnswer(this)">
      </label>
      <label>
        <span>Номер телефона*</span>
        <input type="tel" oninput="setFormAnswer(this)">
      </label>
      <label class="form__checkbox" onclick="">
        <input class="checkbox-true" type="checkbox" checked onchange="setFormAnswer(this)">
        <div class="checkbox-fake">
          <img class="checkbox-check" src="./img/check-modal.svg" alt="">
        </div>
        <span>Согласие на обработку персональных данных</span>
      </label>
    </form>
    `

    quizNextButton.innerText = 'Подобрать самосвал'
    quizNextButton.removeEventListener('click', nextQuestion)
    quizNextButton.addEventListener('click', sendForm)

  }

}

function setAnswer(answer) {
  quizRes[currentQuestion + 1] = answer

  let checked = true
  if (currentQuestion === 5 && (answer.name === '' || answer.phone === '' || answer.agree === false)) {
    checked = false
  }

  if (checked) {
    const buttonNext = document.getElementById('quizFooter').children[1]
    buttonNext.classList.toggle('button_inactive', false)
  }
}

function setFormAnswer(el) {
  let answer
  if (quizRes[currentQuestion + 1]) {
    answer = quizRes[currentQuestion + 1]
  } else {
    answer = {
      name: '',
      phone: '',
      agree: true
    }
  }

  if (el.type === 'text') {
    answer.name = el.value
  } else if (el.type === 'tel') {
    answer.phone = el.value
  } else if (el.type === 'checkbox') {
    answer.agree = el.checked
  }

  setAnswer(answer)
}

function nextQuestion() {
  if (!quizRes[currentQuestion + 1]) {
    return
  }
  const qiuzMenu = document.getElementById('quiz-menu').children
  qiuzMenu[currentQuestion].classList.toggle('has-answer', true)
  qiuzMenu[currentQuestion].classList.toggle('quiz-menu__item_active', false)

  currentQuestion++
  qiuzMenu[currentQuestion].classList.toggle('quiz-menu__item_active', true)

  updateQuestion()
}

function prevQuestion() {
  const qiuzMenu = document.getElementById('quiz-menu').children
  qiuzMenu[currentQuestion].classList.toggle('quiz-menu__item_active', false)

  currentQuestion--
  qiuzMenu[currentQuestion].classList.toggle('quiz-menu__item_active', true)

  updateQuestion()
}

function updateQuestion() {
  const quizButtons = document.getElementById('quizFooter').children
  quizButtons[1].classList.toggle('button_inactive', quizRes[currentQuestion + 1] ? false : true)
  if (currentQuestion > 0) {
    quizButtons[0].classList.toggle('button_back-inactive', false)
  } else {
    quizButtons[0].classList.toggle('button_back-inactive', true)
  }

  setQuestion(questions[currentQuestion], document.getElementById('quizQuestion'))
}

function sendForm() {
  if (quizRes[6].agree === false) alert('Необходимо поставить галочку о согласии на обработку персональных данных')
  else {
    // сюда код отправки запроса
    console.log('send data', quizRes)

    document.getElementById('modal-success').classList.toggle('modal_shown')
    clearQuiz()
  }
}

function clearQuiz() {
  currentQuestion = 0
  quizRes = {}

  const qiuzMenu = document.getElementById('quiz-menu').children
  for (item of qiuzMenu) {
    item.classList.toggle('has-answer', false)
  }
  qiuzMenu[5].classList.toggle('quiz-menu__item_active', false)
  qiuzMenu[currentQuestion].classList.toggle('quiz-menu__item_active', true)

  const quizButtons = document.getElementById('quizFooter').children
  quizButtons[1].classList.toggle('button_inactive', true)
  quizButtons[0].classList.toggle('button_back-inactive', true)

  const questionContainer = document.getElementById('quizQuestion')
  setQuestion(questions[currentQuestion], questionContainer)
}
