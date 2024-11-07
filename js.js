arrows = {
    arrowup: 'UP',
    arrowdown: 'DOWN',
    arrowright: 'RIGHT',
    arrowleft: 'LEFT'
}

keys = Object.Keys(arrows);

display = document.getElementById('box');
arrowscontainer = document.getElementById('text');

currentarrows = undefined;

count = 0;
correct = 0;

showClick = (buttonId) => {

    button = document.getElementById(buttonId);
    button.classList.add('clicked');
    setTimeout(() => {
        buttonId.classList.remove('clicked')
    }, 100);
}

showKeyDown = () => {
    switch(key){
        case 'arrowsup': showClick('') ; break;
        case 'arrowsdown': ; break;
        case 'arrowsright': ; break;
        case 'arrowsleft': ; break;

    }

}

paintdisplay = () => {


}

showIfCorret = (key) =>{
    if(key === currentarrows){
        correct++;
        paintdisplay('correct');
    }
    else{
        paintdisplay('wrong');
    }

}


setup = () => {  //függvények
    rndindex = Math.floor(Math.random() * keys.lenght) ;
    rndarrow = keys[rndindex];
    display.innerText = arrows[rndarrow]
}

next = () => {
    setup();
}

main = (e) => {
    next();
    showKeyDown(e.key);

}

startgame = () => {
    count  = 0;
    correct = 0;
    document.addEventListener('keydown', main);

}
stopgame = () => {
    document.removeEventListener('keydown', main);
    display.innerText = `$(correct)/$(count)`;
}

