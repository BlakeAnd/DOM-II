// Your code goes here
//selecting all the links in the nav
const topLinks = document.querySelectorAll('nav a');
//loops through the selected link to add properties
for(let element of topLinks){
    //(1)adds event when mouse hovers over the link
    element.addEventListener('mouseenter', ev =>{
        element.style.color = 'grey';
    })
    //(2)adds event for when the mouse exits the area
    //?this is just reverting the style back to it's base state, is there a more elgant way to do this?
    element.addEventListener('mouseout', ev =>{
        element.style.color = 'black';
    })
    // (5) listener for clicking the navs links
    element.addEventListener('click', ev =>{
        element.style.color = 'blue';
        ev.preventDefault();
    })
}
var page = document.querySelector('html');
//(3) adds event for pressing 'f' and changes background
page.addEventListener('keydown', ev =>{
    let key = event.key; //variable for the key pressed
    if(key === 'f' || key === 'F'){ //check if variable === f
    page.style.background = 'yellow';
    }
})
//(4) resets background when key is released
//?same question as on 2?
var page = document.querySelector('html');
page.addEventListener('keyup', ev =>{
    page.style.background = 'white'; 
})
//(6) increase text size when right clicked, how make temporary??
var text = document.querySelector('p');
text.addEventListener('contextmenu', eve =>{
    text.style.fontSize = '200%';
})
//(7)
window.addEventListener('click', eve =>{
    text.style.background = 'green';
})
//(8)

//(9)
window.addEventListener('dblclick', eve =>{
    text.style.color = 'purple';
})
let bar = document.querySelector('nav');
bar.style.background = 'pink';
bar.addEventListener('click', eve =>{
    bar.style.background = 'green';
    eve.stopPropagation();
})
//(10)
window.addEventListener('scroll', eve =>{
    text.style.color = 'pink';
    
})
window.addEventListener('resize', eve =>{
    page.style.color = 'orange';
})




