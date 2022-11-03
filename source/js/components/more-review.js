// const showReviews = document.querySelector('.show-reviews');


// if (showReviews) {
//   const reviewItems = [...showReviews?.querySelectorAll('.reviews-list__item')];
//   const showMore = showReviews?.querySelector('.show-more');
//   let initialValue = 1;

//   const itemLenght = reviewItems.length;
//   function showInitialItems(itemArray,count) {
//     [...itemArray.slice(0, count)].map(function(initialItem){
//       initialItem.style.display = 'none';
//     });
//   }
//   reviewItems.map(function(reviewItem){
//     reviewItem.style.display = 'flex';
//   });
//   showInitialItems(reviewItems,initialValue);
//   showMore.addEventListener('click', function(e){
//     e.preventDefault();
//     initialValue += 2;
//     initialValue >= itemLenght ?
//     showMore.classList.add('disable'):
//     showMore.classList.remove('disable');
//     showInitialItems(reviewItems,initialValue);
//   });
// }


import _vars from '../_vars';
import {addCustomClass, toggleCustomClass, elementHeight, removeCustomClass} from '../functions/customFunctions'

const showMore = document.querySelector('.order-adress__btn');
const showItem = document.querySelector('.adress-form');
const saveItem = [...document.querySelectorAll('.order-nav__btn')];

showMore.addEventListener('click', function(){
  toggleCustomClass(showMore, 'disable');
  toggleCustomClass(showItem, 'active');
})

saveItem.map(function(btn){
  btn.addEventListener('click', function(){
    removeCustomClass(showMore, 'disable');
    removeCustomClass(showItem, 'active');
  })
})

