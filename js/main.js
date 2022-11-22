const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const game = document.querySelector(".game");

document.addEventListener('keydown', function(event){
    jump();
})

function jump(){
    // если дино не имеет класса джамп, то мы его добавляем
    if (dino.classList != 'jump'){
        dino.classList.add('jump');
    }

    setTimeout(function(){
        dino.classList.remove('jump');
    }, 300)
}

let isAlive = setInterval (function(){
    // возвращает целое число-        возвращает все css свойства указанного элемента - получить указаное свойство
    // то есть возвращаеми положение обьектов
    let dinoTop =     parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert('Game over');
        game.innerHTML = '';
        location.reload();
    }
},)
