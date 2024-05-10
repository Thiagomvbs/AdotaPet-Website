const mode = document.getElementById('mode-icon');


mode.addEventListener('click', () => {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const about = document.querySelector('.about');
    const produto = document.querySelector('.produto');
    const pets = document.querySelector('.pets');
    const contact = document.querySelector('.contact');

    const sectionInfo = document.querySelector('.section-container');
    const sectionProdutos = document.querySelector('.section-produtos');
    const sectionPets = document.querySelector('.section-pets');
    const sectionContato = document.querySelector('.section-contato');

    const footer = document.querySelector('.footer');

    const button = document.querySelector('.button-dark');

    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        header.classList.add('dark');
        logo.classList.add('dark');
        about.classList.add('dark');
        produto.classList.add('dark');
        pets.classList.add('dark');
        contact.classList.add('dark');

        sectionInfo.classList.add('dark');
        sectionContato.classList.add('dark');
        sectionProdutos.classList.add('dark');
        sectionPets.classList.add('dark');
        footer.classList.add('dark')

        button.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');

    header.classList.remove('dark');
    logo.classList.remove('dark');
    about.classList.remove('dark');
    produto.classList.remove('dark');
    pets.classList.remove('dark');
    contact.classList.remove('dark');


    sectionInfo.classList.remove('dark');
    sectionContato.classList.remove('dark');
    sectionProdutos.classList.remove('dark');
    sectionPets.classList.remove('dark');
    footer.classList.remove('dark');
    
    button.classList.remove('dark');
});


$(document).ready(function() {
    $('.mobile-btn').on('click', function () {
        $('.mobile-menu').toggleClass('active')
        $('.mobile-btn').find('i').toggleClass('fa-x')
    });
});

