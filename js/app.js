//SCROLL
const navbar = document.querySelector('.navbar');
const menus = document.querySelectorAll('li.navbar-items a.nav-link');

const homes = document.querySelector('.homes');
const portfolios = document.querySelector('.portfolios');
const abouts = document.querySelector('.abouts');
const contacts = document.querySelector('.contacts');
// console.log(homes);

window.addEventListener('scroll',()=>{
    const scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }

//MENU NAV ITEMS COLORS

    if(scrolly <=390){
        homes.classList.add('activenavs');
    }
    else{
        homes.classList.remove('activenavs');
    }

    if(scrolly >= 400){
        portfolios.classList.add('activenavs');
    }  
    else{
        portfolios.classList.remove('activenavs');
    }

    if(scrolly >= 1100){
        portfolios.classList.remove('activenavs');
        abouts.classList.add('activenavs');
    }
    else{
        abouts.classList.remove('activenavs');
    }

    if(scrolly >= 1700){
        abouts.classList.remove('activenavs');
        contacts.classList.add('activenavs');
    }
    else{
        contacts.classList.remove('activenavs');
    }
});

//START ABOUT SECTION
const faqs = document.querySelectorAll('.faq-infos');
const faqinfos = document.querySelectorAll('.faqinfos');
const faqtoggles = document.querySelectorAll('.faq-toggles');

faqs.forEach((faq)=>{
    // console.log(faq);  
    faq.addEventListener('click',()=>{
    //    console.log('hi');
    faq.classList.toggle('active');
    });
});



//END ABOUT SECTION

// START FOOTER SECTION 
const dates = document.getElementById('copyright');
let year = new Date().getUTCFullYear();
dates.textContent = year;

// END FOOTER SECTION 
