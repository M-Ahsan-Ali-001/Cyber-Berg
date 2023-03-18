function ScrollTo(name)
{
   
    var buttonsList =['home', 'news' , 'attack' , 'preca' , 'conclusion'];
   

    for (x in buttonsList) {
        console.log(buttonsList[x] + name)

        if(buttonsList[x] ==  name)
        {
            console.log("TEST")
           var buttonChange = document.getElementById(name)
        buttonChange.style.backgroundColor = '#ffc107'
        buttonChange.style.color = 'black'
        console.log('#'+x+' div span')
        const span = document.querySelector('#'+name +' div span')
        span.style.color = 'black'

        }
        else {
            console.log('#'+x+' div span')
            var buttonChange = document.getElementById(buttonsList[x])
            buttonChange.style.backgroundColor = 'transparent'
           
            buttonChange.style.color = 'white'
         
            const span = document.querySelector( '#'+buttonsList[x]+' div span')
            span.style.color = 'white' 
        }
    
      
    }
 


}
function Scroller(elem){
    var obj=document.getElementById(elem);
    obj.scrollIntoView({behavior: 'smooth' });
    document.getElementById('display-items').style.display = 'none'

}

function Close()
{
    document.getElementById('display-items').style.display = 'none'
    document.getElementById('dropdown-content').style.display = 'none'
}