// Показ скрытого текста

function show() {
    
    var moreText = document.getElementById('more-text');
    moreText.style.display = 'none';
    var more = document.getElementById('more');
    more.style.display = 'inline';
 
};

// Показ и скрытие бокового меню с кнопки
function showbar() {

    var sidebar = document.getElementById('sidebar');

    if (sidebar.style.left !== '0px') {

        sidebar.style.left = '0px';
        sidebar.style.transition = 'left 0.5s linear';
        sidebar.style.boxShadow = '0 -50px 65px 0 rgba(0, 0, 0, 0.385)';
        let sidebarMask = document.getElementById('saidbar__mask');
        sidebarMask.style.display = 'block';
        var root = document.getElementById('root');
        root.style.position = 'fixed';
   
    } else {

        sidebar.style.left = '-320px';
        sidebar.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
        sidebar.style.transition = 'left 0.3s linear';
        var saidbarMask = document.getElementById('saidbar__mask');
        saidbarMask.style.display = 'none';
        var root = document.getElementById('root');
        root.style.position = 'relative';

    } 
};

// Скрытие бокового меню при клике на заблокированную область
function closebar() {

        var saidbarMask = document.getElementById('saidbar__mask');
        saidbarMask.style.display = 'none';
        var saidbar = document.getElementById('sidebar');
        saidbar.style.left = '-400px';
        saidbar.style.transition = 'left 0.5s linear';
        var root = document.getElementById('root');
        root.style.position = 'relative';
        saidbar.style.boxShadow = '0 0 0 0 black';
          
};