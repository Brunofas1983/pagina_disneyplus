document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const herosection = document.querySelector('.hero');
    const alturaHero = herosection.clientHeigth;

    
    window.addEventListener('scroll', function() {
        const posicaoatual = window.scrollY;
        
        if (posicaoatual < alturaHero) {
            ocultaelementosdoheader();
        } else {
            exibeelementosdoheader();
        }
        
    })
    
    

    
    // Seção de atrações programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaalvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaalvo}]`);
            escondetodasasabas();
            aba.classList.add('shows__list--is--active');
            removebotaoativo();
            botao.target.classList.add('shows__tabs__button--is--active');
        })
    }

    // Seção faq, Acordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreoufecharespostas);
    }
})

    // Seção ocultando header
    function ocultaelementosdoheader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }
    
    function exibeelementosdoheader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }


function abreoufecharespostas(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementopai = elemento.target.parentNode;

    elementopai.classList.toggle(classe);
}

function removebotaoativo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function escondetodasasabas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    
    }
}

