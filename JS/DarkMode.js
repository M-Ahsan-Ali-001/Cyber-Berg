function DarkMode()
{

var body = document.body   
var displayList = document.getElementById('dropdown-content')
var btnDrk= document.getElementsByClassName('drk-mode')
if(body.style.backgroundColor != "black")
{

     
    for( var i = 0; i <    btnDrk.length; i++ ) {
        btnDrk[i].innerHTML="Ligth Mode"
    }

displayList.style.display='none';  
var mobileMenu = document.getElementById('display-items') 
mobileMenu.style.display = 'none' 
body.style.backgroundColor='black'
var logo = document.getElementById('logo-half')
logo.style.color = 'white'
var para1 = document.getElementById('para')
para1.style.color = 'white'
var para2 = document.getElementById('parab')
para2.style.color = 'white'

var para3 = document.getElementById('parac')
para3.style.color = 'white'

var para2 = document.getElementById('parad')
para2.style.color = 'white'


var para3 = document.getElementsByClassName('intro')
console.log('para length: '+para3.length)

var para2 = document.getElementsByClassName('text')

for( var i = 0; i < para2.length; i++ ) {
    para3[i].style.backgroundColor = 'black'

    para2[i].style.color= 'white'
}
}
else
{
       
    for( var i = 0; i <    btnDrk.length; i++ ) {
        btnDrk[i].innerHTML="Dark Mode"
    }
    var mobileMenu = document.getElementById('display-items') 
    mobileMenu.style.display = 'none'
    displayList.style.display='none';
    body.style.backgroundColor='#f5f5f5'
    var logo = document.getElementById('logo-half')
    logo.style.color = 'rgba(0, 0, 0, 0.468)'
    var para1 = document.getElementById('para')
    para1.style.color = 'black'
    var para2 = document.getElementById('parab')
    para2.style.color = 'black'
    
    var para3 = document.getElementById('parac')
    para3.style.color = 'black'
    
    var para2 = document.getElementById('parad')
    para2.style.color = 'black'
    
    
    var para3 = document.getElementsByClassName('intro')
    console.log('para length: '+para3.length)
    
    var para2 = document.getElementsByClassName('text')
    
    for( var i = 0; i < para2.length; i++ ) {
        para3[i].style.backgroundColor = 'rgb(255, 255, 255)'
    
        para2[i].style.color= 'black'
    }

}



}