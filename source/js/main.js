'use strict'

const btn = document.querySelector('.nav__toggle')
const nav = document.querySelector('.nav')
const popupNegative = document.querySelector('.popup--negative')
const popupPositive = document.querySelector('.popup--positive')
const button = document.querySelector('.review__btn')
const fileds = document.querySelectorAll('.review__text')
const popupBtns = document.querySelectorAll('.popup__btn')

nav.classList.remove('nav--nojs')
btn.addEventListener('click', function(e) {
  e.preventDefault()
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed')
    nav.classList.add('nav--opened')
  } else {
    nav.classList.remove('nav--opened')
    nav.classList.add('nav--closed')
  }
})

button.addEventListener('click', (e) => {
  e.preventDefault()
  if (fileds[0].value && fileds[1].value && fileds[3].value && fileds[4].value) {
    popupPositive.classList.add('popup--active')
  } else {
    popupNegative.classList.add('popup--active')
  }
})

popupBtns[0].addEventListener('click', () => {
  popupPositive.classList.remove('popup--active')
})

popupBtns[1].addEventListener('click', () => {
  popupNegative.classList.remove('popup--active')
})

function initMap(){
  const map = new google.maps.Map(document.querySelector('#map'), {
    center: {lat: 34.868220, lng: -111.893297},
    scrollwheel: false,
    zoom: 10,
    mapTypeControl: false
  })
}
