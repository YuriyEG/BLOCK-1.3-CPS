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

        let modal = document.getElementById('saidbar__mask');
        modal.style.display = 'block';

        var root = document.getElementById('root');
        root.style.position = 'fixed';
        console.log(root.style.position);
    } else {
        hidden2.style.left = '-400px';
        hidden2.style.transition = 'left 0.3s linear';
        var hidden3 = document.getElementById('saidbar__mask');
        
        hidden3.style.display = 'none';
        var saidbar = document.getElementById('sidebar');

        var root = document.getElementById('root');
        root.style.position = 'relative';

        


    }


    
    
    
};
function closebar() {

        var hidden3 = document.getElementById('saidbar__mask');
        
        hidden3.style.display = 'none';
        var saidbar = document.getElementById('sidebar');
        saidbar.style.left = '-400px';
        saidbar.style.transition = 'left 0.5s linear';

        var root = document.getElementById('root');
        root.style.position = 'relative';
        
};