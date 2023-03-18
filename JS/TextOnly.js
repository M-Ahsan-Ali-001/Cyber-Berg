function TextOnly()
{
    
    var img1 = document.getElementById('main')
    
    var img2 = document.getElementById('bg-img')
    
    var img3 = document.getElementById('img-2')
    var img4 = document.getElementById('bg')
    var displayList = document.getElementById('dropdown-content')
    var textbutton= document.getElementsByClassName('txt-mode');

if(img1.style.display != 'none')
{

    for( var i = 0; i <  textbutton.length; i++ ) {
        textbutton[i].innerHTML="Image Mode"
    }
  


    img1.style.display='none';

img2.style.display='none';

img3.style.display='none';
img4.style.display='none';
displayList.style.display='none';
  
var mobileMenu = document.getElementById('display-items') 
mobileMenu.style.display = 'none'
}
else
{
    
    for( var i = 0; i <  textbutton.length; i++ ) {
        textbutton[i].innerHTML="Text Mode"
    }
  
  
    img1.style.display='block';
      
var mobileMenu = document.getElementById('display-items') 
mobileMenu.style.display = 'none'

img2.style.display='block';

img3.style.display='block';
img4.style.display='block';
displayList.style.display='none';
}



}