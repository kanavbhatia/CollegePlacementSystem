 let sec1 = document.getElementById('sec1');
 let sec2 = document.getElementById('sec2');
 let sec3 = document.getElementById('sec3');
 let sec4 = document.getElementById('sec4');
 let sec = document.getElementsByClassName("content");
 function change_display(j)
 {
  
    for (i = 0; i < sec.length; i++) {
        sec[i].style.display = 'none';
      }
      sec[j].style.display = 'flex';
 }
 sec1.onclick = function(){
    change_display(0);
 }
 sec2.onclick = function(){
    change_display(1);
 }
 sec3.onclick = function(){
    change_display(2);
 }
 sec4.onclick = function(){
    change_display(3);
 }