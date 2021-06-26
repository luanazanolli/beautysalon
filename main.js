// caracter = char
// conjunto de caracter = string
// conjunto de caracteres devem estar entre aspas simples, duplas ou crase

// números = number
// números não precisa estar entre aspas

// controle de verdadeiros ou falsos
// dados lógicos = dados boolean - true or false (dados bolleanos)

// agrupamento de dados = estrutura de dados
// posso agrupar como objetos = exemplo:
//({
// carro: 'carro'
//  cor: 'vermelho'
// correr: function() {
//
//}
//})

//function liquidificador(frutas) {
//  alert(frutas)
//}
//liquidificador('maçã e banana')
// o resultado será mação e banana como um alert no navegador

// alert (1) = aparecerá o número 1 como um alert no navegador

//var nome = 'maik'
//nome = 'valeska'
//alert(nome) - o resultado será Valeska

//const nome = 'maik'
//nome = 'valeska' //esta linha não poderia existir, pois constante vale somente o primeiro valor atribuido ao nome.
//alert(nome)
// se rodar o código como está aí, gera um erro. Dar F12 na pagína > acessar aba console:
// Uncaught TypeError: Assignment to constant variable.
//at main.js:34. Traduzindo, está dizendo que está sendo atribuido um valor em uma
// variavel constante, no arquivo main.js, linha 34.

//const pessoa = {
//  name: 'maik',
//  age: 37,
//  falar: function () {
//    alert(pessoa.name) //pode ser name ou age - irá trazer os dados propriedade/chave
//  }
//}
//pessoa.falar() //irá chamar a função falar

// DOM Document Object Model

// ABRIR MENU E FECHAR MENU QUANDO CLICAR NO ICONE
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
//console.log(toogle) - para mostrar no F12 o que está buscando
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// AO SELECIONAR UM ITEM DO MENU, DEVE FECHAR O MENU E POSICIONAR TELA PARA O ITEM SELECIONADO
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//MUDAR O HEADER DA PAGINA QUANDO DER SCROLL (ROLAR PARA BAIXO)
const header = document.querySelector('header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

// testimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//Scroll Reveal - Mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text
#services header, #services .card
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links, footer .brand, footer .social`,
  { interval: 100 }
)

// Botão: voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//MENU ATIVO CONFORME A SEÇÃO VISIVEL NA PAGINA
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
