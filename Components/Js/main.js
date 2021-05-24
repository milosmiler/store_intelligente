// variables

let iconOpen = document.querySelector('.item-menu'),
    iconmobile = document.querySelector('.burger-nav'),
    iconClose = document.querySelector('span.close'),
    nav = document.querySelector('nav'),
    language = document.querySelector('span.language'),
    submenu = document.querySelector('nav a.sub');


//    eventos

    iconOpen.addEventListener("click", menuOpen);
    iconmobile.addEventListener("click", menuOpen);
    iconClose.addEventListener("click", menuClose);
    submenu.addEventListener("click", subMenu);
    language.addEventListener("click", openLanguaje)

// funciones

    function menuOpen(){
        nav.classList.add('active');
    }

    function menuClose(){
        nav.classList.remove('active');
    }

    function subMenu() {
        let ul = document.querySelector('nav ul');
            ul.classList.toggle('active');
    }

    function openLanguaje(){
        console.log('hola');
    }

// general
    if (document.querySelector('section.contacto')) {
        let img = document.querySelector('#images');
        img.setAttribute("src", "images/logo.svg");
    }


    if (!document.querySelector('section.cover') && !document.querySelector('section.cover-about')) {
        let data = document.querySelector('span.language'),
            data2 = document.querySelector('.item-menu');

            data.classList.add('active');
            data2.classList.add('active');

    }
    if (document.querySelector('section.contacto')) {
        document.querySelector('.burger-nav .item-bar').classList.add('active');
        document.querySelector('.burger-nav i.item-bar:nth-child(2)').classList.add('active');
        document.querySelector('.burger-nav i.item-bar:nth-child(3)').classList.add('active');
    }
