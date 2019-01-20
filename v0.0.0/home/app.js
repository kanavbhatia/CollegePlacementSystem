var navbutton = document.getElementById('lmain')
var option = document.getElementById('lmain2')
var checker = false;
navbutton.onclick = function(){
    if (checker ==true){
        option.style.display = 'block';
        checker = false;
    }
    else{
        option.style.display = 'none';
        checker = true;
    }
    
}