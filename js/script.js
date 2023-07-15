const bocchi = document.querySelector('.bocchi');
const stone = document.querySelector('.stone');
const score = document.querySelector('.score')
let count = 0;
const jump = () => {
    bocchi.classList.add('jump');
    setTimeout(() => {

        bocchi.classList.remove('jump')

    }, 500);
}

const loop = setInterval(() => {

    const stonePosition = stone.offsetLeft;
    const bocchiPosition = +window.getComputedStyle(bocchi).bottom.replace('px', '');

    if (stonePosition <= 105 && stonePosition > 0 && bocchiPosition < 52) {

        stone.style.animation = 'none';
        stone.style.left = `${stonePosition}px`;

        bocchi.style.animation = 'none';
        bocchi.style.bottom = `${bocchiPosition}px`;

        bocchi.src = 'img/bocchi-over.png';
        bocchi.style.width = '125px';



        clearInterval(loop);

    }
    count++;
    score.innerHTML = `Score: ${count}`;


}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);