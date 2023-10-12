var body = document.body;
document.addEventListener('mousemove',(e)=>{
    
    var elem =  document.createElement('div');
    elem.setAttribute('class','trail');
    elem.setAttribute('style',`left:${e.clientX + 0}px; top:${e.clientY + 0}px;`);



    //  creat karel key body ma add karva
    body.insertAdjacentElement('beforeend',elem);

    setInterval(function() {elem.remove()}, 400);
})
