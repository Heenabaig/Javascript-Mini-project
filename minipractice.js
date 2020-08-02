
function DisplayQuote() {
    var Quotez = ['Happiness is....Coding', 'Delivering good software today is often better than perfect software tomorrow','If you can write HELLO WORLD you can change the world', 'Try try till you succeed', 'Where there is a will there is a way', 'Believe you can and you are halfway there', 'Never giveup!', 'Be positive', 'Neve bend your head. Hold it high. Look the world straight in the eye','Experience is the name everyone gives to their mistakes', 'Everyday life is like programming, I guess. If you love something you can put beauty into it'];
    var Choose = Math.floor(Math.random() * (Quotez.length));
    document.write(Quotez[Choose]);
}

document.addEventListener("load", DisplayQuote());
