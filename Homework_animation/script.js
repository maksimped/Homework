function moveAnimation(){
    let elem  = document.getElementById('animation');
    let pos = 0;
    let id = setInterval(frame, 23);
    function frame (){
        if(pos == 42){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'vw';
            elem.style.left = pos + 'vw';
            
        }
    }
}

setTimeout(moveAnimation(),2000);