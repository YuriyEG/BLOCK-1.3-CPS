// Показ скрытого текста о компании

    
    let mainSummary  = document.querySelector('.main__summary');
    mainSummary.addEventListener( 'click', function () {
        mainSummary.classList.add('display--none');
        mainSummary.classList.remove('main__summary');
        let hiddenText = document.querySelector('.main__hidden-text');
        hiddenText.style.display = 'inline';
        
        
    });


  // Показ и скрытие бокового меню с кнопки
   let headerBurger = document.querySelector('.header__burger');
   headerBurger.addEventListener( 'click', function () {
    var sideBar = document.querySelector('.sidebar');
    if (sideBar.style.left !== '0px') {
        console.log('open');
        sideBar.style.left = '0px';
        sideBar.style.transition = 'left 0.5s ease';
        sideBar.style.boxShadow = '0 -50px 65px 0 rgba(0, 0, 0, 0.385)';
        let sidebarMask = document.querySelector('.saidbar__mask');
        console.log(sidebarMask);
        sidebarMask.classList.add('display--block');
        sidebarMask.classList.remove('#saidbar__mask');
        

        var root = document.getElementById('root');
        root.style.position = 'fixed';
   
    } else {
        console.log('close');
        sidebar.style.left = '-320px';
        sidebar.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
        sidebar.style.transition = 'left 0.3s ease';
        var saidbarMask = document.getElementById('saidbar__mask');
        saidbarMask.style.display = 'none';
        var root = document.getElementById('root');
        root.style.position = 'relative';

    } 
   })


    
    

// Скрытие бокового меню при клике на заблокированную область
function closebar() {

        var saidbarMask = document.getElementById('saidbar__mask');
        saidbarMask.style.display = 'none';
        var saidbar = document.getElementById('sidebar');
        saidbar.style.left = '-400px';
        saidbar.style.transition = 'left 0.5s ease';
        var root = document.getElementById('root');
        root.style.position = 'relative';
        saidbar.style.boxShadow = '0 0 0 0 black';
          
};


//  Показ всего списка брендов
let moreBrands = document.querySelector('.main__brands-more');

moreBrands.addEventListener('click', function () {
    let moreText = document.querySelector('.main__more-text');
    if (moreText.textContent === 'Показать все') {
        moreText.textContent = 'Скрыть';
        let brandsBox = document.querySelector('.main__brands-box');
        brandsBox.classList.add('main__brands-box--open');
    } else {
        moreText.textContent = 'Показать все';
        let brandsBox = document.querySelector('.main__brands-box');
        brandsBox.classList.remove('main__brands-box--open');

    }
  
})