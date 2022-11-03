import vars from '../_vars';
import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';
import { removeClassInArray,addCustomClass, removeCustomClass } from "../functions/customFunctions";

const {overlay, activeClass, modalsButton , modals} = vars;
let innerButton;
const commonFunction = function() {
  removeCustomClass(overlay, activeClass);
  removeClassInArray(modals, activeClass);
  enableScroll();
}

function buttonClickHandler(e,buttonAttribute, activeClass) {
  e.preventDefault();
  const currentModalId = e.target.getAttribute(`${buttonAttribute}`);
  const curentModal = overlay.querySelector(`[data-popup="${currentModalId}"]`);

  addCustomClass(overlay, activeClass);
  addCustomClass(curentModal, activeClass);
  disableScroll();
  innerButton = overlay.querySelector(`${'[data-popup]'}.${activeClass} .close`);
  console.log(innerButton)
}

function overlayClickHandler(e, activeClass){
  if (e.target === overlay || e.target === innerButton) {
    commonFunction();
    console.log(e.target)
  }

  
}

function modalInit(buttonsArray, buttonAttribute ,activeClass) {
  buttonsArray.map(function(btn){
    btn.addEventListener('click', (e) => buttonClickHandler(e, buttonAttribute, activeClass));
  })
}

overlay.addEventListener('click', function(e){overlayClickHandler(e, activeClass)});
modalInit(modalsButton, "data-btn-modal", activeClass);