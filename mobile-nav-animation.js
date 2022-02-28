const navBtns = document.querySelectorAll('.menu-icon');
const mobileNavigation = document.querySelector('#mobile-navigation');
let visibility = mobileNavigation.getAttribute('data-visible');


for (el of navBtns){
    el.addEventListener('click', ()=>{ 
        let visibility = mobileNavigation.getAttribute('data-visible');

        if (visibility === 'false'){
            mobileNavigation.setAttribute('data-visible', 'true');
            visibility = 'true'
        } else{
            mobileNavigation.setAttribute('data-visible', 'false');
            visibility = 'false'
        }


    })

}


