import { addCustomClass,removeCustomClass } from "../functions/customFunctions";

 const lift = document.querySelector('[data-lift]');

 console.log('[data-lift]');

 
 if (lift) {
  let timeOut;
  
  window.onscroll = function () {
    
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    console.log('lift');
    if (scrolled > 500) {
      addCustomClass(lift, "show");
    } else {
      removeCustomClass(lift, "show");
    }
  }

  lift.addEventListener('click', function(){
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top > 0) {
      window.scrollBy(0,document.documentElement.scrollTop * -1);
    };
  })

 }


