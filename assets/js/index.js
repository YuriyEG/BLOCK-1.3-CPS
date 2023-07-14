function show() {
    var hidden = document.getElementById('more');
    var moreText = document.getElementById('more-text');
    var pict = document.getElementById('pict');
    moreText.style.display = 'none';
    hidden.style.display = 'inline';
 
        
    
    
    
    
};

function showbar() {
    var hidden2 = document.getElementById('sidebar');

    if (hidden2.style.left !== '0px') {
        hidden2.style.left = '0px';
        hidden2.style.transition = 'left 0.5s linear';

        let modal = document.getElementById('sb__modal');
        modal.style.display = 'block';

    } else {
        hidden2.style.left = '-400px';
        hidden2.style.transition = 'left 0.3s linear';
        var hidden3 = document.getElementById('sb__modal');
        
        hidden3.style.display = 'none';
        var saidbar = document.getElementById('sidebar');
        

    }
    
    
    
};
function closebar() {

        var hidden3 = document.getElementById('sb__modal');
        
        hidden3.style.display = 'none';
        var saidbar = document.getElementById('sidebar');
        saidbar.style.left = '-400px';
        saidbar.style.transition = 'left 0.5s linear';
        

    
};