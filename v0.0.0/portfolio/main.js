 let sec1 = document.getElementById('sec1');
 let sec2 = document.getElementById('sec2');
 let sec3 = document.getElementById('sec3');
 let sec4 = document.getElementById('sec4');
 let sec = document.getElementsByClassName("content");
 // function change_display(j)
 // {
 // 	sec[0].style.display = 'none';
 // 	sec[1].style.display = 'none';
 // 	sec[2].style.display = 'none';
 // 	sec[3].style.display = 'none';
 //    sec[j].style.display = 'flex';

 //    // for (i = 0; i < 4 && i!=j; i++) {
 //    //     sec[i].style.display = 'none';
 //    //   }

 // }

 // sec1.onclick = function(){
 //    change_display(0);
 // }
 // sec2.onclick = function(){
 //    change_display(1);
 // }
 // sec3.onclick = function(){
 //    change_display(2);
 // }
 // sec4.onclick = function(){
 //    change_display(3);
 // }
function change_display(){
	 if(sec1.onclick){
		sec[0].style.display = 'flex';
	 	sec[1].style.display = 'none';
	 	sec[2].style.display = 'none';
	 	sec[3].style.display = 'none';
	 }
	    
	 if(sec2.onclick){
		sec[0].style.display = 'none';
	 	sec[1].style.display = 'flex';
	 	sec[2].style.display = 'none';
	 	sec[3].style.display = 'none';
	 }
	if(sec3.onclick){
		sec[0].style.display = 'none';
	 	sec[1].style.display = 'none';
	 	sec[2].style.display = 'flex';
	 	sec[3].style.display = 'none';
	 }
	if(sec4.onclick){
		sec[0].style.display = 'none';
	 	sec[1].style.display = 'none';
	 	sec[2].style.display = 'none';
	 	sec[3].style.display = 'flex';
	 }

}

change_display();